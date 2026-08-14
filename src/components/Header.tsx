import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Download, 
  Menu, 
  X, 
  Code2, 
  Briefcase, 
  Award, 
  GraduationCap, 
  Mail,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeaderProps {
  onOpenResumeModal: () => void;
  onOpenAiAssistant: () => void;
  onDownloadResumeText: () => void;
  onOpenPrintableResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenResumeModal,
  onOpenAiAssistant,
  onDownloadResumeText,
  onOpenPrintableResume
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: GraduationCap },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Personal Avatar */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4F46E5] via-[#7C3AED] to-[#A855F7] p-0.5 shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
              <img
                src={personalInfo.profileImage || "/huss.png"}
                alt={personalInfo.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div>
              <span className="text-[#0F172A] font-bold text-base sm:text-lg tracking-tight block leading-none group-hover:text-[#4F46E5] transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs text-[#4F46E5] font-semibold">Software Engineer</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/90 p-1.5 rounded-full border border-slate-200/80 shadow-sm backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100/80 transition-colors flex items-center gap-1.5"
              >
                <link.icon className="w-4 h-4 text-[#4F46E5]" />
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Resume Dropdown */}
            <div className="relative">
              <button
                onClick={() => setResumeDropdownOpen(!resumeDropdownOpen)}
                className="px-4 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-medium text-xs flex items-center gap-2 transition-all shadow-md shadow-indigo-200 active:scale-95"
              >
                <FileText className="w-4 h-4" />
                <span>Resume (CV)</span>
                <Download className="w-3.5 h-3.5 opacity-80" />
              </button>

              {resumeDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseLeave={() => setResumeDropdownOpen(false)}
                >
                  <button
                    onClick={() => {
                      setResumeDropdownOpen(false);
                      onOpenResumeModal();
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-xs font-medium text-[#0F172A] hover:bg-slate-100 flex items-center gap-2.5 transition-colors"
                  >
                    <FileText className="w-4 h-4 text-[#4F46E5]" />
                    <span>View CV Online</span>
                  </button>
                  <button
                    onClick={() => {
                      setResumeDropdownOpen(false);
                      onOpenPrintableResume();
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-xs font-medium text-[#0F172A] hover:bg-slate-100 flex items-center gap-2.5 transition-colors"
                  >
                    <Download className="w-4 h-4 text-[#F97316]" />
                    <span>Download as PDF</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white text-[#0F172A] border border-slate-200 hover:bg-slate-100 transition-colors shadow-sm"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-slate-200 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-[#0F172A] hover:bg-slate-100 text-sm font-medium flex items-center gap-3 transition-colors"
              >
                <link.icon className="w-5 h-5 text-[#4F46E5]" />
                {link.name}
              </a>
            ))}
            
            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0F172A] font-medium text-sm flex items-center justify-center gap-2 border border-slate-200"
              >
                <FileText className="w-4 h-4 text-[#4F46E5]" />
                <span>View CV Online</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPrintableResume();
                }}
                className="w-full py-3 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-md shadow-indigo-200"
              >
                <Download className="w-4 h-4" />
                <span>Download as PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
