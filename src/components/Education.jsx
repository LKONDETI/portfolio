import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education({ education, certifications }) {
    if (!education || !certifications) return null;

    return (
        <section id="education" className="py-20 px-6">
            <div className="max-w-7xl mx-auto space-y-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-8"
                >
                    <GraduationCap size={48} className="text-cyan-400" />
                    <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
                </motion.div>

                {education.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-3xl p-10 border border-cyan-500/20 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-32 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-8">
                            <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 text-cyan-400 w-20 h-20 flex items-center justify-center shrink-0">
                                <GraduationCap size={40} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-2">{edu.degree}</h3>
                                <p className="text-2xl text-cyan-400 font-light mb-4">{edu.school}</p>
                                <div className="flex flex-wrap gap-4 text-[var(--text-tertiary)]">
                                    <span className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                                        <Calendar size={16} />
                                        Graduated: {edu.year}
                                    </span>
                                    {edu.details.map((detail, i) => (
                                        <span key={i} className="px-4 py-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20 font-bold text-emerald-400">
                                            {detail}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                <div className="pt-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <Award size={48} className="text-yellow-400" />
                        <h3 className="text-3xl md:text-4xl font-bold">Certifications</h3>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {certifications.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                                viewport={{ once: true }}
                                className={`glass-strong rounded-3xl p-8 border-l-4
                        ${idx % 2 === 0 ? 'border-cyan-500' : 'border-violet-500'}
                    `}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`p-3 rounded-xl
                        ${idx % 2 === 0 ? 'bg-cyan-500/20 text-cyan-400' : 'bg-violet-500/20 text-violet-400'}
                    `}>
                                        <Award size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[var(--text-primary)]">{cert.name}</h4>
                                        <p className="text-[var(--text-tertiary)]">{cert.issuer}</p>
                                    </div>
                                </div>
                                <p className="text-[var(--text-tertiary)] text-sm flex items-center gap-2">
                                    <Calendar size={14} />
                                    Issued: {cert.date}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
