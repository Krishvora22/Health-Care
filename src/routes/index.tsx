import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { AboutDoctor } from "@/components/sections/about-doctor";
import { Treatments } from "@/components/sections/treatments";
import { TreatmentProcess } from "@/components/sections/treatment-process";
import { BeforeAfter } from "@/components/sections/before-after";
import { Pricing } from "@/components/sections/pricing";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Gallery } from "@/components/sections/gallery";
import { Blog } from "@/components/sections/blog";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akshar Health & Wellness Clinic — Trusted Homoeopathic Care in Surat" },
      { name: "description", content: "Expert homoeopathic diagnosis, safe root-cause healing, and personalized care. Book your appointment with Dr. Daya Vekariya today." },
      { name: "keywords", content: "homoeopathic clinic, homoeopathy, doctor, healthcare, Surat, Akshar Health & Wellness Clinic, Dr. Daya Vekariya, Nana Varachha" },
      { property: "og:title", content: "Akshar Health & Wellness Clinic — Trusted Homoeopathic Care in Surat" },
      { property: "og:description", content: "Expert homoeopathic diagnosis, safe root-cause healing, and personalized care under one roof." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <AboutDoctor />
        <Treatments />
        <TreatmentProcess />
        <BeforeAfter />
        <Pricing />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}