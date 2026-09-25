"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-base dot-grid pt-32 pb-20"
    >
      <div className="container-max w-full px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white border border-navy/10 rounded-full px-4 py-1.5 mb-8 shadow-soft"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-mono text-xs uppercase tracking-wider text-navy/60">
            {profile.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-heading font-bold leading-[0.88] tracking-tight"
        >
          <span className="block text-navy text-[15vw] sm:text-[13vw] md:text-[9vw] lg:text-[7.5rem]">
            {profile.firstName}
          </span>
          <span className="block text-navy text-[15vw] sm:text-[13vw] md:text-[9vw] lg:text-[7.5rem] -mt-1 md:-mt-3">
            {profile.lastName}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 max-w-lg text-lg text-navy/70"
        >
                {profile.summary}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 font-mono text-xs uppercase tracking-wider text-navy/40"
        >
          {profile.tagline}
        </motion.p>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-navy/30"
        aria-hidden
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
