import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { UserPlus, Users, CheckCircle, LogOut } from "lucide-react";
import { db, collection, addDoc, onSnapshot, query, getDocs } from "@/lib/firebase";
import { toast } from "sonner";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [regCount, setRegCount] = useState(0);

  // Check if already registered on mount
  useEffect(() => {
    const stored = localStorage.getItem("registered_user");
    if (stored) {
      try {
        const data = JSON.parse(stored);
        if (data.name && data.email) {
          setName(data.name);
          setEmail(data.email);
          setSubmitted(true);
        }
      } catch {}
    }
  }, []);

  // Real-time registration count from Firebase
  useEffect(() => {
    const q = query(collection(db, "registrations"));
    const unsub = onSnapshot(q, (snapshot) => {
      setRegCount(snapshot.size);
    });
    return () => unsub();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setLoading(true);
    try {
      // Check for duplicate email in Firebase
      const q = query(collection(db, "registrations"));
      const snapshot = await getDocs(q);
      const existingDoc = snapshot.docs.find(
        (doc) => {
          const data = doc.data();
          return data.email && data.email.toLowerCase() === email.trim().toLowerCase();
        }
      );

      if (existingDoc) {
        const existingData = existingDoc.data();
        // Already registered — restore local state with the original name
        localStorage.setItem("registered_user", JSON.stringify({ 
          name: existingData.name || name.trim(), 
          email: email.trim() 
        }));
        window.dispatchEvent(new Event("user-registered"));
        setName(existingData.name || name.trim());
        setSubmitted(true);
        toast.info("This email is already registered! Welcome back.");
        setLoading(false);
        return;
      }

      // New registration
      await addDoc(collection(db, "registrations"), {
        name: name.trim(),
        email: email.trim(),
        registeredAt: new Date().toISOString(),
      });
      localStorage.setItem("registered_user", JSON.stringify({ name: name.trim(), email: email.trim() }));
      window.dispatchEvent(new Event("user-registered"));
      setSubmitted(true);
      toast.success("Registration successful!");
    } catch (err) {
      console.error("Registration error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleUnregister = () => {
    localStorage.removeItem("registered_user");
    window.dispatchEvent(new Event("user-registered"));
    setName("");
    setEmail("");
    setSubmitted(false);
    toast.success("You've been unregistered. You can register again.");
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card rounded-3xl p-8 shadow-calm-lg text-center max-w-md mx-auto"
      >
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold text-card-foreground mb-2">
          You're Registered!
        </h3>
        <p className="font-body text-muted-foreground">
          Welcome to the Day of Calm Summit, {name}. We'll send details to {email}.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-body text-sm font-semibold">
          <Users className="w-4 h-4" />
          {regCount} people registered
        </div>
        <button
          onClick={handleUnregister}
          className="mt-4 flex items-center gap-2 mx-auto px-4 py-2 rounded-full text-muted-foreground hover:text-foreground font-body text-xs transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          Register with a different email
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-md mx-auto"
    >
      <div className="bg-card rounded-3xl p-8 shadow-calm-lg">
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-display text-2xl font-bold text-card-foreground">
            Register for the Summit
          </h3>
          <p className="font-body text-sm text-muted-foreground mt-1">
            Free registration — join {regCount}+ attendees
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-input bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-input bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-full bg-primary text-primary-foreground font-body font-bold text-lg hover:scale-[1.02] transition-transform shadow-calm-lg disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register Now — It's Free"}
          </button>
        </form>

        <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
          <Users className="w-4 h-4" />
          <span className="font-body text-xs">{regCount} registered so far</span>
        </div>
      </div>
    </motion.div>
  );
};

export default RegistrationForm;
