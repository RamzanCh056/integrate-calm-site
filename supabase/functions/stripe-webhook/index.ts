import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "npm:@supabase/supabase-js@2.57.2";

serve(async (req) => {
  const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
    apiVersion: "2025-08-27.basil",
  });

  const signature = req.headers.get("stripe-signature");
  const body = await req.text();

  let event: Stripe.Event;
  try {
    // For now, parse without webhook secret verification
    // TODO: Add STRIPE_WEBHOOK_SECRET for production
    event = JSON.parse(body) as Stripe.Event;
  } catch (err) {
    console.error("Webhook parse error:", err);
    return new Response("Invalid payload", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const metadata = session.metadata || {};
    const amountTotal = session.amount_total || 0;

    if (amountTotal >= 2000) {
      const supabase = createClient(
        Deno.env.get("SUPABASE_URL") ?? "",
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
      );

      const { error } = await supabase.from("donations").insert({
        donor_name: metadata.donor_name || "Anonymous",
        donor_email: metadata.donor_email || session.customer_email || "",
        amount: amountTotal,
        stripe_session_id: session.id,
      });

      if (error) {
        console.error("Error inserting donation:", error);
      } else {
        console.log(`Donation recorded: ${metadata.donor_name} - $${amountTotal / 100}`);
      }
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
});
