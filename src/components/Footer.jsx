import React from 'react';
import { Linkedin, Github, Mail, Heart } from 'lucide-react';

export default function Footer({ profile }) {
    if (!profile) return null;

    return (
        <footer className="bg-slate-950 border-t border-white/5 py-12 px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
                <div className="flex gap-8">
                    {profile.socials.linkedin && (
                        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer"
                            className="p-3 bg-white/5 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all hover:scale-110 text-slate-400">
                            <Linkedin size={24} />
                        </a>
                    )}
                    {profile.socials.github && (
                        <a href={profile.socials.github} target="_blank" rel="noreferrer"
                            className="p-3 bg-white/5 rounded-full hover:bg-violet-500/20 hover:text-violet-400 transition-all hover:scale-110 text-slate-400">
                            <Github size={24} />
                        </a>
                    )}
                    <a href={`mailto:${profile.email}`}
                        className="p-3 bg-white/5 rounded-full hover:bg-fuchsia-500/20 hover:text-fuchsia-400 transition-all hover:scale-110 text-slate-400">
                        <Mail size={24} />
                    </a>
                </div>
                <div className="space-y-2">
                    <p className="text-slate-500 text-sm">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
                    <p className="text-slate-600 text-xs flex items-center justify-center gap-1">
                        Built with React <Heart size={10} className="text-red-500 fill-red-500" /> Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
