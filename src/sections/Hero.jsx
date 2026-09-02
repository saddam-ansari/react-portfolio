import { motion } from "motion/react";
import { portfolioData } from "../data/db";
import { Link } from "react-router-dom";

function Hero() {
  const { personal, socialLinks } = portfolioData;

  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-24 pt-20 sm:pb-32 sm:pt-28"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Availability */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="text-xs font-medium text-slate-400">
              {personal.availability}
            </span>
          </div>

          {/* Heading */}
          <div className="mt-8">
            <p className="text-base font-medium text-slate-500 sm:text-lg">
              Hi, I'm
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-[72px]">
              {personal.name}.
            </h1>

            <h2 className="mt-5 max-w-3xl text-2xl font-semibold leading-tight text-slate-300 sm:text-4xl">
              {personal.role}
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-500 sm:text-xl">
              {personal.headline}
            </p>
          </div>

          {/* Bio */}
          <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            {personal.shortBio}
          </p>

          {/* Experience Stats */}
          <div className="mt-8 flex flex-wrap items-start gap-x-7 gap-y-5">
            <div>
              <p className="text-xl font-semibold text-white">
                {personal.experience.total}
              </p>

              <p className="mt-1 text-xs text-slate-600">
                IT Experience
              </p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {personal.experience.react}
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-600">
                React Experience
              </p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <p className="text-xl font-semibold text-white">
                {personal.location}
              </p>

              <p className="mt-1 text-xs text-slate-600">
                Based in
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-400"
            >
              View Projects
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >→</span>
            </Link>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.03] hover:text-white"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-5">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-600 transition-colors hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-600 transition-colors hover:text-white"
            >
              LinkedIn ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;