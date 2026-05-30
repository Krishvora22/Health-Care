import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Blog() {
  return (
    <section id="blog" className="bg-[var(--brand-light)] py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="From the Journal"
          title="Health Insights & Tips"
          subtitle="Practical, evidence-based advice from our medical team."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="overflow-hidden">
                <img src={post.image} alt={post.title} width={600} height={340} className="w-full transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-[var(--brand-light)] px-3 py-1 text-xs font-medium text-[var(--brand)]">
                  {post.category}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-[var(--ink)] transition group-hover:text-[var(--brand)]">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--ink-soft)]">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-[var(--ink-mute)]">
                  <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                </div>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--brand)] transition group-hover:gap-2">
                  Read More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
