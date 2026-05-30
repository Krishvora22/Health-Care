import { motion } from "framer-motion";
import { whyChooseUs } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyChooseUs() {
  return (
    <section id="why" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Care You Can Count On"
          subtitle="Six reasons families across Surat trust Akshar Health & Wellness Clinic with their health."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="rounded-2xl bg-[var(--brand-light)] p-6 transition-all duration-300 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white">
                  <Icon className="h-6 w-6 text-[var(--brand)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--ink)]">{r.title}</h3>
                <p className="mt-2 text-sm text-[var(--ink-soft)]">{r.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}