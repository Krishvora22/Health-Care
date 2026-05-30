import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-24 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand)] text-white shadow-lg transition-all duration-300 hover:bg-[var(--brand-dark)] ${show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"}`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
