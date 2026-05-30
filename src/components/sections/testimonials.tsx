import { Star } from "lucide-react";
import { testimonials, type Testimonial } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="w-80 flex-shrink-0 rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-3 flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-sm text-[var(--ink-soft)]">&ldquo;{t.quote}&rdquo;</p>
      <div className="mt-5 flex items-center gap-3">
        <img src={t.avatar} alt={t.name} width={40} height={40} className="h-10 w-10 rounded-full" />
        <div>
          <div className="text-sm font-semibold text-[var(--ink)]">{t.name}</div>
          <div className="text-xs text-[var(--ink-mute)]">{t.location}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4);
  return (
    <section id="testimonials" className="overflow-hidden bg-[var(--brand-light)] py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Patient Stories"
          title="What Our Patients Say"
          subtitle="Honest words from people we've cared for across Surat."
        />
      </div>

      <div className="marquee-wrap space-y-6">
        <div className="marquee-track marquee-left">
          {[...row1, ...row1].map((t, i) => <Card key={`a-${t.id}-${i}`} t={t} />)}
        </div>
        <div className="marquee-track marquee-right">
          {[...row2, ...row2].map((t, i) => <Card key={`b-${t.id}-${i}`} t={t} />)}
        </div>
      </div>
    </section>
  );
}