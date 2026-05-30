import { useState } from "react";
import { motion } from "framer-motion";
import { galleryImages } from "@/lib/data";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SectionHeading } from "@/components/ui/section-heading";

export function Gallery() {
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Inside the Clinic"
          title="A Look Around"
          subtitle="A calm, modern space designed to make every visit comfortable."
        />

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.id}
              type="button"
              onClick={() => setActive({ src: img.src, alt: img.alt })}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="mb-4 block w-full overflow-hidden rounded-2xl transition hover:scale-[1.02]"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={600}
                height={img.height}
                style={{ height: `${img.height}px` }}
                className="w-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">Gallery image</DialogTitle>
          {active && (
            <img src={active.src.replace(/\d+x\d+/, "1200x800")} alt={active.alt} className="w-full rounded-2xl" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
