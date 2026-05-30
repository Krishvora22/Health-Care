import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

const info = [
  { icon: MapPin, label: "Address", value: "Gate No-4, 332, Shyamdham Society, Vibhag 1, Syamdham Scoiety, Nana Varachha, Surat, Gujarat 395011" },
  { icon: Phone,  label: "Phone",   value: "+91 98765 43210" },
  { icon: Mail,   label: "Email",   value: "care@medicare-clinic.in" },
  { icon: Clock,  label: "Hours",   value: "Mon–Sat 9AM–8PM • Sun Off" },
];

export function Contact() {
  return (
    <section id="contact" className="bg-[var(--brand-light)] py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Visit Akshar Health & Wellness Clinic
"
          subtitle="Drop by, give us a call, or message on WhatsApp — we respond quickly."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {info.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[var(--brand-light)]">
                  <Icon className="h-5 w-5 text-[var(--brand)]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[var(--ink-mute)]">{label}</div>
                  <div className="text-sm font-medium text-[var(--ink)]">{value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.a
            href="https://www.google.com/maps/place/Akshar+Health+%26+Wellness+Clinic/@21.2200564,72.8905925,17z/data=!3m1!4b1!4m6!3m5!1s0x3be04fe3219f95bd:0x694bebc4bce1e964!8m2!3d21.2200564!4d72.8905925!16s%2Fg%2F11t5r8fyxm?entry=ttu&g_ep=EgoyMDI2MDUyNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="group flex h-80 items-center justify-center rounded-2xl bg-[#d0e8f7] text-[var(--brand-dark)] transition hover:shadow-lg lg:h-full"
          >
            <div className="text-center">
              <MapPin className="mx-auto mb-3 h-10 w-10 transition group-hover:scale-110" />
              <p className="text-lg font-semibold">View on Google Maps</p>
              <p className="mt-1 text-sm">Gate No-4, 332, Shyamdham Society, Vibhag 1, Syamdham Scoiety, Nana Varachha, Surat, Gujarat 395011</p>
            </div>
          </motion.a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Button asChild size="lg" className="rounded-full bg-[#25D366] text-white hover:bg-[#1ebe57]">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us
            </a>
          </Button>
          <Button asChild size="lg" className="rounded-full bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)]">
            <a href="tel:+919876543210">
              <Phone className="mr-2 h-5 w-5" /> Call +91 98765 43210
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
