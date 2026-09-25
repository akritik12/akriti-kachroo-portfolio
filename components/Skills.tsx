"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { skillSections } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <SectionTitle
          title="What I Work On"
          subtitle="Three areas where market research meets applied analytics."
        />

        <div className="border-t border-navy/10">
          {skillSections.map((skill, i) => (
            <motion.div
              key={skill.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border-b border-navy/10 py-10 md:py-12"
            >
              <div className="flex items-start gap-4 md:gap-8">
                <span className="hidden sm:block font-mono text-sm text-navy/35 pt-2 shrink-0">
                  {skill.number}
                </span>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy tracking-tight uppercase">
                        <span className="mark">{skill.title}</span>
                      </h3>
                      <p className="mt-2 font-mono text-xs uppercase tracking-wider text-navy/40">
                        {skill.subtitle}
                      </p>
                    </div>
                    <span className="hidden md:flex w-10 h-10 shrink-0 rounded-full border border-navy/15 items-center justify-center text-navy/50">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  <div className="mt-6 grid md:grid-cols-[1fr_280px] gap-8">
                    <div>
                      <p className="text-navy/70 leading-relaxed max-w-2xl">
                        {skill.description}
                      </p>

                      <p className="mt-6 font-mono text-xs uppercase tracking-wider text-navy/40 mb-3">
                        Key Deliverables
                      </p>
                      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                        {skill.deliverables.map((item) => (
                          <div key={item} className="flex items-center gap-2.5 text-sm text-navy/75">
                            <Check size={14} className="text-accent shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white border border-navy/10 rounded-card p-5 h-fit">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-navy/40 mb-3">
                        Core Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {skill.stack.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs font-medium px-2.5 py-1.5 rounded-lg border border-navy/12 text-navy/75"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
