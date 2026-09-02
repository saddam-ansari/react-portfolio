import { motion } from "motion/react";

function ExperienceItem({ experience, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="relative border-l border-white/10 pl-8 sm:pl-10"
    >
      {/* Timeline Dot */}
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-slate-950 bg-indigo-400 shadow-[0_0_0_3px_rgba(129,140,248,0.08)]" />

      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium text-indigo-400">
            {experience.period}
          </p>

          <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {experience.role}
          </h3>

          <p className="mt-1 text-sm font-medium text-slate-400">
            {experience.company}
          </p>
        </div>

        <span className="text-xs text-slate-600 sm:pt-1">
          {experience.location}
        </span>
      </div>

      {/* Summary */}
      <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400">
        {experience.summary}
      </p>

      {/* Business Domains */}
      {experience.domains?.length > 0 && (
        <div className="mt-6">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
            Business Domains
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {experience.domains.map((domain) => (
              <span
                key={domain}
                className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-xs text-slate-500"
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Career Highlights */}
      {experience.highlights?.length > 0 && (
        <div className="mt-8">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
            Career Highlights
          </p>

          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            {experience.highlights.map((highlight, highlightIndex) => (
              <motion.div
                key={highlight.title}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.35,
                  delay: highlightIndex * 0.07,
                }}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
              >
                <p className="text-sm font-medium text-white">
                  {highlight.title}
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Responsibilities */}
      <ul className="mt-5 max-w-3xl space-y-3">
        {experience.responsibilities.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-6 text-slate-500"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />

            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="mt-6 flex flex-wrap gap-2">
        {experience.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-xs text-slate-500"
          >
            {technology}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default ExperienceItem;