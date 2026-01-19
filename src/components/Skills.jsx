import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Code2, Database, Terminal, Cpu } from 'lucide-react';

export default function Skills({ skills }) {
    if (!skills) return null;

    const categories = [
        { title: "Languages & Frameworks", icon: Code2, data: [...skills.languages, ...skills.frameworks], color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
        { title: "Databases", icon: Database, data: skills.databases, color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
        { title: "Tools & Technologies", icon: Terminal, data: skills.tools, color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20" },
        { title: "Machine Learning", icon: Cpu, data: skills.ml, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    ];

    return (
        <section id="skills" className="py-20 px-6">
            <div className="max-w-7xl mx-auto space-y-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-8"
                >
                    <Wrench size={48} className="text-[var(--text-primary)]" />
                    <h2 className="text-4xl md:text-5xl font-bold">Skills & Technologies</h2>
                </motion.div>


                <div className="grid md:grid-cols-2 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className={`glass-strong rounded-3xl p-8 border ${cat.border}`}
                        >
                            <h3 className={`text-2xl font-bold ${cat.color} mb-6 flex items-center gap-3`}>
                                <cat.icon size={28} />
                                {cat.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {cat.data.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                                        className={`px-4 py-2 ${cat.bg} text-[var(--text-secondary)] rounded-xl font-medium cursor-default border ${cat.border} text-sm`}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
