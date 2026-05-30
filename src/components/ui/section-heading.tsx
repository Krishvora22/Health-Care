import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, center = true }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {eyebrow && (
        <div className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)] ${center ? "" : ""}`}>
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-semibold text-[var(--ink)] md:text-[40px]">
        {title}
      </h2>
      <div className={`mt-4 h-1 w-16 rounded-full bg-[var(--brand)] ${center ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-base text-[var(--ink-soft)]">{subtitle}</p>
      )}
    </motion.div>
  );
}
