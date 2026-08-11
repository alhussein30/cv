import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  Printer, 
  Copy, 
  Check, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code2, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  ExternalLink
} from 'lucide-react';
import { fullResumeData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadText: () => void;
  onOpenPrintable: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onDownloadText,
  onOpenPrintable
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const data = fullResumeData;
  const p = data.personalInfo;

  const handleCopySummary = () => {
    const text = `${p.name} - ${p.title}\nPhone: ${p.phone1} / ${p.phone2}\nEmail: ${p.email}\nUniversity: ${p.university}\nProjects: https://al-yaqtin.vercel.app/ , https://jurista-wheat.vercel.app/ , https://vape-master1.vercel.app/ , https://big-data-orpin.vercel.app/`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl relative my-6 text-[#0F172A]">
        
        {/* Header Bar */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-[#FAFAFC] rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-200 text-[#4F46E5]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F172A]">{p.name} — Curriculum Vitae</h3>
              <p className="text-xs text-[#64748B]">{p.title} • {p.university}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 text-[#0F172A] hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable CV Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#0F172A] text-xs sm:text-sm leading-relaxed">
          
          {/* Personal Info Box */}
          <div className="bg-[#FAFAFC] p-5 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-[#4F46E5] to-[#7C3AED] p-0.5 shadow-md flex-shrink-0">
              <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center text-white font-extrabold text-base">
                AS
              </div>
            </div>
            <div className="flex-1 w-full">
              <h2 className="text-xl font-bold text-[#0F172A] mb-1">{p.name}</h2>
              <div className="text-[#4F46E5] font-semibold text-xs mb-3">{p.title}</div>
              
              <div className="grid sm:grid-cols-2 gap-2 text-xs text-[#64748B]">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#4F46E5]" />
                  <span>{p.phone1} / {p.phone2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span>{p.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#A855F7]" />
                  <span>Minya, Egypt</span>
                </div>
                <div className="flex items-center gap-3">
                  <a href={p.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:underline text-[#4F46E5] flex items-center gap-1 font-medium">
                    <Linkedin className="w-3.5 h-3.5 text-[#4F46E5]" />
                    <span>LinkedIn</span>
                  </a>
                  <span className="text-slate-300">•</span>
                  <a href={p.gitHub} target="_blank" rel="noopener noreferrer" className="hover:underline text-[#7C3AED] flex items-center gap-1 font-medium">
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Objective */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4F46E5] mb-2 pb-1 border-b border-slate-200">
              Objective & Summary
            </h4>
            <p className="text-[#64748B] text-xs leading-relaxed">
              {data.objective}
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4F46E5] mb-2 pb-1 border-b border-slate-200 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#4F46E5]" />
              <span>Education</span>
            </h4>
            <div className="bg-[#FAFAFC] p-3.5 rounded-xl border border-slate-200">
              <div className="font-bold text-[#0F172A]">{p.university}</div>
              <div className="text-xs text-[#64748B]">{p.degree}</div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4F46E5] mb-2 pb-1 border-b border-slate-200 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-[#4F46E5]" />
              <span>Technical Skills</span>
            </h4>
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-[#FAFAFC] p-3 rounded-lg border border-slate-200">
                <strong className="text-[#0F172A]">Languages:</strong> <span className="text-[#64748B]">{data.skills.languages.join(', ')}</span>
              </div>
              <div className="bg-[#FAFAFC] p-3 rounded-lg border border-slate-200">
                <strong className="text-[#0F172A]">Frameworks:</strong> <span className="text-[#64748B]">{data.skills.frameworks.join(', ')}</span>
              </div>
              <div className="bg-[#FAFAFC] p-3 rounded-lg border border-slate-200">
                <strong className="text-[#0F172A]">Tools:</strong> <span className="text-[#64748B]">{data.skills.tools.join(', ')}</span>
              </div>
              <div className="bg-[#FAFAFC] p-3 rounded-lg border border-slate-200">
                <strong className="text-[#0F172A]">Responsive Design:</strong> <span className="text-[#64748B]">{data.skills.design.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4F46E5] mb-2 pb-1 border-b border-slate-200 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#F97316]" />
              <span>Certifications</span>
            </h4>
            <div className="space-y-2">
              {data.certifications.map((c) => (
                <div key={c.id} className="bg-[#FAFAFC] p-3 rounded-lg border border-slate-200 text-xs">
                  <div className="font-bold text-[#0F172A]">{c.title} — <span className="text-[#F97316]">{c.issuer}</span> ({c.issueDate})</div>
                  <div className="text-[#64748B] text-[11px] mt-0.5">{c.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Works */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4F46E5] mb-2 pb-1 border-b border-slate-200 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-[#7C3AED]" />
              <span>Live Deployed React Works</span>
            </h4>
            <div className="space-y-2 text-xs">
              {data.projects.map((proj) => (
                <div key={proj.id} className="bg-[#FAFAFC] p-3 rounded-lg border border-slate-200 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-[#0F172A]">{proj.title}</span>
                    <span className="text-[#64748B] text-xs block">{proj.description}</span>
                  </div>
                  <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[#4F46E5] hover:underline flex items-center gap-1 text-xs font-semibold">
                    <span>Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-[#FAFAFC] border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 rounded-b-2xl">
          <button
            onClick={handleCopySummary}
            className="px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-[#0F172A] text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-[#4F46E5]" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied Contact Data!' : 'Copy Summary'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenPrintable}
              className="px-4 py-2.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-md shadow-indigo-200"
            >
              <Download className="w-4 h-4" />
              <span>Download as PDF</span>
            </button>

            <button
              onClick={onDownloadText}
              className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-[#0F172A] text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <FileText className="w-4 h-4 text-[#64748B]" />
              <span>Download TXT</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
