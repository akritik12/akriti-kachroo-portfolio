"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Github, Mail, MapPin, TrendingUp, FileDown } from "lucide-react";
import { about, stats, languages, profile, coreTools } from "@/lib/data";
import SectionTitle from "./SectionTitle";

const connectItems = [
  { icon: FileDown, label: "Resume", value: "Download PDF", href: "/resume.pdf" },
  { icon: Linkedin, label: "LinkedIn", value: "View profile", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "akritik12", href: profile.github },
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    icon: Mail,
    label: "Academic Email",
    value: profile.emailAlt,
    href: `mailto:${profile.emailAlt}`
  },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined }
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <SectionTitle title="About" />

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-start">
          {/* Left: role, bio, tools, CTAs, stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white border border-navy/10 rounded-full px-4 py-1.5 mb-5 shadow-soft">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="font-mono text-xs uppercase tracking-wider text-navy/60">
                {profile.eyebrow}
              </span>
            </div>

            <h3 className="font-heading text-4xl md:text-5xl font-bold text-navy tracking-tight">
  {profile.roleSubtitle}
</h3>
            <p className="mt-2 text-lg text-navy/50">{profile.roleSubtitle}</p>

            <p className="mt-6 text-base leading-relaxed text-navy/70 max-w-xl">{about}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {coreTools.map((tool) => (
                <span
                  key={tool}
                  className="text-sm font-medium px-3.5 py-1.5 rounded-full border border-navy/12 bg-white text-navy/80"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-base font-semibold shadow-soft hover:shadow-glow transition-shadow focus-ring"
              >
                Let&apos;s collaborate
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-navy/15 text-navy font-semibold hover:bg-white transition-colors focus-ring"
              >
                Selected Work
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6 pt-8 border-t border-navy/10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl font-bold text-navy">{stat.value}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wide text-navy/45">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-navy/45">
              <span className="font-medium text-navy/60">Languages:</span> {languages.join(", ")}
            </p>
          </motion.div>

          {/* Right: avatar card + connect list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="relative aspect-[4/5] rounded-card-lg bg-navy overflow-hidden shadow-soft-lg">
              <div className="absolute inset-0 dot-grid opacity-20" />
              <div className="absolute top-5 left-5 font-mono text-[11px] uppercase tracking-wider text-base/60">
                {profile.school}
              </div>
              <div className="absolute top-5 right-5 font-mono text-[11px] uppercase tracking-wider text-base/60 border border-base/20 rounded-full px-2.5 py-1">
                Pune, IN
              </div>
              <Image
                src="/profile.jpg"
                alt="Akriti Kachroo"
                fill
                className="object-cover"
              />
              <div className="absolute left-4 right-4 bottom-4 bg-base/95 rounded-2xl px-4 py-3 flex items-center justify-between">
                <span className="font-heading text-sm font-semibold text-navy">
                  {profile.name}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-accent">
                  <TrendingUp size={13} />
                  Econ / Analytics
                </span>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-navy/40 mb-3">
                Connect &amp; Profile
              </p>
              <ul className="space-y-2.5">
                {connectItems.map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <span className="flex items-center gap-3 bg-white border border-navy/10 rounded-2xl px-4 py-3 hover:border-navy/25 transition-colors">
                      <Icon size={16} className="text-navy/50 shrink-0" />
                      <span className="text-sm text-navy/80 truncate">{value}</span>
                    </span>
                  );
                  return (
                    <li key={label}>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          download={label === "Resume" ? true : undefined}
                          className="block focus-ring rounded-2xl"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
