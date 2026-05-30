import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, TrendingUp, ChevronDown, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustBadges = [
  { icon: Award, label: "20+ Years Experience" },
  { icon: ShieldCheck, label: "Safe & Natural Healing" },
  { icon: TrendingUp, label: "High Success Rate" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[var(--brand-light)] via-white to-[var(--brand-light)] pt-28 pb-16 md:min-h-screen md:pt-32">
      {/* Background medical cross pattern */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]" aria-hidden="true">
        <defs>
          <pattern id="cross" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M25 15 h10 v10 h10 v10 h-10 v10 h-10 v-10 h-10 v-10 h10 z" fill="#4DA6FF" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cross)" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-5">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="lg:col-span-3"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/80 px-4 py-1.5 text-sm font-medium text-[var(--ink-soft)] shadow-sm backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--ok)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--ok)]" />
            </span>
            Trusted by Thousands in Surat
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-[var(--ink)] md:text-5xl lg:text-[56px]"
          >
            Trusted Homoeopathic Care
            <br />
            <span className="bg-gradient-to-r from-[var(--brand)] to-[var(--brand-dark)] bg-clip-text text-transparent">
              for a Healthier Life
            </span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-6 max-w-xl text-lg text-[var(--ink-soft)]"
          >
            Expert diagnosis, compassionate care, and highly effective homoeopathic treatments — focused on root-cause healing without side effects.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg" className="rounded-full bg-[var(--brand)] px-8 text-white hover:bg-[var(--brand-dark)]">
              <a href="#contact">Book Appointment <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-[var(--brand)] px-8 text-[var(--brand)] hover:bg-[var(--brand-light)] hover:text-[var(--brand-dark)]">
              <a href="#treatments">View Treatments</a>
            </Button>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-[var(--ink)] backdrop-blur-sm card-shadow">
                <Icon className="h-4 w-4 text-[var(--brand)]" /> {label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative lg:col-span-2"
        >
          <div className="relative mx-auto max-w-[420px]">
            <img
              src="https://placehold.co/400x500/EAF6FF/4DA6FF?text=Dr.+Daya+Vekariya"
              alt="Dr. Daya Vekariya, Chief Consulting Homoeopath at Akshar Health & Wellness Clinic"
              width={400}
              height={500}
              className="w-full rounded-3xl shadow-2xl"
              style={{ transform: "rotate(-2deg)" }}
            />

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="glass absolute -right-4 top-6 rounded-2xl px-4 py-3"
            >
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <div>
                  <div className="text-lg font-bold text-[var(--ink)]">4.9★</div>
                  <div className="text-xs text-[var(--ink-soft)]">Rating</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="glass absolute -left-4 bottom-6 rounded-2xl px-4 py-3"
            >
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-[var(--brand)]" />
                <div>
                  <div className="text-lg font-bold text-[var(--ink)]">10k+</div>
                  <div className="text-xs text-[var(--ink-soft)]">Patients</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <a href="#stats" aria-label="Scroll down" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-[var(--brand)] md:block">
        <ChevronDown className="h-7 w-7" />
      </a>
    </section>
  );
}