"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-max">
        <SectionTitle eyebrow="Credentials" title="Certifications" />

        <div className="grid sm:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass rounded-card p-6 shadow-soft hover:shadow-soft-lg transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Award size={18} />
              </div>
              <h3 className="font-heading text-sm font-semibold text-navy dark:text-white leading-snug">
                {cert.title}
              </h3>
              {cert.issuer && (
                <p className="text-xs text-navy/50 dark:text-white/50 mt-2">{cert.issuer}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
