import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Building2, 
  Eye, 
  X, 
  Check, 
  ExternalLink,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { Certification } from '../types';
import { certificationsData, personalInfo } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 bg-[#FAFAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#F97316] text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Official Diplomas & Certifications
          </h2>
          <p className="mt-3 text-[#64748B] text-sm sm:text-base">
            Professional certifications awarded by Instant Software Solutions recognizing front-end engineering mastery.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg flex flex-col justify-between hover:border-[#4F46E5]/40 transition-all duration-300 group"
            >
              {/* Header Banner */}
              <div className="p-6 bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#A855F7] relative overflow-hidden">
                <div className="absolute right-3 top-3 opacity-20">
                  <Award className="w-24 h-24 text-white" />
                </div>
                
                <div className="relative z-10 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/30 backdrop-blur-md text-[11px] font-bold tracking-wide uppercase mb-3">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>Verified Credential</span>
                  </div>

                  <h3 className="text-2xl font-black tracking-tight drop-shadow-sm mb-1 text-white">
                    {cert.title}
                  </h3>

                  <p className="text-indigo-100 text-xs font-medium flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{cert.issuer}</span>
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                {/* Meta details row */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#64748B] pb-3 border-b border-slate-100">
                  <span className="flex items-center gap-1.5 bg-[#FAFAFC] px-2.5 py-1 rounded-lg border border-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>Date: <strong className="text-[#0F172A]">{cert.issueDate}</strong></span>
                  </span>

                  <span className="flex items-center gap-1.5 bg-[#FAFAFC] px-2.5 py-1 rounded-lg border border-slate-200">
                    <Clock className="w-3.5 h-3.5 text-[#4F46E5]" />
                    <span>Duration: <strong className="text-[#0F172A]">{cert.duration}</strong></span>
                  </span>
                </div>

                <p className="text-[#64748B] text-xs leading-relaxed">
                  {cert.description}
                </p>

                {/* Acquired Skills */}
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                    Key Competencies Demonstrated:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsAcquired.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-[#FAFAFC] border border-slate-200 text-[#0F172A] text-[11px] font-medium flex items-center gap-1"
                      >
                        <Check className="w-3 h-3 text-[#4F46E5]" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Button */}
              <div className="p-4 bg-[#FAFAFC] border-t border-slate-100 flex items-center justify-between">
                <div className="text-[11px] text-[#64748B]">
                  Awarded to: <strong className="text-[#0F172A]">{personalInfo.name}</strong>
                </div>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="px-4 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-[#4F46E5] border border-indigo-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Certificate Modal Lightbox */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 text-[#0F172A]">
            
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 text-[#0F172A] hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Simulated High-Res Certificate Design */}
            <div className="border-4 border-double border-[#4F46E5]/40 p-6 sm:p-8 bg-[#FAFAFC] rounded-xl relative overflow-hidden text-center my-2">
              <div className="text-[#4F46E5] font-extrabold text-2xl tracking-widest uppercase mb-1">
                INSTANT SOFTWARE SOLUTIONS
              </div>
              <div className="text-[#F97316] font-bold text-lg tracking-wider mb-6">
                CERTIFICATE OF COMPLETION
              </div>

              <div className="text-[#64748B] text-xs uppercase tracking-widest mb-2">
                THIS CERTIFICATE IS OFFICIALLY AWARDED TO
              </div>

              <div className="text-3xl font-extrabold text-[#0F172A] tracking-tight underline decoration-[#4F46E5] decoration-2 underline-offset-8 mb-6">
                {personalInfo.name}
              </div>

              <div className="text-[#64748B] text-sm max-w-md mx-auto mb-6">
                For successfully completing the program as <strong className="text-[#4F46E5]">{selectedCert.title}</strong> ({selectedCert.duration}).
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200 text-xs text-[#64748B]">
                <div className="text-left">
                  <div>ISSUE DATE: <strong className="text-[#0F172A]">{selectedCert.issueDate}</strong></div>
                  <div>ISSUER: <strong className="text-[#0F172A]">{selectedCert.issuer}</strong></div>
                </div>
                <div className="text-right">
                  <div className="text-[#4F46E5] font-bold">STATUS: VERIFIED</div>
                  <div className="text-[#64748B] text-[10px]">Credential ID: {selectedCert.id}</div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 text-[#0F172A] font-semibold text-xs hover:bg-slate-200"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
