import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

interface Item { id: string; category: "Skin" | "Dental" | "Orthopedic"; result: string; }
const items: Item[] = [
  { id: "1", category: "Skin",       result: "Acne treatment — 12 weeks" },
  { id: "2", category: "Skin",       result: "Pigmentation correction — 8 weeks" },
  { id: "3", category: "Dental",     result: "Smile makeover — 4 weeks" },
  { id: "4", category: "Dental",     result: "Teeth whitening — 1 session" },
  { id: "5", category: "Orthopedic", result: "Knee rehabilitation — 16 weeks" },
  { id: "6", category: "Orthopedic", result: "Posture correction — 10 weeks" },
];

const tabs = ["All", "Skin", "Dental", "Orthopedic"] as const;

export function BeforeAfter() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const filtered = tab === "All" ? items : items.filter((i) => i.category === tab);

  return (
    <section id="results" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Real Results"
          title="Before & After"
          subtitle="Honest outcomes from real patients, across our most-requested treatments."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                tab === t
                  ? "bg-[var(--brand)] text-white shadow-md"
                  : "bg-[var(--brand-light)] text-[var(--ink-soft)] hover:bg-[var(--brand)]/20"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative">
                <span className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[var(--brand)] shadow-sm backdrop-blur-sm">
                  {item.category}
                </span>
                <div className="relative">
                  <img src="https://placehold.co/400x250/f0f0f0/666666?text=Before" alt={`Before ${item.result}`} width={400} height={250} className="w-full" />
                  <span className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-0.5 text-xs font-medium text-white">Before</span>
                </div>
                <div className="relative">
                  <img src="https://placehold.co/400x250/EAF6FF/4DA6FF?text=After" alt={`After ${item.result}`} width={400} height={250} className="w-full" />
                  <span className="absolute bottom-2 left-2 rounded bg-[var(--brand)]/90 px-2 py-0.5 text-xs font-medium text-white">After</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-[var(--ink)]">{item.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
