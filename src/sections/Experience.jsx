import { motion } from "motion/react";
import SectionHeading from "../components/SectionHeading";
import ExperienceItem from "../components/ExperienceItem";
import { portfolioData } from "../data/db";

function Experience() {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
      className="border-t border-white/5 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="04 — Experience"
          title="Professional experience."
          description="A look at the roles, responsibilities and technologies that have shaped my development experience."
        />

        <div className="relative space-y-14">
          {experience.map((item, index) => (
            <ExperienceItem
              key={`${item.company}-${item.role}`}
              experience={item}
              index={index}
            />
          ))}
        </div>

        {/* Career Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
        >
          <p className="text-sm leading-7 text-slate-500">
            My experience has given me exposure to enterprise
            applications, different business domains and the
            practical challenges involved in building and
            maintaining production software.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;