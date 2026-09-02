import { motion } from "motion/react";
import SectionHeading from "../components/SectionHeading";
import { portfolioData } from "../data/db";

function Certifications() {
  const { certifications, learning } = portfolioData;

  return (
    <section
      id="certifications"
      className="border-t border-white/5 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="07 — Learning"
          title="Continuous learning and development."
          description="I continuously strengthen my existing skills while expanding into modern frontend and full-stack technologies."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Certifications */}
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.45,
            }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
              Certifications & Coursework
            </p>

            <div className="mt-6 space-y-5">
              {certifications.map((certification) => (
                <div
                  key={certification.name}
                  className="border-b border-white/5 pb-5 last:border-0 last:pb-0"
                >
                  <h3 className="text-sm font-medium text-white">
                    {certification.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-600">
                    {certification.issuer}
                  </p>

                  <p className="mt-2 text-xs text-slate-700">
                    {certification.year}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Current Learning */}
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.45,
              delay: 0.1,
            }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
              Currently Learning
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {learning.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-slate-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;