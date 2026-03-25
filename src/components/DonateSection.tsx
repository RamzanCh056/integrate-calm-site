import { useState, useEffect } from "react";
import { Heart, Play, Award, Film, Shield, CreditCard } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { db, collection, addDoc } from "@/lib/firebase";
import DonorInfoDialog from "./DonorInfoDialog";
import DonationSuccessDialog from "./DonationSuccessDialog";

const presetAmounts = [20, 50, 100, 250];

const perks = [
  { icon: Play, text: "Full live stream access" },
  { icon: Heart, text: "Submit a message featured during the community segment" },
  { icon: Award, text: "Digital participation badge" },
  { icon: Film, text: "Access to event recordings" },
];

const getRegisteredUser = (): { name: string; email: string } | null => {
  try {
    const stored = localStorage.getItem("registered_user");
    if (stored) {
      const data = JSON.parse(stored);
      if (data.name && data.email) return data;
    }
  } catch {}
  return null;
};

const DonateSection = () => {
  const [amount, setAmount] = useState(1);
  const [custom, setCustom] = useState("");
  const [recurring, setRecurring] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showDonorDialog, setShowDonorDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [successAmount, setSuccessAmount] = useState(0);
  const [registeredUser, setRegisteredUser] = useState<{ name: string; email: string } | null>(getRegisteredUser);
  const isCustom = !presetAmounts.includes(amount);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("donation") === "success") {
      const sessionId = params.get("session_id");
      const url = new URL(window.location.href);
      url.searchParams.delete("donation");
      url.searchParams.delete("session_id");
      window.history.replaceState({}, "", url.pathname);

      if (sessionId) {
        supabase.functions.invoke("verify-donation", {
          body: { session_id: sessionId },
        }).then(async ({ data, error }) => {
          if (error) {
            console.error("Verify donation error:", error);
          } else {
            console.log("Donation verified:", data);
            if (data?.amount) {
              setSuccessAmount(data.amount);
            }
            if (data?.saved) {
              try {
                await addDoc(collection(db, "donations"), {
                  name: data.donor_name || "Anonymous",
                  email: data.donor_email || "",
                  amount: data.amount || 0,
                  donatedAt: new Date().toISOString(),
                });
              } catch (fbErr) {
                console.error("Firebase donation save error:", fbErr);
              }
            }
          }
          setShowSuccessDialog(true);
          window.dispatchEvent(new Event("donation-completed"));
        });
      } else {
        setShowSuccessDialog(true);
      }
    }
  }, []);

  useEffect(() => {
    const handleRegistration = () => {
      setRegisteredUser(getRegisteredUser());
    };
    window.addEventListener("user-registered", handleRegistration);
    const interval = setInterval(() => {
      const user = getRegisteredUser();
      if (user && !registeredUser) setRegisteredUser(user);
    }, 1000);
    return () => {
      window.removeEventListener("user-registered", handleRegistration);
      clearInterval(interval);
    };
  }, [registeredUser]);

  const handleCustom = (val: string) => {
    setCustom(val);
    const num = parseInt(val);
    if (!isNaN(num) && num >= 1) setAmount(num);
  };

  const handleDonateClick = () => {
    if (amount < 1) {
      toast.error("Minimum donation is $1");
      return;
    }
    const user = registeredUser || getRegisteredUser();
    handleProceedToPayment(user?.name || "", user?.email || "");
  };

  const handleProceedToPayment = async (donorName: string, donorEmail: string) => {
    setShowDonorDialog(false);
    setLoading(true);
    const paymentWindow = window.open("about:blank", "_blank");
    
    try {
      const { data, error } = await supabase.functions.invoke("create-donation", {
        body: {
          amount: amount * 100,
          donor_name: donorName || "Anonymous",
          donor_email: donorEmail || "anonymous@donor.com",
          recurring,
        },
      });

      if (error) throw error;
      if (data?.url) {
        setSuccessAmount(amount);
        if (paymentWindow) {
          paymentWindow.location.href = data.url;
        } else {
          window.location.href = data.url;
        }
      } else {
        paymentWindow?.close();
      }
    } catch (err) {
      console.error("Donation error:", err);
      paymentWindow?.close();
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="donate" className="py-24 md:py-32 bg-gradient-sky">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            {/* Left column */}
            <div>
              <div className="mb-10">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Support the Movement.{" "}
                  <span className="text-gradient-calm">Share Your Voice.</span>
                </h2>
                <p className="font-body text-lg text-muted-foreground mb-4">
                  Every dollar makes a difference. Donate to receive:
                </p>
              </div>

              <div className="space-y-5 mb-8">
                {perks.map((perk, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-card shadow-calm"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <perk.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-body text-card-foreground text-base pt-1.5">
                      {perk.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Donation Card */}
            <div className="bg-card rounded-3xl p-8 shadow-calm-lg">
              {/* Toggle */}
              <div className="flex items-center justify-center gap-1 mb-8 bg-secondary rounded-full p-1 max-w-xs mx-auto">
                <button
                  onClick={() => setRecurring(false)}
                  className={`flex-1 py-2 rounded-full font-body text-sm font-medium transition-colors ${
                    !recurring
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  One-time
                </button>
                <button
                  onClick={() => setRecurring(true)}
                  className={`flex-1 py-2 rounded-full font-body text-sm font-medium transition-colors ${
                    recurring
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Monthly
                </button>
              </div>

              {/* Amounts */}
              <div className="grid grid-cols-4 gap-3 mb-4">
                {presetAmounts.map((a) => (
                  <button
                    key={a}
                    onClick={() => {
                      setAmount(a);
                      setCustom("");
                    }}
                    className={`py-3 rounded-xl font-body font-semibold text-lg transition-colors ${
                      amount === a && !isCustom
                        ? "bg-primary text-primary-foreground shadow-calm"
                        : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                    }`}
                  >
                    ${a}
                  </button>
                ))}
              </div>

              {/* Custom */}
              <div className="relative mb-8">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-body text-muted-foreground text-lg">
                  $
                </span>
                <input
                  type="number"
                  min={1}
                  placeholder="Custom amount"
                  value={custom}
                  onChange={(e) => handleCustom(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 rounded-xl border border-input bg-background font-body text-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              {/* CTA */}
              <button
                onClick={handleDonateClick}
                disabled={loading}
                className="w-full py-4 rounded-full bg-donate text-donate-foreground font-body font-bold text-lg hover:scale-[1.02] transition-transform shadow-calm-lg mb-3 disabled:opacity-50"
              >
                {loading
                  ? "Processing..."
                  : `$${amount} — Donate to Day of Calm`}
              </button>

              <p className="font-body text-xs text-muted-foreground text-center mb-6">
                Community messages are curated to align with the summit's mission.
              </p>

              {/* Trust */}
              <div className="flex items-center justify-center gap-4 text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span className="font-body text-xs">Secure Payment</span>
                <CreditCard className="w-4 h-4" />
                <span className="font-body text-xs">Powered by Stripe</span>
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-primary/5 border border-primary/10">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1.5">
                  🌍 Calm Voices of the World
                </h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  Your donation helps amplify voices from every corner of the globe. As part of our mission, community messages submitted by donors are featured during the summit — because true calm begins when everyone is heard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DonorInfoDialog
        open={showDonorDialog}
        onOpenChange={setShowDonorDialog}
        onProceed={handleProceedToPayment}
        amount={amount}
      />

      <DonationSuccessDialog
        open={showSuccessDialog}
        onOpenChange={setShowSuccessDialog}
      />
    </>
  );
};

export default DonateSection;
