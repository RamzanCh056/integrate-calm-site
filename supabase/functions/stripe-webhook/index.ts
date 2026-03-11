import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "npm:@supabase/supabase-js@2.57.2";

serve(async (req) => {
  const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
    apiVersion: "2025-08-27.basil",
  });

  const signature = req.headers.get("stripe-signature");
  const body = await req.text();
  const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");

  let event: Stripe.Event;
  try {
    if (webhookSecret && signature) {
      event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);
    } else {
      event = JSON.parse(body) as Stripe.Event;
    }
  } catch (err) {
    console.error("Webhook verification error:", err);
    return new Response("Invalid signature", { status: 400 });
  }

  console.log(`Received event: ${event.type}`);

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const metadata = session.metadata || {};
    const amountTotal = session.amount_total || 0;
    const customerDetails = session.customer_details;

    // Priority: metadata > Stripe customer_details > fallback
    const donorName = metadata.donor_name || customerDetails?.name || "Anonymous";
    const donorEmail = metadata.donor_email || customerDetails?.email || session.customer_email || "";

    console.log(`Checkout completed: ${donorName} - $${amountTotal / 100}`);

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Check if already saved (idempotent with verify-donation)
    const { data: existing } = await supabase
      .from("donations")
      .select("id")
      .eq("stripe_session_id", session.id)
      .maybeSingle();

    if (!existing) {
      const { error } = await supabase.from("donations").insert({
        donor_name: donorName,
        donor_email: donorEmail,
        amount: amountTotal,
        stripe_session_id: session.id,
      });

      if (error) {
        console.error("Error inserting donation:", error);
      } else {
        console.log(`Donation recorded successfully`);
      }
    } else {
      console.log("Donation already recorded via verify-donation");
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
});
