import { useEffect, useState } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { toast } from "sonner";
import { Loader2, ArrowLeft } from "lucide-react";

const TITLE = "Concierge Login | Vantaggio Travel";
const DESCRIPTION =
  "Secure sign-in for the Vantaggio concierge team to manage traveller enquiries and bookings.";

export const Route = createFileRoute("/auth")({
  component: AuthPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin", replace: true });
    });
  }, [navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/admin`,
            data: { full_name: fullName },
          },
        });
        if (error) throw error;
        toast.success("Account created — check your email to confirm, then sign in.");
        setMode("signin");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: "/admin", replace: true });
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  };

  const google = async () => {
    setBusy(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      toast.error("Google sign-in failed. Please try again.");
      setBusy(false);
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/admin", replace: true });
  };

  const field =
    "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-amber-brand focus:ring-2 focus:ring-amber-brand/20";

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-midnight px-4 py-16">
      <div className="absolute -left-40 top-0 size-96 rounded-full bg-cobalt/25 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 size-96 rounded-full bg-amber-brand/20 blur-[120px]" />

      <div className="glass-dark relative w-full max-w-md rounded-3xl p-8 md:p-10">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/50 transition hover:text-amber-brand"
        >
          <ArrowLeft className="size-3.5" /> Back to site
        </Link>
        <h1 className="font-serif text-3xl text-white">
          {mode === "signin" ? "Concierge Login" : "Create Account"}
        </h1>
        <p className="mt-2 text-sm text-white/50">
          Access the Vantaggio enquiry dashboard.
        </p>

        <form onSubmit={submit} className="mt-8 space-y-4">
          {mode === "signup" && (
            <label className="block">
              <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-white/60">
                Full name
              </span>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={field}
                placeholder="Jane Doe"
              />
            </label>
          )}
          <label className="block">
            <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-white/60">
              Email
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={field}
              placeholder="you@vantaggio.travel"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-white/60">
              Password
            </span>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={field}
              placeholder="••••••••"
            />
          </label>

          <button
            type="submit"
            disabled={busy}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-brand px-8 py-4 text-[12px] font-semibold uppercase tracking-widest text-midnight transition hover:bg-white disabled:opacity-60"
          >
            {busy && <Loader2 className="size-4 animate-spin" />}
            {mode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-4 text-[11px] uppercase tracking-widest text-white/30">
          <span className="h-px flex-1 bg-white/10" /> or <span className="h-px flex-1 bg-white/10" />
        </div>

        <button
          onClick={google}
          disabled={busy}
          className="w-full rounded-full border border-white/20 px-8 py-3.5 text-[12px] font-semibold uppercase tracking-widest text-white transition hover:bg-white/10 disabled:opacity-60"
        >
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-white/50">
          {mode === "signin" ? "No account yet?" : "Already have an account?"}{" "}
          <button
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="font-semibold text-amber-brand hover:underline"
          >
            {mode === "signin" ? "Create one" : "Sign in"}
          </button>
        </p>
      </div>
    </main>
  );
}
