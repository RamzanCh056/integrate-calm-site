import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "valid" | "already" | "invalid" | "success" | "error">("loading");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    const validate = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${token}`,
          { headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY } }
        );
        const data = await res.json();
        if (res.ok && data.valid) setStatus("valid");
        else if (data.reason === "already_unsubscribed") setStatus("already");
        else setStatus("invalid");
      } catch {
        setStatus("invalid");
      }
    };
    validate();
  }, [token]);

  const handleUnsubscribe = async () => {
    setProcessing(true);
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) throw error;
      setStatus(data?.success ? "success" : "error");
    } catch {
      setStatus("error");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="bg-card rounded-3xl p-10 shadow-calm-lg max-w-md w-full text-center">
        {status === "loading" && <p className="text-muted-foreground">Validating...</p>}
        {status === "valid" && (
          <>
            <h1 className="font-display text-2xl font-bold text-foreground mb-4">Unsubscribe</h1>
            <p className="text-muted-foreground mb-6">Click below to unsubscribe from Day of Calm emails.</p>
            <button
              onClick={handleUnsubscribe}
              disabled={processing}
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:scale-[1.02] transition-transform disabled:opacity-50"
            >
              {processing ? "Processing..." : "Confirm Unsubscribe"}
            </button>
          </>
        )}
        {status === "already" && (
          <>
            <h1 className="font-display text-2xl font-bold text-foreground mb-4">Already Unsubscribed</h1>
            <p className="text-muted-foreground">This email has already been unsubscribed.</p>
          </>
        )}
        {status === "success" && (
          <>
            <h1 className="font-display text-2xl font-bold text-foreground mb-4">Unsubscribed</h1>
            <p className="text-muted-foreground">You've been successfully unsubscribed.</p>
          </>
        )}
        {(status === "invalid" || status === "error") && (
          <>
            <h1 className="font-display text-2xl font-bold text-foreground mb-4">Something went wrong</h1>
            <p className="text-muted-foreground">This unsubscribe link is invalid or expired.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Unsubscribe;
