import { useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Loader2,
  LogOut,
  Search,
  Trash2,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  Users,
  Wallet,
} from "lucide-react";
import { whatsappHref } from "@/lib/whatsapp";

const TITLE = "Enquiry Dashboard | Vantaggio Admin";
const DESCRIPTION = "Internal Vantaggio dashboard for reviewing and managing traveller enquiries.";

export const Route = createFileRoute("/_authenticated/admin")({
  component: AdminPage,
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

const STATUSES = ["new", "contacted", "quoted", "won", "lost"] as const;
type Status = (typeof STATUSES)[number];

const statusStyle: Record<string, string> = {
  new: "bg-cobalt/10 text-cobalt",
  contacted: "bg-amber-brand/15 text-amber-brand",
  quoted: "bg-cyan-brand/10 text-cyan-brand",
  won: "bg-emerald-500/10 text-emerald-600",
  lost: "bg-midnight/10 text-midnight/50",
};

function AdminPage() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | Status>("all");

  const roleQuery = useQuery({
    queryKey: ["my-role"],
    queryFn: async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return null;
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userData.user.id);
      return {
        email: userData.user.email ?? "",
        isAdmin: (data ?? []).some((r) => r.role === "admin"),
      };
    },
  });

  const enquiries = useQuery({
    queryKey: ["enquiries"],
    enabled: !!roleQuery.data?.isAdmin,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const updateStatus = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase.from("enquiries").update({ status }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["enquiries"] });
      toast.success("Status updated");
    },
    onError: () => toast.error("Could not update the status"),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("enquiries").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["enquiries"] });
      toast.success("Enquiry deleted");
    },
    onError: () => toast.error("Could not delete the enquiry"),
  });

  const signOut = async () => {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  const rows = useMemo(() => {
    const all = enquiries.data ?? [];
    const q = query.trim().toLowerCase();
    return all.filter((e) => {
      const matchStatus = filter === "all" || e.status === filter;
      const matchText =
        !q ||
        [e.name, e.email, e.phone, e.destination].some((v) =>
          (v ?? "").toLowerCase().includes(q),
        );
      return matchStatus && matchText;
    });
  }, [enquiries.data, query, filter]);

  const stats = useMemo(() => {
    const all = enquiries.data ?? [];
    return {
      total: all.length,
      new: all.filter((e) => e.status === "new").length,
      won: all.filter((e) => e.status === "won").length,
      week: all.filter(
        (e) => Date.now() - new Date(e.created_at).getTime() < 7 * 86400000,
      ).length,
    };
  }, [enquiries.data]);

  if (roleQuery.isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-canvas">
        <Loader2 className="size-6 animate-spin text-cobalt" />
      </div>
    );
  }

  if (!roleQuery.data?.isAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
        <div className="max-w-md rounded-3xl bg-white p-10 text-center shadow-card">
          <h1 className="font-serif text-2xl text-midnight">Access restricted</h1>
          <p className="mt-3 text-sm text-midnight/60">
            This area is for the Vantaggio concierge team. Ask an administrator to grant
            you access.
          </p>
          <button
            onClick={signOut}
            className="mt-6 rounded-full bg-midnight px-6 py-3 text-[12px] font-semibold uppercase tracking-widest text-white"
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-canvas text-midnight">
      <header className="border-b border-midnight/10 bg-white">
        <div className="container-luxe flex flex-wrap items-center justify-between gap-4 py-6">
          <div>
            <p className="eyebrow text-cobalt">Vantaggio Admin</p>
            <h1 className="font-serif text-2xl md:text-3xl">Enquiry Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-midnight/50 sm:block">
              {roleQuery.data.email}
            </span>
            <button
              onClick={signOut}
              className="inline-flex items-center gap-2 rounded-full border border-midnight/15 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-widest transition hover:bg-midnight hover:text-white"
            >
              <LogOut className="size-3.5" /> Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="container-luxe py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Total enquiries", value: stats.total },
            { label: "New / unhandled", value: stats.new },
            { label: "Last 7 days", value: stats.week },
            { label: "Won", value: stats.won },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl bg-white p-6 shadow-card">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-midnight/40">
                {s.label}
              </p>
              <p className="mt-2 font-serif text-3xl">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-midnight/30" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, email, phone or destination…"
              className="w-full rounded-full border border-midnight/15 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/20"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {(["all", ...STATUSES] as const).map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-widest transition ${
                  filter === s
                    ? "bg-midnight text-white"
                    : "bg-white text-midnight/50 hover:text-midnight"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {enquiries.isLoading && (
            <div className="flex justify-center py-16">
              <Loader2 className="size-6 animate-spin text-cobalt" />
            </div>
          )}
          {!enquiries.isLoading && rows.length === 0 && (
            <div className="rounded-3xl bg-white p-12 text-center shadow-card">
              <p className="font-serif text-xl">No enquiries yet</p>
              <p className="mt-2 text-sm text-midnight/50">
                New submissions from the website appear here instantly.
              </p>
            </div>
          )}

          {rows.map((e) => (
            <article key={e.id} className="rounded-3xl bg-white p-6 shadow-card md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="font-serif text-xl">{e.name}</h2>
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${
                        statusStyle[e.status] ?? "bg-midnight/10 text-midnight/50"
                      }`}
                    >
                      {e.status}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-midnight/40">
                    {new Date(e.created_at).toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={e.status}
                    onChange={(ev) =>
                      updateStatus.mutate({ id: e.id, status: ev.target.value })
                    }
                    className="rounded-full border border-midnight/15 bg-white px-4 py-2 text-xs outline-none focus:border-cobalt"
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <a
                    href={whatsappHref(`Hello ${e.name}, this is Vantaggio Travel regarding your ${e.destination} enquiry.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-600 transition hover:bg-emerald-500/20"
                  >
                    WhatsApp
                  </a>
                  <button
                    onClick={() => remove.mutate(e.id)}
                    aria-label="Delete enquiry"
                    className="rounded-full bg-red-500/10 p-2.5 text-red-500 transition hover:bg-red-500/20"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>

              <div className="mt-5 grid gap-3 text-sm text-midnight/70 sm:grid-cols-2 lg:grid-cols-3">
                <p className="flex items-center gap-2">
                  <Mail className="size-4 text-cobalt" /> {e.email}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="size-4 text-cobalt" /> {e.phone}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="size-4 text-cobalt" /> {e.destination}
                </p>
                <p className="flex items-center gap-2">
                  <CalendarDays className="size-4 text-cobalt" /> {e.travel_date || "Flexible"}
                </p>
                <p className="flex items-center gap-2">
                  <Users className="size-4 text-cobalt" /> {e.travelers || "—"}
                </p>
                <p className="flex items-center gap-2">
                  <Wallet className="size-4 text-cobalt" /> {e.budget || "Not specified"}
                </p>
              </div>

              {e.message && (
                <p className="mt-5 rounded-2xl bg-canvas p-4 text-sm italic text-midnight/70">
                  “{e.message}”
                </p>
              )}
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
