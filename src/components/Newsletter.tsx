import { Mail } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email: email.toLowerCase().trim() });

      if (error) {
        if (error.code === "23505") { // Unique constraint violation
          toast.error("This email is already subscribed!");
        } else {
          toast.error("Failed to subscribe. Please try again.");
        }
      } else {
        toast.success("Successfully subscribed to our newsletter!");
        setEmail("");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-card/50 border-y border-border/30 py-8 sm:py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-border/50 rounded-md flex items-center justify-center">
              <Mail className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-base">
                Subscribe for Updates
              </h3>
              <p className="text-muted-foreground text-xs">
                Product launches and industry news
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              disabled={loading}
              className="flex-1 md:w-72 bg-card border border-border rounded-lg py-2.5 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-5 py-2.5 rounded-lg transition-all whitespace-nowrap text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
