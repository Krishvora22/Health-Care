import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { treatments } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Treatments() {
  return (
    <section id="treatments" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Specialized Treatments"
          subtitle="Comprehensive medical care across nine specialties, all under one roof."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-[var(--line)] bg-white p-6 transition-all duration-300 card-shadow card-shadow-hover"
              >
                <div className="mb-5 w-fit rounded-xl bg-[var(--brand-light)] p-3">
                  <Icon className="h-6 w-6 text-[var(--brand)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--ink)]">{t.title}</h3>
                <p className="mt-2 text-sm text-[var(--ink-soft)]">{t.description}</p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--brand)] transition group-hover:gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
