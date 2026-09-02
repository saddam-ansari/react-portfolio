import { motion } from "motion/react";

function ProjectCard({ project, index }) {

  const statusStyles = {
    Completed: "border-emerald-400/20 bg-emerald-400/5 text-emerald-300",
    "In Development": "border-amber-400/20 bg-amber-400/5 text-amber-300",
    Planned: "border-slate-400/20 bg-slate-400/5 text-slate-400",
  };

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
        delay: index * 0.08,
      }}
      className={`group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${project.featured
        ? "border-indigo-400/20 bg-indigo-400/[0.03] hover:border-indigo-400/30"
        : "border-white/10 bg-white/[0.02] hover:border-white/15"
        }`}
    >
      {/* Header */}
      <div className="flex flex-wrap items-center gap-2">
        {project.featured && (
          <span className="rounded-full border border-indigo-400/20 bg-indigo-400/5 px-2.5 py-1 text-[11px] font-medium text-indigo-300">
            Featured
          </span>
        )}

        <span
          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${statusStyles[project.status] ||
            "border-white/10 bg-white/[0.03] text-slate-500"
            }`}
        >
          {project.status}
        </span>

        {(project.type || project.category) && (
          <span className="text-[11px] text-slate-700">
            {project.type || project.category}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-sm leading-7 text-slate-500">
        {project.shortDescription || project.description}
      </p>

      {project.role && (
        <p className="mt-4 text-sm leading-7 text-slate-600">
          <span className="text-slate-400">Role:</span>{" "}
          {project.role}
        </p>
      )}

      {/* Problem / Solution */}
      {(project.problem || project.solution) && (
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {project.problem && (
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-700">
                Problem
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {project.problem}
              </p>
            </div>
          )}

          {project.solution && (
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-700">
                Approach
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {project.solution}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Features */}
      <div className="mt-7">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
          Key Features
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.features.map((feature) => (
            <span
              key={feature}
              className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1.5 text-xs text-slate-400"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="mt-7 border-t border-white/5 pt-6">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/10 bg-white/[0.015] px-2.5 py-1.5 text-xs text-slate-400"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="mt-7 flex min-h-6 items-center gap-5">
        {project.github && project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            GitHub ↗
          </a>
        )}

        {project.liveDemo && project.liveDemo !== "#" && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            Live Demo ↗
          </a>
        )}

        {!project.github && !project.liveDemo && project.status === "In Development" && (
          <span className="text-xs text-slate-700">
            Links will be available when the project is ready.
          </span>
        )}

        {!project.github && !project.liveDemo && project.status === "Planned" && (
          <span className="text-xs text-slate-700">
            Project planned for future development.
          </span>
        )}
      </div>
    </motion.article>
  );
}

export default ProjectCard;