"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function Timeline() {
  return (
    <section id="education" className="section-padding">
      <div className="container-max">
        <SectionTitle eyebrow="Academic Background" title="Education" />

        <div className="relative pl-8 md:pl-0">
          <div
            className="absolute left-[9px] md:left-1/2 top-2 bottom-2 w-px bg-navy/15 dark:bg-white/15 md:-translate-x-1/2"
            aria-hidden
          />

          <div className="space-y-10 md:space-y-16">
            {education.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative md:flex ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <span
                    className="absolute left-0 md:left-1/2 top-1 -translate-x-1/2 w-[18px] h-[18px] rounded-full bg-accent border-4 border-base dark:border-navy shadow-soft"
                    aria-hidden
                  />
                  <div
                    className={`glass rounded-card p-6 shadow-soft md:w-[calc(50%-2.5rem)] ${
                      isLeft ? "md:mr-10" : "md:ml-10"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-accent mb-2">
                      <GraduationCap size={18} />
                      <span className="text-xs font-medium">{item.period}</span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-navy dark:text-white">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-navy/70 dark:text-white/70 mt-1">
                      {item.institution}
                    </p>
                    <p className="text-sm text-navy/50 dark:text-white/50 mt-1">
                      {item.detail}
                    </p>
                    {item.coursework && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.coursework.map((course) => (
                          <span
                            key={course}
                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
