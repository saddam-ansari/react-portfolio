import { motion } from "motion/react";

function MetricCard({ label, value, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
      }}
      className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
    >
      <p className="text-sm text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-2xl font-bold text-white">
        {value}
      </p>
    </motion.div>
  );
}

export default MetricCard;