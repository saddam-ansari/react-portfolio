import { motion } from "motion/react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { portfolioData } from "../data/db";

function Projects() {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      className="border-t border-white/5 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="03 — Projects"
          title="Projects built to solve practical problems."
          description="A collection of personal projects focused on React development, full-stack application architecture and real-world problem solving. Some projects are currently in development or planned."
        />

        <div className="mb-6 flex items-center justify-between">
          <p className="text-xs uppercase tracking-wider text-slate-600">
            Project Showcase
          </p>

          <span className="text-xs text-slate-600">
            {projects.length} Projects
          </span>
        </div>

        <div className="space-y-7">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mt-8 text-center text-xs text-slate-700"
        >
          More projects will be added as they are completed.
        </motion.p>
      </div>
    </section>
  );
}

export default Projects;