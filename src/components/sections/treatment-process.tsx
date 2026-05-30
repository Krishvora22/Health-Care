import { motion } from "framer-motion";
import { MessagesSquare, Search, ClipboardList, HeartPulse } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  { num: "01", icon: MessagesSquare, title: "Consultation",     desc: "We listen carefully to your concerns, history, and goals." },
  { num: "02", icon: Search,         title: "Diagnosis",        desc: "Accurate testing and modern equipment confirm the cause." },
  { num: "03", icon: ClipboardList,  title: "Treatment Plan",   desc: "A personalized, transparent plan built around you." },
  { num: "04", icon: HeartPulse,     title: "Recovery & Follow-up", desc: "Ongoing care and check-ins to ensure lasting results." },
];

export function TreatmentProcess() {
  return (
    <section id="process" className="bg-[var(--brand-light)] py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Our Treatment Process"
          subtitle="A clear, four-step journey designed around your comfort and recovery."
        />

        <div className="relative">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden border-t-2 border-dashed border-[var(--brand)]/40 lg:block" />
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand)] text-lg font-bold text-white shadow-lg ring-8 ring-[var(--brand-light)]">
                    {s.num}
                  </div>
                  <div className="w-full rounded-2xl bg-white p-6 card-shadow">
                    <Icon className="mx-auto mb-3 h-7 w-7 text-[var(--brand)]" />
                    <h3 className="text-lg font-semibold text-[var(--ink)]">{s.title}</h3>
                    <p className="mt-2 text-sm text-[var(--ink-soft)]">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
