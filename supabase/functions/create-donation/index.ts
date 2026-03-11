import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "npm:@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { amount, donor_name, donor_email, recurring } = await req.json();
    
    if (!amount || amount < 100) {
      throw new Error("Minimum donation is $1");
    }

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // If we have an email, check for existing customer
    let customerId;
    if (donor_email && donor_email !== "anonymous@donor.com") {
      const customers = await stripe.customers.list({ email: donor_email, limit: 1 });
      if (customers.data.length > 0) {
        customerId = customers.data[0].id;
      }
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : (donor_email && donor_email !== "anonymous@donor.com" ? donor_email : undefined),
      line_items: [
        {
          price_data: {
            currency: "usd",
            product: "prod_U6H6zx4aDv294C",
            unit_amount: amount,
            ...(recurring ? { recurring: { interval: "month" } } : {}),
          },
          quantity: 1,
        },
      ],
      mode: recurring ? "subscription" : "payment",
      success_url: `${req.headers.get("origin")}/?donation=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/?donation=cancelled`,
      metadata: {
        donor_name: donor_name || "",
        donor_email: donor_email || "",
        amount: String(amount),
      },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    return new Response(JSON.stringify({ error: msg }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
