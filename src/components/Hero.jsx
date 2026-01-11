import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, ArrowDown } from 'lucide-react';

export default function Hero({ profile }) {
    if (!profile) return null;

    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative">
            <div className="max-w-5xl text-center space-y-8 z-10">
                <div className="space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
                    >
                        {profile.name}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-2xl md:text-3xl text-cyan-300 font-light font-display"
                    >
                        {profile.title}
                    </motion.p>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                >
                    {profile.bio_short}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-6 text-slate-300 text-lg"
                >
                    <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-cyan-400 transition-all hover:scale-105">
                        <Mail size={20} />
                        <span>{profile.email}</span>
                    </a>
                    <div className="flex items-center gap-2">
                        <MapPin size={20} />
                        <span>{profile.location}</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                    className="flex justify-center gap-6 pt-4"
                >
                    {profile.socials.linkedin && (
                        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer"
                            className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full hover:from-blue-500 hover:to-blue-600 transition-all hover:scale-110 shadow-lg hover:shadow-cyan-500/50">
                            <Linkedin size={24} color="white" />
                        </a>
                    )}
                    {profile.socials.github && (
                        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer"
                            className="p-4 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full hover:from-purple-500 hover:to-purple-600 transition-all hover:scale-110 shadow-lg hover:shadow-violet-500/50">
                            <Github size={24} color="white" />
                        </a>
                    )}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10"
            >
                <ArrowDown size={32} className="text-slate-500" />
            </motion.div>
        </section>
    );
}
