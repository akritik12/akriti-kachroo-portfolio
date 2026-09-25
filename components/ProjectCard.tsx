"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  tag: string;
  year: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const href = project.demo || project.github;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group block bg-navy-light border border-white/10 rounded-card-lg p-7 hover:border-white/25 transition-colors focus-ring"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-accent/15 text-accent-light">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
          {project.tag}
        </span>
        <span className="w-9 h-9 shrink-0 rounded-full border border-white/15 flex items-center justify-center text-base/70 group-hover:bg-base group-hover:text-navy transition-colors">
          <ArrowUpRight size={16} />
        </span>
      </div>

      <h3 className="mt-5 font-heading text-xl md:text-2xl font-semibold leading-snug">
        <span className="mark">{project.title}</span>
      </h3>

      <p className="mt-3 text-sm text-base/60 leading-relaxed">{project.description}</p>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-base/70"
          >
            {t}
          </span>
        ))}
        <span className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-white/10 text-base/40 ml-auto">
          {project.year}
        </span>
      </div>
    </motion.a>
  );
}
