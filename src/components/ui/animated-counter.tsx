import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface Props {
  to: number;
  decimals?: number;
  duration?: number;
}

export function AnimatedCounter({ to, decimals = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 100, damping: 30 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      setDisplay(decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString());
    });
    return () => unsub();
  }, [spring, decimals]);

  return <span ref={ref}>{display}</span>;
}
