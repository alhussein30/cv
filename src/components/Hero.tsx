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

          {/* Right Column - Interactive Profile Card with Stats Grid */}
          <div className="lg:col-span-5 w-full">
            <div className="relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-4 sm:p-8 shadow-xl backdrop-blur-md overflow-hidden group hover:border-[#4F46E5]/40 transition-all duration-300 w-full">
              
              {/* Top ambient glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-[#7C3AED]/15 to-[#A855F7]/15 rounded-full blur-2xl pointer-events-none group-hover:opacity-100 transition-all" />

              {/* Monogram Badge & Name Header */}
              <div className="flex items-center gap-4 mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-slate-100 relative z-10">
                <div>
                  <div className="text-[#0F172A] font-bold text-base sm:text-xl tracking-tight">{personalInfo.name}</div>
                  <div className="text-[#4F46E5] text-xs sm:text-sm font-semibold flex items-center gap-1.5 mt-0.5">
                    <span>{personalInfo.title}</span>
                  </div>
                  <div className="text-[#64748B] text-xs mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#4F46E5] flex-shrink-0" />
                    <span className="truncate">Minya University • Egypt</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="bg-[#FAFAFC] p-2.5 sm:p-4 rounded-xl border border-slate-200">
                  <div className="text-[#4F46E5] font-extrabold text-lg sm:text-2xl">6+</div>
                  <div className="text-[#0F172A] text-[11px] sm:text-xs font-medium mt-0.5 leading-tight">Deployed Web Apps</div>
                  <div className="text-[#64748B] text-[10px] sm:text-[11px] mt-0.5 sm:mt-1">Live on Vercel</div>
                </div>

                <div className="bg-[#FAFAFC] p-2.5 sm:p-4 rounded-xl border border-slate-200">
                  <div className="text-[#7C3AED] font-extrabold text-lg sm:text-2xl">100h</div>
                  <div className="text-[#0F172A] text-[11px] sm:text-xs font-medium mt-0.5 leading-tight">Front-End Diploma</div>
                  <div className="text-[#64748B] text-[10px] sm:text-[11px] mt-0.5 sm:mt-1">Instant Software</div>
                </div>

                <div className="bg-[#FAFAFC] p-2.5 sm:p-4 rounded-xl border border-slate-200">
                  <div className="text-[#A855F7] font-extrabold text-lg sm:text-2xl">B2/C1</div>
                  <div className="text-[#0F172A] text-[11px] sm:text-xs font-medium mt-0.5 leading-tight">English Proficiency</div>
                  <div className="text-[#64748B] text-[10px] sm:text-[11px] mt-0.5 sm:mt-1">Fluent & Technical</div>
                </div>

                <div className="bg-[#FAFAFC] p-2.5 sm:p-4 rounded-xl border border-slate-200">
                  <div className="text-[#F97316] font-extrabold text-lg sm:text-2xl">100%</div>
                  <div className="text-[#0F172A] text-[11px] sm:text-xs font-medium mt-0.5 leading-tight">Responsive Design</div>
                  <div className="text-[#64748B] text-[10px] sm:text-[11px] mt-0.5 sm:mt-1">Mobile & Desktop</div>
                </div>
              </div>

              {/* Highlights Checklist */}
              <div className="space-y-2 mb-5 sm:mb-6 text-[11px] sm:text-xs text-[#64748B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4F46E5] flex-shrink-0" />
                  <span>Front-End Diploma & 1-Month Training Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4F46E5] flex-shrink-0" />
                  <span>React, TypeScript, Tailwind CSS, & RESTful APIs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4F46E5] flex-shrink-0" />
                  <span>Interactive web apps in E-Commerce & Legal Tech</span>
                </div>
              </div>

              {/* External Profile Links */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-slate-100">
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[80px] px-2 sm:px-3 py-2 rounded-lg bg-[#FAFAFC] hover:bg-slate-100 text-[#0F172A] text-[10px] sm:text-xs font-medium border border-slate-200 flex items-center justify-center gap-1 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#4F46E5] flex-shrink-0" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-[#64748B] flex-shrink-0" />
                </a>

                <a
                  href={personalInfo.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[80px] px-2 sm:px-3 py-2 rounded-lg bg-[#FAFAFC] hover:bg-slate-100 text-[#0F172A] text-[10px] sm:text-xs font-medium border border-slate-200 flex items-center justify-center gap-1 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#7C3AED] flex-shrink-0" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-[#64748B] flex-shrink-0" />
                </a>

                <a
                  href="#certifications"
                  className="flex-1 min-w-[80px] px-2 sm:px-3 py-2 rounded-lg bg-indigo-50 border border-indigo-200 text-[#4F46E5] text-[10px] sm:text-xs font-medium flex items-center justify-center gap-1 hover:bg-indigo-100 transition-colors"
                >
                  <Award className="w-3.5 h-3.5 text-[#F97316] flex-shrink-0" />
                  <span>Certificates</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
