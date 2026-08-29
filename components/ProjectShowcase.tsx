"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";

const spanClasses: Record<Project["size"], string> = {
  lg: "md:col-span-8 md:row-span-2",
  md: "md:col-span-4 md:row-span-2",
  sm: "md:col-span-4 md:row-span-1",
};

export default function ProjectShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-b border-line px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <h2 className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-muted">
        [ 04 ] — Selected Work
      </h2>

      <div className="grid grid-cols-1 gap-4 md:auto-rows-[180px] md:grid-cols-12">
        {projects.map((project, i) => (
          <motion.a
            key={project.index}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={reduceMotion ? undefined : { y: -6 }}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-card transition-all duration-300 hover:border-accent/60 hover:shadow-glow md:p-7 ${spanClasses[project.size]}`}
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs text-accent-soft">[{project.index}]</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-muted">{project.year}</span>
                <ArrowUpRight
                  size={16}
                  strokeWidth={2.25}
                  className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-extrabold leading-tight text-ink sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line bg-base/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* ambient glow on hover, kept subtle */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-colors duration-500 group-hover:bg-accent/20" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
