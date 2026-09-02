import { motion } from "motion/react";
import SectionHeading from "../components/SectionHeading";
import { portfolioData } from "../data/db";

function Education() {
  const { education, certifications, learning } = portfolioData;

  return (
    <section
      id="education"
      className="border-t border-white/5 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="06 — Education & Learning"
          title="My learning journey."
          description="The academic foundation behind my development journey and the areas I'm continuing to learn."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Education */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
            }}
            className="rounded-2xl border border-indigo-400/10 bg-indigo-400/[0.02] p-6 sm:p-8"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
              Education
            </p>

            <div className="mt-6 space-y-6">
              {education.map((item) => (
                <div key={`${item.degree}-${item.institution}`}>
                  <p className="text-xs text-slate-600">
                    {item.period}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                    {item.degree}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-indigo-300">
                    {item.institution}
                  </p>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications / Learning */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
              Continuous Learning
            </p>

            <div className="mt-6 space-y-5">
              {certifications.map((item) => (
                <div
                  key={`${item.name}-${item.issuer}`}
                  className="border-b border-white/5 pb-5 last:border-0 last:pb-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-sm font-medium leading-5 text-white">
                      {item.name}
                    </h3>

                    <span className="shrink-0 text-xs text-slate-600">
                      {item.year}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-600">
                    {item.issuer}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-white/5 pt-6">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
                Currently Learning
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {learning.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-indigo-400/10 bg-indigo-400/[0.03] px-2.5 py-1.5 text-xs text-slate-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Education;