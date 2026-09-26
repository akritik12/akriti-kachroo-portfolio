"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { skillSections } from "@/lib/data";
import SectionTitle from "./SectionTitle";

/** Ask the Projects section to apply a filter, then scroll to it. */
function showProjects(filter: string) {
  window.dispatchEvent(new CustomEvent("project-filter", { detail: filter }));
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
}

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = skillSections[activeIndex];

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <SectionTitle
          eyebrow="Expertise"
          title="What I Work On"
          subtitle="Three areas where economics meets applied analytics. Pick one to see what I deliver."
        />

        <div className="grid lg:grid-cols-[340px_1fr] gap-6 lg:gap-10 items-start">
          {/* Area selector: horizontal chips on mobile, vertical list on desktop */}
          <div
            role="tablist"
            aria-label="Areas of expertise"
            className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible -mx-6 px-6 lg:mx-0 lg:px-0 pb-2 lg:pb-0 snap-x"
          >
            {skillSections.map((skill, i) => {
              const selected = i === activeIndex;
              return (
                <button
                  key={skill.number}
                  role="tab"
                  id={`skill-tab-${i}`}
                  aria-selected={selected}
                  aria-controls="skill-panel"
                  onClick={() => setActiveIndex(i)}
                  className={`relative snap-start shrink-0 w-[260px] lg:w-full text-left rounded-card p-5 border transition-colors focus-ring ${
                    selected
                      ? "bg-navy text-base border-navy shadow-soft-lg"
                      : "bg-white dark:bg-white/5 border-navy/10 dark:border-white/10 text-navy dark:text-white hover:border-navy/25 dark:hover:border-white/25"
                  }`}
                >
                  <span className={`font-mono text-xs ${selected ? "text-accent-light" : "text-navy/35 dark:text-white/35"}`}>
                    {skill.number}
                  </span>
                  <span className="mt-1 block font-heading text-lg font-semibold leading-snug">{skill.title}</span>
                  <span
                    className={`mt-1 block font-mono text-[11px] uppercase tracking-wider ${
                      selected ? "text-base/50" : "text-navy/40 dark:text-white/40"
                    }`}
                  >
                    {skill.subtitle}
                  </span>
                  {selected && (
                    <motion.span
                      layoutId="skill-active-bar"
                      className="absolute left-0 top-5 bottom-5 w-1 rounded-r-full bg-accent hidden lg:block"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div
            id="skill-panel"
            role="tabpanel"
            aria-labelledby={`skill-tab-${activeIndex}`}
            className="relative min-h-[420px] bg-white dark:bg-white/5 border border-navy/10 dark:border-white/10 rounded-card-lg p-7 md:p-10 shadow-soft"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.number}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <p className="font-mono text-xs uppercase tracking-wider text-accent">{active.subtitle}</p>
                <h3 className="mt-2 font-heading text-2xl md:text-3xl font-semibold text-navy dark:text-white tracking-tight">
                  {active.title}
                </h3>
                <p className="mt-4 text-navy/70 dark:text-white/70 leading-relaxed max-w-2xl">{active.description}</p>

                <p className="mt-8 font-mono text-xs uppercase tracking-wider text-navy/40 dark:text-white/40 mb-3">
                  What I deliver
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {active.deliverables.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: 0.05 * i }}
                      className="flex items-center gap-3 rounded-xl bg-base dark:bg-white/5 border border-navy/10 dark:border-white/10 px-4 py-3 text-sm text-navy/80 dark:text-white/80"
                    >
                      <span className="w-6 h-6 shrink-0 rounded-full bg-accent/15 flex items-center justify-center">
                        <Check size={13} className="text-accent" />
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <p className="mt-8 font-mono text-xs uppercase tracking-wider text-navy/40 dark:text-white/40 mb-3">
                  Tools
                </p>
                <div className="flex flex-wrap gap-2">
                  {active.stack.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-medium px-3 py-1.5 rounded-full border border-navy/15 dark:border-white/15 text-navy/75 dark:text-white/75"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => showProjects(active.projectFilter)}
                  className="group mt-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy text-base text-sm font-semibold shadow-soft hover:shadow-glow transition-shadow focus-ring"
                >
                  See related projects
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
