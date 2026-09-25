"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { useTheme } from "@/hooks/useTheme";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const active = useActiveSection(navLinks.map((l) => l.href.replace("#", "")));

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-4 md:top-6 inset-x-4 md:inset-x-8 z-50">
      <nav className="container-max flex items-center justify-between gap-4 bg-navy text-base rounded-full pl-5 pr-2 py-2 md:pl-6 md:pr-3 md:py-2.5 shadow-soft-lg">
        <a
          href="#hero"
          className="hidden sm:flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-base/70 focus-ring rounded shrink-0"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          {profile.status}
        </a>

        <ul className="hidden md:flex items-center gap-7 mx-auto">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors focus-ring rounded ${
                    isActive ? "text-accent-light" : "text-base/70 hover:text-base"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-full text-base/70 hover:text-base hover:bg-white/10 transition-colors focus-ring"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 bg-base text-navy text-sm font-semibold px-4 py-2 rounded-full hover:bg-accent-tint transition-colors focus-ring"
          >
            Let&apos;s Talk
            <ArrowUpRight size={15} />
          </a>
          <button
            className="md:hidden p-2 rounded-full text-base focus-ring"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-navy text-base rounded-3xl mt-2 shadow-soft-lg"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2.5 text-sm font-medium focus-ring rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-1.5 bg-base text-navy text-sm font-semibold px-4 py-2 rounded-full"
                >
                  Let&apos;s Talk
                  <ArrowUpRight size={15} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
