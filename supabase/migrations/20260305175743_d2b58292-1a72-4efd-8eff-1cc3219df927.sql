
-- Create donations table to store verified Stripe donations
CREATE TABLE public.donations (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    donor_name TEXT NOT NULL,
    donor_email TEXT NOT NULL,
    amount INTEGER NOT NULL, -- in cents
    stripe_session_id TEXT UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

-- Anyone can read donations (for the donor wall)
CREATE POLICY "Donations are publicly readable"
ON public.donations FOR SELECT USING (true);

-- Only service role can insert (from webhook)
CREATE POLICY "Service role can insert donations"
ON public.donations FOR INSERT
WITH CHECK (true);
