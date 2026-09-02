import { motion } from "motion/react";

function WhatIBring({ items }) {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            {items.map((item, index) => (
                <motion.div
                    key={item.title}
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
                        duration: 0.4,
                        delay: index * 0.08,
                    }}
                    className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]"
                >
                    <div className="flex items-start gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 text-xs text-slate-500 transition-colors group-hover:text-white">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <div>
                            <h3 className="text-base font-semibold text-white">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default WhatIBring;