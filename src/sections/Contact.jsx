import { motion } from "motion/react";
import SectionHeading from "../components/SectionHeading";
import { portfolioData } from "../data/db";

function Contact() {
    const { contact, socialLinks, personal } = portfolioData;

    return (
        <section
            id="contact"
            className="border-t border-white/5 px-6 py-24"
        >
            <div className="mx-auto max-w-5xl">
                <SectionHeading
                    eyebrow="07 — Contact"
                    title={contact.title}
                    description={contact.description}
                />

                <div className="grid gap-6 md:grid-cols-2">
                    {/* Contact Card */}
                    <motion.div
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
                            duration: 0.5,
                        }}
                        className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
                    >
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
                            Get in touch
                        </p>

                        <a
                            href={`mailto:${contact.email}?subject=Opportunity%20for%20React%20JS%20Developer`}
                            className="mt-4 block break-all text-lg font-medium text-white transition-colors hover:text-indigo-300 sm:text-xl"
                        >
                            {contact.email}
                        </a>

                        <p className="mt-5 text-sm leading-7 text-slate-500">
                            {contact.responseNote}
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">
                            <a
                                href={`mailto:${contact.email}?subject=Opportunity%20for%20React%20JS%20Developer`}
                                className="rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-indigo-400"
                            >
                                Send me an email
                            </a>

                            <a
                                href={personal.resumeUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-slate-400 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.03] hover:text-white"
                            >
                                View Resume ↗
                            </a>

                            <a
                                href={socialLinks.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-slate-400 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.03] hover:text-white"
                            >
                                LinkedIn ↗
                            </a>
                        </div>
                    </motion.div>

                    {/* Availability Card */}
                    <motion.div
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
                            duration: 0.5,
                            delay: 0.1,
                        }}
                        className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
                    >
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
                            Current Status
                        </p>

                        <div className="mt-5 flex items-center gap-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                            <p className="text-sm font-medium text-white">
                                {contact.availability}
                            </p>
                        </div>

                        <div className="mt-8">
                            <p className="text-xs text-slate-600">
                                Based in
                            </p>

                            <p className="mt-1 text-sm text-slate-400">
                                {contact.location}
                            </p>
                        </div>

                        <div className="mt-7 flex gap-5">
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
            </div>
        </section>
    );
}

export default Contact;