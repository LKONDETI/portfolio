import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

export default function Experience({ experience }) {
    if (!experience) return null;

    return (
        <section id="experience" className="py-20 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-10 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-8"
                >
                    <Briefcase size={48} className="text-violet-400" />
                    <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
                </motion.div>

                <div className="relative space-y-12">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-8 top-4 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent opacity-30"></div>

                    {experience.map((job, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="relative pl-12 md:pl-20"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[11px] md:left-[27px] top-0 w-3 h-3 md:w-4 md:h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>

                            <div className="glass hover:bg-white/10 transition-colors duration-500 rounded-3xl p-8 md:p-10 border border-white/5 group">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-2">{job.role}</h3>
                                        <p className="text-xl text-[var(--text-secondary)] font-medium mb-1">{job.company}</p>
                                        <p className="text-base text-[var(--text-tertiary)] italic">{job.description}</p>
                                    </div>
                                    <div className="mt-4 lg:mt-0 flex items-center gap-2 px-4 py-2 bg-[var(--glass-strong-bg)] rounded-full border border-[var(--glass-border)] text-[var(--text-tertiary)] text-sm">
                                        <Calendar size={16} />
                                        <span className="whitespace-nowrap">{job.period}</span>
                                    </div>
                                </div>
                                <ul className="space-y-4">
                                    {job.highlights.map((highlight, i) => (
                                        <li key={i} className="flex gap-4 text-[var(--text-secondary)] text-lg group-hover:text-[var(--text-primary)] transition-colors">
                                            <ChevronRight className="text-cyan-500 shrink-0 mt-1" size={20} />
                                            <span className="leading-relaxed">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
