import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone } from "lucide-react";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer id="contact" className="bg-midnight text-white">
      <div className="container-luxe grid gap-12 py-20 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid size-9 place-items-center rounded-lg bg-amber-brand font-serif text-lg text-midnight">V</div>
            <span className="font-serif text-2xl">Vantaggio</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            A private travel concierge crafting bespoke journeys across six continents. Ten years, one hundred fifty destinations, zero ordinary trips.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="Instagram" className="grid size-10 place-items-center rounded-full border border-white/15 transition hover:border-amber-brand hover:text-amber-brand"><Instagram className="size-4" /></a>
            <a href="#" aria-label="Facebook" className="grid size-10 place-items-center rounded-full border border-white/15 transition hover:border-amber-brand hover:text-amber-brand"><Facebook className="size-4" /></a>
            <a href="#" aria-label="Twitter" className="grid size-10 place-items-center rounded-full border border-white/15 transition hover:border-amber-brand hover:text-amber-brand"><Twitter className="size-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-widest text-white/50">Explore</h4>
          <ul className="mt-5 space-y-2.5 text-sm text-white/75">
            <li><a href="#destinations" className="hover:text-amber-brand">Destinations</a></li>
            <li><a href="#tours" className="hover:text-amber-brand">Tour Packages</a></li>
            <li><a href="#deals" className="hover:text-amber-brand">Deals</a></li>
            <li><a href="#gallery" className="hover:text-amber-brand">Gallery</a></li>
            <li><a href="#blog" className="hover:text-amber-brand">Journal</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-widest text-white/50">Services</h4>
          <ul className="mt-5 space-y-2.5 text-sm text-white/75">
            <li><a href="#services" className="hover:text-amber-brand">Visa Processing</a></li>
            <li><a href="#services" className="hover:text-amber-brand">Hotel Booking</a></li>
            <li><a href="#services" className="hover:text-amber-brand">Flights</a></li>
            <li><a href="#services" className="hover:text-amber-brand">Umrah Packages</a></li>
            <li><a href="#services" className="hover:text-amber-brand">Corporate Travel</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-widest text-white/50">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 size-4 shrink-0 text-amber-brand" /> Islamabad, Pakistan</li>
            <li className="flex items-start gap-2.5"><Phone className="mt-0.5 size-4 shrink-0 text-amber-brand" /> {WHATSAPP_DISPLAY}</li>
            <li className="flex items-start gap-2.5"><Mail className="mt-0.5 size-4 shrink-0 text-amber-brand" /> concierge@vantaggio.travel</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 md:flex-row">
          <p>© {new Date().getFullYear()} Vantaggio Travel. Crafted with care.</p>
          <p className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
            <Link to="/auth" className="hover:text-white">Team Login</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}