import { Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8 border-t border-navy/10 dark:border-white/10">
      <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-navy/50 dark:text-white/50">
          Designed &amp; Developed by {profile.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-navy/50 dark:text-white/50 hover:text-accent transition-colors focus-ring rounded"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-navy/50 dark:text-white/50 hover:text-accent transition-colors focus-ring rounded"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
