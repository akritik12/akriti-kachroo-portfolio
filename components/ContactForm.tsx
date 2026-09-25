"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

type Field = "name" | "email" | "message";

const FIELDS: { id: Field; label: string; type: string }[] = [
  { id: "name", label: "Name", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "message", label: "Message", type: "textarea" }
];

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: Field, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Replace this with a real submission endpoint (e.g. Formspree, Resend, or an API route).
    await new Promise((resolve) => setTimeout(resolve, 900));

    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-card-lg p-8 shadow-soft flex flex-col items-center text-center gap-3"
      >
        <CheckCircle2 className="text-accent" size={32} />
        <p className="font-heading text-lg font-semibold text-navy dark:text-white">
          Message sent
        </p>
        <p className="text-sm text-navy/60 dark:text-white/60">
          Thanks for reaching out — I'll get back to you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-card-lg p-8 shadow-soft space-y-6">
      {FIELDS.map((field) => (
        <div key={field.id} className="relative">
          {field.type === "textarea" ? (
            <textarea
              id={field.id}
              required
              rows={4}
              value={values[field.id]}
              onChange={(e) => handleChange(field.id, e.target.value)}
              placeholder=" "
              className="peer w-full bg-transparent border-b border-navy/20 dark:border-white/20 pt-6 pb-2 text-navy dark:text-white resize-none focus-ring focus:border-accent transition-colors"
            />
          ) : (
            <input
              id={field.id}
              type={field.type}
              required
              value={values[field.id]}
              onChange={(e) => handleChange(field.id, e.target.value)}
              placeholder=" "
              className="peer w-full bg-transparent border-b border-navy/20 dark:border-white/20 pt-6 pb-2 text-navy dark:text-white focus-ring focus:border-accent transition-colors"
            />
          )}
          <label
            htmlFor={field.id}
            className="absolute left-0 top-6 text-navy/50 dark:text-white/50 text-base transition-all
              peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent
              peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
          >
            {field.label}
          </label>
        </div>
      ))}

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-navy dark:bg-accent text-white font-medium shadow-soft hover:shadow-glow transition-shadow focus-ring disabled:opacity-60"
      >
        <Send size={16} />
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
