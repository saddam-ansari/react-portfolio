import { motion } from "motion/react";

function TechnologyBar({ technology, index }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-slate-300">
          {technology.name}
        </span>

        <span className="text-xs text-slate-500">
          {technology.level}%
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${technology.level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-indigo-400"
        />
      </div>
    </div>
  );
}

export default TechnologyBar;