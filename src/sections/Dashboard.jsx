import { motion } from "motion/react";
import SectionHeading from "../components/SectionHeading";
import { portfolioData } from "../data/db";

function Dashboard() {
  const { dashboard } = portfolioData;

  return (
    <section
      id="dashboard"
      className="border-t border-white/5 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="05 — Developer Dashboard"
          title="A snapshot of how I work."
          description="A quick overview of my experience, current technical focus and the principles I try to follow when building software."
        />

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-3">
          {dashboard.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
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
                duration: 0.4,
                delay: index * 0.08,
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {stat.value}
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        

        {/* Focus Areas */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-indigo-400/10 bg-indigo-400/[0.02] p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
              Technical Focus
            </p>

            <div className="mt-6 space-y-6">
              {dashboard.focusAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.07,
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-sm font-medium text-white">
                      {area.name}
                    </h3>

                    <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] text-slate-600">
                      {area.level}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Development Principles */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
              Development Principles
            </p>

            <div className="mt-6 space-y-4">
              {dashboard.developmentPrinciples.map(
                (principle, index) => (
                  <motion.div
                    key={principle}
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.07,
                    }}
                    className="flex gap-3"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-400/20 text-[10px] text-emerald-400">
                      ✓
                    </span>

                    <p className="text-sm leading-6 text-slate-500">
                      {principle}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;