"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin bar across the top of the page that fills as the visitor scrolls. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 origin-left bg-accent z-[60]"
    />
  );
}
