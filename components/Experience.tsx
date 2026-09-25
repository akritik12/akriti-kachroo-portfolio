"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white/40 dark:bg-white/[0.02]">
      <div className="container-max">
        <SectionTitle eyebrow="Career So Far" title="Professional Experience" />

        <div className="grid md:grid-cols-2 gap-6">
          {experience.map((job, i) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass rounded-card-lg p-7 shadow-soft hover:shadow-soft-lg transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Briefcase size={18} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-navy dark:text-white">
                {job.company}
              </h3>
              <p className="text-sm text-accent mt-1">{job.role}</p>
              <p className="text-xs text-navy/50 dark:text-white/50 mt-1">
                {[job.location, job.period].filter(Boolean).join(" · ")}
              </p>
              <ul className="mt-4 space-y-2">
                {job.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-sm text-navy/70 dark:text-white/70 flex gap-2"
                  >
                    <span className="text-accent mt-1.5 block w-1 h-1 rounded-full bg-accent shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
