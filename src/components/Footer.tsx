import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Code2, 
  Heart,
  Globe
} from 'lucide-react';
import { personalInfo, projectsData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] border-t border-slate-800 text-slate-400 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Col 1: Bio & Monogram (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4F46E5] via-[#7C3AED] to-[#A855F7] flex items-center justify-center text-white font-bold text-lg shadow-md">
                AS
              </div>
              <div>
                <span className="text-white font-bold text-base block leading-none">
                  {personalInfo.name}
                </span>
                <span className="text-indigo-400 text-xs font-medium">Software Engineer & Front-End Developer</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Student at the Faculty of Computers and Information, Minya University. Dedicated to modern web development, responsive interfaces, and React web engineering.
            </p>

            <div className="flex items-center gap-3 text-slate-300">
              <a href={personalInfo.linkedIn} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/80 hover:text-white hover:bg-slate-700 transition-colors">
                <Linkedin className="w-4 h-4 text-[#4F46E5]" />
              </a>
              <a href={personalInfo.gitHub} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/80 hover:text-white hover:bg-slate-700 transition-colors">
                <Github className="w-4 h-4 text-[#A855F7]" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/80 hover:text-white hover:bg-slate-700 transition-colors">
                <Mail className="w-4 h-4 text-[#7C3AED]" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Portfolio Sections</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">About & Education</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Technical Stack</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Featured Live Projects</a></li>
              <li><a href="#certifications" className="hover:text-white transition-colors">Verified Diplomas</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Alhussein</a></li>
            </ul>
          </div>

          {/* Col 3: Live Works Shortcuts (4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Deployed React Apps</h4>
            <ul className="space-y-1.5">
              {projectsData.map(p => (
                <li key={p.id}>
                  <a 
                    href={p.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{p.title}</span>
                    <Globe className="w-3 h-3 text-slate-600 group-hover:text-indigo-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} <strong>{personalInfo.name}</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors flex items-center gap-1"
          >
            <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
