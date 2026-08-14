import React from 'react';
import { 
  FileText, 
  Download,
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ExternalLink,
  Code2,
  Award,
  Globe
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/pdfGenerator';

interface HeroProps {
  onOpenResumeModal: () => void;
  onOpenAiAssistant?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAFAFC]">
      
      {/* Background Gradient Blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#7C3AED]/10 to-[#A855F7]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-[#4F46E5]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Intro */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-[#4F46E5]/20 text-[#4F46E5] text-[11px] sm:text-xs font-semibold mb-5 sm:mb-6 shadow-sm max-w-full">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F97316] animate-ping flex-shrink-0" />
              <span className="truncate">Available for Front-End & Software Roles</span>
            </div>

            {/* Name & Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">{personalInfo.name}</span>
            </h1>

            <h2 className="text-lg sm:text-2xl font-semibold text-[#0F172A] mb-4 sm:mb-5 flex items-center gap-2">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#4F46E5] flex-shrink-0" />
              <span>{personalInfo.title}</span>
            </h2>

            {/* Subtitle / Objective summary */}
            <p className="text-[#64748B] text-sm sm:text-lg leading-relaxed max-w-2xl mb-6 sm:mb-8">
              A passionate, detail-oriented Front-End Engineer & student at the <strong className="text-[#0F172A] font-semibold">Faculty of Computers and Information, Minya University</strong>. Specialized in building high-performance, responsive React web apps, deployed live on Vercel with clean architecture.
            </p>

            {/* Core Tech Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-6 sm:mb-8">
              {['React.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'REST APIs', 'Git / GitHub', 'Vite'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[#64748B] text-[11px] sm:text-xs font-medium hover:border-[#4F46E5] hover:text-[#0F172A] transition-colors shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto mb-8 sm:mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-indigo-200 transition-all active:scale-95 text-center"
              >
                <span>View My Works (6 Apps)</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </a>

              <button
                onClick={downloadResumePdf}
                className="w-full sm:w-auto px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-200 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Download className="w-4 h-4 flex-shrink-0" />
                <span>Download Resume (PDF)</span>
              </button>
              <button
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto px-4 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#0F172A] font-medium text-xs sm:text-sm border border-slate-200 flex items-center justify-center gap-2 transition-all shadow-2xs active:scale-95"
              >
                <FileText className="w-4 h-4 text-[#4F46E5] flex-shrink-0" />
                <span>View Online</span>
              </button>
            </div>

            {/* Contact Channels Bar */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 sm:gap-4 text-xs text-[#64748B] pt-4 border-t border-slate-200/80 w-full">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-[#4F46E5] transition-colors break-all">
                <Mail className="w-4 h-4 text-[#64748B] flex-shrink-0" />
                <span className="truncate">{personalInfo.email}</span>
              </a>
              <span className="hidden sm:inline text-slate-300">•</span>
              <a href={`tel:${personalInfo.phone1}`} className="flex items-center gap-1.5 hover:text-[#4F46E5] transition-colors">
                <Phone className="w-4 h-4 text-[#64748B] flex-shrink-0" />
                <span>{personalInfo.phone1}</span>
              </a>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-[#64748B]">
                <MapPin className="w-4 h-4 text-[#64748B] flex-shrink-0" />
                <span>Minya, Egypt</span>
              </span>
            </div>

          </div>

          {/* Right Column - Large Prominent Featured Photo with Floating Badges */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Decorative Ambient Aura Behind Photo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#4F46E5]/25 via-[#7C3AED]/20 to-[#A855F7]/25 rounded-[2.5rem] blur-2xl opacity-75 -z-10 animate-pulse" />
              
              {/* Outer Glass Frame */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-3 sm:p-4 border border-white shadow-2xl shadow-indigo-900/10 group transition-all duration-500 hover:shadow-indigo-500/20">
                
                {/* Main Large Photo Container */}
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                  <img
                    src={personalInfo.profileImage || "/huss.png"}
                    alt={personalInfo.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay at the bottom for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Top Floating Badge: Available for Work */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>Available for Hire</span>
                    </div>
                  </div>

                  {/* Top Right Floating Badge: CS Student */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-indigo-200 text-xs font-medium shadow-lg">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>Minya Univ</span>
                    </div>
                  </div>

                  {/* Bottom Information Overlay on the Photo */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-20 text-white">
                    <div className="text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-md">
                      {personalInfo.name}
                    </div>
                    <div className="text-indigo-200 text-xs sm:text-sm font-medium mt-0.5 flex items-center gap-1.5">
                      <Code2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      <span>{personalInfo.title}</span>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Cards Attached Below / Floating over Photo */}
                <div className="grid grid-cols-3 gap-2 mt-3">
                  <div className="bg-[#FAFAFC] p-2.5 sm:p-3 rounded-xl border border-slate-200/90 text-center hover:border-indigo-300 transition-colors">
                    <div className="text-indigo-600 font-extrabold text-base sm:text-lg">6+</div>
                    <div className="text-[#0F172A] text-[10px] sm:text-xs font-semibold leading-tight mt-0.5">Live Apps</div>
                    <div className="text-[#64748B] text-[9px] sm:text-[10px] hidden sm:block">On Vercel</div>
                  </div>

                  <div className="bg-[#FAFAFC] p-2.5 sm:p-3 rounded-xl border border-slate-200/90 text-center hover:border-purple-300 transition-colors">
                    <div className="text-purple-600 font-extrabold text-base sm:text-lg">100h</div>
                    <div className="text-[#0F172A] text-[10px] sm:text-xs font-semibold leading-tight mt-0.5">Diploma</div>
                    <div className="text-[#64748B] text-[9px] sm:text-[10px] hidden sm:block">Instant Dev</div>
                  </div>

                  <div className="bg-[#FAFAFC] p-2.5 sm:p-3 rounded-xl border border-slate-200/90 text-center hover:border-amber-300 transition-colors">
                    <div className="text-amber-500 font-extrabold text-base sm:text-lg">100%</div>
                    <div className="text-[#0F172A] text-[10px] sm:text-xs font-semibold leading-tight mt-0.5">Responsive</div>
                    <div className="text-[#64748B] text-[9px] sm:text-[10px] hidden sm:block">React / TS</div>
                  </div>
                </div>

                {/* Quick Social & Portfolio Connect Links */}
                <div className="flex items-center justify-between gap-2 mt-3 pt-3 border-t border-slate-100">
                  <a
                    href={personalInfo.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 rounded-xl bg-slate-50 hover:bg-indigo-50 text-[#0F172A] hover:text-indigo-600 text-xs font-semibold border border-slate-200/80 flex items-center justify-center gap-1.5 transition-all shadow-2xs"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 rounded-xl bg-slate-50 hover:bg-purple-50 text-[#0F172A] hover:text-purple-600 text-xs font-semibold border border-slate-200/80 flex items-center justify-center gap-1.5 transition-all shadow-2xs"
                  >
                    <Github className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="#certifications"
                    className="flex-1 px-3 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold border border-indigo-200 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    <span>Diploma</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
