import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { profile } from "@/lib/data";
import SectionTitle from "./SectionTitle";
import ContactForm from "./ContactForm";

export default function Contact() {
  const items = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
    { icon: Github, label: "GitHub", href: profile.github }
  ];

  return (
    <section id="contact" className="section-padding bg-white/40 dark:bg-white/[0.02]">
      <div className="container-max">
        <SectionTitle
          eyebrow="Get In Touch"
          title="Let's Connect"
          subtitle="Open to opportunities in analytics, economics, consulting, and research."
        />

        <div className="grid md:grid-cols-2 gap-12">
          <ul className="space-y-4">
            {items.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 glass rounded-card p-5 shadow-soft hover:shadow-soft-lg transition-shadow focus-ring"
                >
                  <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Icon size={18} />
                  </span>
                  <span className="text-navy dark:text-white font-medium">{label}</span>
                </a>
              </li>
            ))}
          </ul>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
