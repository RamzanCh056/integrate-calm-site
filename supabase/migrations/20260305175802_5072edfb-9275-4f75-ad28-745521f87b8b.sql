
-- Drop the overly permissive insert policy
DROP POLICY "Service role can insert donations" ON public.donations;

-- No INSERT policy needed since webhook uses service_role_key which bypasses RLS
