import { motion } from "motion/react";
import SectionHeading from "../components/SectionHeading";
import { portfolioData } from "../data/db";

function About() {
    const { about } = portfolioData;

    return (
        <section
            id="about"
            className="border-t border-white/5 px-6 py-24"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="01 — About"
                    title={about.title}
                    description="A little context about my experience, development approach and current technical focus."
                />

                <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
                    {/* About Text */}
                    <div className="space-y-5">
                        {about.paragraphs.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.08,
                                }}
                                className="max-w-3xl text-sm leading-8 text-slate-400 sm:text-base"
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>

                    {/* Focus */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{ duration: 0.5 }}
                        className="h-fit rounded-2xl border border-indigo-400/10 bg-indigo-400/[0.02] p-6 sm:p-8"
                    >
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
                            Current Focus
                        </p>

                        <div className="mt-5 space-y-3">
                            {about.focus.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-3"
                                >
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/80" />

                                    <p className="text-sm leading-6 text-slate-400">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;