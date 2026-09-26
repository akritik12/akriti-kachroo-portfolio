"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Props = {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
  className?: string;
};

/**
 * Types each word, pauses, deletes it, then moves to the next word.
 * Visitors who prefer reduced motion see the words change without the typing effect.
 */
export default function TypingText({
  words,
  typeSpeed = 70,
  deleteSpeed = 40,
  pause = 1600,
  className = ""
}: Props) {
  const reduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const current = words[wordIndex % words.length];

    if (reduceMotion) {
      setText(current);
      const t = setTimeout(() => setWordIndex((i) => (i + 1) % words.length), pause * 1.5);
      return () => clearTimeout(t);
    }

    let delay = deleting ? deleteSpeed : typeSpeed;
    if (!deleting && text === current) delay = pause;
    if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        const next = deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1);
        setText(next);
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause, reduceMotion]);

  return (
    <span className={className}>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="inline-block w-[2px] h-[1em] -mb-[0.12em] ml-1 bg-accent animate-pulse" />
      </span>
    </span>
  );
}
