"use client";

import { motion, useReducedMotion } from "framer-motion";
import { techStack } from "@/lib/data";

export default function TechStackMatrix() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-b border-line px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <div className="mb-10 flex items-baseline justify-between">
        <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
          [ 03 ] — Core Stack
        </h2>
        <span className="hidden font-mono text-xs text-muted sm:block">{techStack.length} modules</span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {techStack.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : i * 0.06 }}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            className="group relative overflow-hidden rounded-xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-accent/60"
          >
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/0 blur-2xl transition-colors duration-500 group-hover:bg-accent/25" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent-soft">
              {tool.tag}
            </span>
            <p className="mt-3 font-display text-2xl font-black text-ink sm:text-3xl">{tool.name}</p>
            <p className="mt-2 font-mono text-[11px] leading-snug text-muted">{tool.note}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
