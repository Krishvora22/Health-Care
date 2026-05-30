import { Heart, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import { navLinks, treatments } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] pb-6 pt-16 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--brand)] text-white">
              <Heart className="h-5 w-5 fill-white" />
            </span>
            <span className="text-lg font-bold text-white">Akshar Health & Wellness Clinic
</span>
          </div>
          <p className="text-sm text-white/60">
            Trusted medical care for a healthier life. Expert diagnosis and compassionate treatment under one roof.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition hover:bg-[var(--brand)] hover:text-white">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/60 transition hover:text-[var(--brand)]">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
          <ul className="space-y-2 text-sm">
            {treatments.slice(0, 7).map((t) => (
              <li key={t.id}>
                <a href="#treatments" className="text-white/60 transition hover:text-[var(--brand)]">{t.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 flex-none text-[var(--brand)]" /> Akshar Health & Wellness Clinic
</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 flex-none text-[var(--brand)]" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 flex-none text-[var(--brand)]" /> care@medicare-clinic.in</li>
            <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 flex-none text-[var(--brand)]" /> Mon–Sat 9AM–8PM<br />Sun 10AM–2PM</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-6 md:px-8">
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/50 md:flex-row">
          <p>© 2026 Akshar Health & Wellness Clinic
. All rights reserved.</p>
          <p>
            <a href="#" className="hover:text-[var(--brand)]">Privacy Policy</a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:text-[var(--brand)]">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
