"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import type { Project } from "@/lib/data";

type Props = { project: Project; index: number; onOpen: () => void };

const ProjectCard = forwardRef<HTMLButtonElement, Props>(function ProjectCard(
  { project, index, onOpen },
  ref
) {
  return (
    <motion.button
      ref={ref}
      type="button"
      layout
      onClick={onOpen}
      aria-label={`Open details for ${project.title}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className="group text-left block w-full bg-navy-light border border-white/10 rounded-card-lg p-7 hover:border-white/25 transition-colors focus-ring"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-accent/15 text-accent-light">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
          {project.tag}
        </span>
        <span className="w-9 h-9 shrink-0 rounded-full border border-white/15 flex items-center justify-center text-base/70 group-hover:bg-base group-hover:text-navy transition-colors">
          <Maximize2 size={14} />
        </span>
      </div>

      <h3 className="mt-5 font-heading text-xl md:text-2xl font-semibold leading-snug">
        <span className="mark">{project.title}</span>
      </h3>

      <p className="mt-3 text-sm text-base/60 leading-relaxed">{project.description}</p>

      {project.metrics.length > 0 && (
        <div className="mt-5 grid grid-cols-3 gap-2">
          {project.metrics.slice(0, 3).map((m) => (
            <div key={m.label} className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
              <p className="font-heading text-base font-semibold text-base leading-tight">{m.value}</p>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-base/45 leading-tight">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {project.tech.slice(0, 4).map((t) => (
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

      <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-accent-light opacity-70 group-hover:opacity-100 transition-opacity">
        View details →
      </p>
    </motion.button>
  );
});

export default ProjectCard;
