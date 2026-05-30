import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPlans } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function Pricing() {
  return (
    <section id="pricing" className="bg-[var(--brand-light)] py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Transparent Pricing"
          title="Care Plans That Fit You"
          subtitle="Clear pricing, no hidden fees. Choose a package or pay for individual visits."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl ${
                plan.isPopular ? "border-2 border-[var(--brand)] md:scale-105" : "border border-[var(--line)]"
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--brand)] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-md">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-[var(--ink)]">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-xs uppercase tracking-wider text-[var(--ink-mute)]">Starting from</span>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[var(--ink)]">
                    {plan.currency}{plan.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm text-[var(--ink-soft)]">/ visit</span>
                </div>
              </div>
              <div className="my-6 h-px bg-[var(--line)]" />
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[var(--ink-soft)]">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-[var(--ok)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`mt-8 w-full rounded-full ${
                  plan.isPopular
                    ? "bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)]"
                    : "bg-[var(--brand-light)] text-[var(--brand)] hover:bg-[var(--brand)] hover:text-white"
                }`}
              >
                <a href="#contact">Choose {plan.name}</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
