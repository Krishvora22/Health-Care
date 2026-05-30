import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, MapPin, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const timeline = [
  { year: "2006", title: "BHMS Graduate", inst: "Vyara Homeopathic College" },
  { year: "2006", title: "Registered Practitioner", inst: "Gujarat Homoeopathic Council (G-8488)" },
  { year: "2006+", title: "Clinical Homoeopath", inst: "Surat, Gujarat" },
  { year: "Present", title: "Chief Consulting Doctor", inst: "Akshar Health & Wellness Clinic" },
];

const certifications = [
  "Registered — Council of Homoeopathic System of Medicine, Gujarat",
  "Member, Varachha Road Medical Association",
  "Expertise in Chronic Skin, Allergy & Diabetes Management",
];

const qualifications = ["BHMS", "Homoeopathy"];

export function AboutDoctor() {
  return (
    <section id="about" className="bg-[var(--brand-light)] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-[460px]"
        >
          <img
            src="https://placehold.co/450x550/4DA6FF/FFFFFF?text=Dr.+Daya+Vekariya"
            alt="Portrait of Dr. Daya Vekariya"
            width={450}
            height={550}
            className="w-full rounded-3xl shadow-xl"
          />
          <div className="absolute -bottom-5 left-6 rounded-2xl bg-white px-5 py-3 shadow-lg">
            <div className="text-2xl font-bold text-[var(--brand)]">20</div>
            <div className="text-xs text-[var(--ink-soft)]">Years Experience</div>
          </div>
          <div className="absolute -bottom-2 -left-2 h-20 w-1 rounded-full bg-[var(--brand)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
            About the Doctor & Clinic
          </div>
          <h2 className="text-3xl font-semibold text-[var(--ink)] md:text-[40px]">
            Dr. Daya Vekariya
          </h2>
          <p className="mt-2 text-base font-medium text-[var(--ink-soft)]">
            BHMS — Specialist in Homoeopathic Medicine
          </p>
          
          <div className="mt-4 flex items-start gap-2 rounded-lg bg-white/60 p-3 text-sm text-[var(--ink-soft)] shadow-sm">
            <MapPin className="mt-0.5 h-4 w-4 flex-none text-[var(--brand)]" />
            <span>
              <strong className="text-[var(--ink)]">Akshar Health & Wellness Clinic</strong><br/>
              Gate No-4, 332, Shyamdham Society, Vibhag 1,<br/> 
              Nana Varachha, Surat, Gujarat 395011
            </span>
          </div>

          <p className="mt-5 text-base text-[var(--ink-soft)]">
            With over 20 years of clinical experience, Dr. Daya combines highly effective homoeopathic remedies with personalized treatment plans. Practicing at Akshar Health & Wellness Clinic, her approach focuses on long-term wellness rather than quick fixes, specializing in skin diseases, allergies, and complete health management.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {qualifications.map((q) => (
              <span key={q} className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-[var(--ink)] shadow-sm">
                <GraduationCap className="mr-1.5 -mt-0.5 inline h-4 w-4 text-[var(--brand)]" />
                {q}
              </span>
            ))}
          </div>

          <ul className="mt-6 space-y-2">
            {certifications.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-[var(--ink-soft)]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[var(--ok)]" /> {c}
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-3 border-l-2 border-dashed border-[var(--brand)]/40 pl-5">
            {timeline.map((t) => (
              <div key={t.year} className="relative flex items-start gap-4">
                <span className="absolute -left-[26px] mt-1 h-3 w-3 rounded-full border-2 border-white bg-[var(--brand)]" />
                <span className="w-16 flex-none text-sm font-semibold text-[var(--brand)]">{t.year}</span>
                <span className="text-sm text-[var(--ink)]">
                  <span className="font-medium">{t.title}</span>
                  <span className="text-[var(--ink-soft)]"> — {t.inst}</span>
                </span>
              </div>
            ))}
          </div>

          <Button className="mt-8 rounded-full bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)]">
            <Stethoscope className="mr-2 h-4 w-4" />
            Book an Appointment
          </Button>
        </motion.div>
      </div>
    </section>
  );
}