import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function Stats() {
  return (
    <section id="stats" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            const decimals = s.value % 1 !== 0 ? 1 : 0;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl bg-[var(--brand-light)] p-6 text-center md:p-8"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand)]/10">
                  <Icon className="h-6 w-6 text-[var(--brand)]" />
                </div>
                <div className="text-3xl font-bold text-[var(--ink)] md:text-4xl">
                  <AnimatedCounter to={s.value} decimals={decimals} />
                  <span className="text-[var(--brand)]">{s.suffix}</span>
                </div>
                <div className="mt-2 text-sm text-[var(--ink-soft)]">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
