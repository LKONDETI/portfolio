import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Github, ExternalLink } from 'lucide-react';

export default function Projects({ projects }) {
    if (!projects) return null;

    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-7xl mx-auto space-y-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-8"
                >
                    <Rocket size={48} className="text-fuchsia-400" />
                    <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass group rounded-3xl p-8 border border-white/5 hover:border-fuchsia-500/30 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-bold text-fuchsia-300 group-hover:text-fuchsia-200 transition-colors">
                                    {project.name}
                                </h3>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer" title="View Source"
                                        className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-slate-400 hover:text-white">
                                        <Github size={20} />
                                    </a>
                                )}
                            </div>

                            <p className="text-xs text-slate-500 mb-4 font-mono uppercase tracking-wider">{project.period}</p>

                            <p className="text-slate-300 text-lg mb-8 leading-relaxed min-h-[60px]">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-fuchsia-500/10 text-fuchsia-200 rounded-lg text-sm font-medium border border-fuchsia-500/20">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="space-y-2 border-t border-white/10 pt-6">
                                {project.highlights.map((highlight, i) => (
                                    <div key={i} className="flex gap-3 text-sm text-slate-400">
                                        <span className="text-fuchsia-500 mt-1">•</span>
                                        <span>{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
