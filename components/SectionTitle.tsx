"use client";

import { motion } from "framer-motion";

export default function SectionTitle({
  title,
  subtitle,
  eyebrow
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16"
    >
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-wider text-navy/40 dark:text-white/40 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-navy dark:text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-navy/60 dark:text-white/60 max-w-xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
