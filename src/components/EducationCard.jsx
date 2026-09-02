import { motion } from "motion/react";

function EducationCard({ education }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium text-indigo-400">
            {education.period}
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            {education.degree}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {education.field}
          </p>
        </div>

        <span className="text-sm text-slate-600">
          {education.location}
        </span>
      </div>

      <div className="mt-6 border-t border-white/5 pt-5">
        <p className="text-sm text-slate-400">
          {education.institution}
        </p>
      </div>
    </motion.div>
  );
}

export default EducationCard;