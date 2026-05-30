import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before your first visit."
        />

        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="overflow-hidden rounded-xl border border-[var(--line)] bg-white px-5">
              <AccordionTrigger className="text-left text-base font-medium text-[var(--ink)] hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[var(--ink-soft)]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
