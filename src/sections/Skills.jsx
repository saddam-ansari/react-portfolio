import { motion } from "motion/react";
import SectionHeading from "../components/SectionHeading";
import { portfolioData } from "../data/db";

function Skills() {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      className="border-t border-white/5 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="03 — Skills"
          title="Tools I use to build web applications."
          description="A practical mix of frontend, backend, database and development tools I've worked with or am currently strengthening."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-indigo-400/20"
            >
              {/* Category */}
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white">
                  {skillGroup.category}
                </h3>

                <span className="text-xs text-slate-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-500">
                {skillGroup.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {skillGroup.technologies.map((technology) => (
                  <div
                    key={technology.name}
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-xs text-slate-400"
                  >
                    <span className="text-sm text-slate-400">
                      {technology.name}
                    </span>

                    <span className="text-[10px] text-slate-600">
                      {technology.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;