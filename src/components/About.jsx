import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Database, Brain } from 'lucide-react';

export default function About({ profile, stats }) {
    if (!profile || !stats) return null;

    return (
        <section id="about" className="py-20 px-6">
            <div className="max-w-7xl mx-auto space-y-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-8"
                >
                    <User size={48} className="text-cyan-400" />
                    <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 glass rounded-3xl p-8 md:p-10 space-y-6"
                    >
                        {profile.bio_long.map((paragraph, index) => (
                            <p key={index} className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                                {paragraph}
                            </p>
                        ))}
                    </motion.div>

                    <div className="space-y-6">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className={`glass-strong rounded-3xl p-8 text-center border-l-4
                        ${idx === 0 ? 'border-cyan-500' : ''}
                        ${idx === 1 ? 'border-violet-500' : ''}
                        ${idx === 2 ? 'border-fuchsia-500' : ''}
                    `}
                            >
                                <div className={`text-5xl md:text-6xl font-bold mb-2 font-display text-gradient`}>
                                    {stat.value}
                                </div>
                                <div className="text-slate-400 text-lg">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
