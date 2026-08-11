import React from 'react';
import { 
  GraduationCap, 
  Languages, 
  CheckCircle2, 
  UserCheck, 
  BookOpen, 
  Award,
  Cpu,
  Building2,
  MessageSquareQuote
} from 'lucide-react';
import { personalInfo, softSkillsData, languagesData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#FAFAFC] border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-[#4F46E5] text-xs font-semibold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Profile & Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            About Alhussein Salah Shaban
          </h2>
          <p className="mt-3 text-[#64748B] text-sm sm:text-base">
            Front-End Developer & Computer Science student dedicated to crafting responsive, scalable web interfaces with clean user experience.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Main Story & Education (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Education Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 relative overflow-hidden group hover:border-[#4F46E5]/40 transition-all shadow-lg">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#7C3AED]/10 to-[#A855F7]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#7C3AED] via-[#A855F7] to-[#4F46E5] p-0.5 shadow-md flex-shrink-0 flex items-center justify-center">
                  <div className="w-full h-full bg-[#0F172A] rounded-[14px] flex items-center justify-center text-[#A855F7]">
                    <GraduationCap className="w-8 h-8 text-indigo-400" />
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-[#4F46E5] text-xs font-semibold mb-2">
                    <GraduationCap className="w-3.5 h-3.5 text-[#4F46E5]" />
                    <span>Academic Qualification</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">Faculty of Computers & Information</h3>
                  <p className="text-[#4F46E5] font-semibold text-sm">Minya University — Egypt</p>
                  <p className="text-[#64748B] text-xs mt-1">Specialization: Computer Science & Software Engineering</p>
                </div>
              </div>

              <p className="text-[#64748B] text-sm leading-relaxed mb-4">
                Studying computer science at Minya University provided a solid foundation in computational thinking, data structures, algorithm design, software architecture, and modern web application development.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100 text-xs text-[#64748B]">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#4F46E5]" />
                  <span>Strong Computer Science & Software Engineering Foundation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#7C3AED]" />
                  <span>El Minya University — Minya, Egypt</span>
                </div>
              </div>
            </div>

            {/* Objective & Technical Focus */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-200 text-[#4F46E5]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">Professional Objective & Technical Approach</h3>
              </div>

              <p className="text-[#64748B] text-sm leading-relaxed mb-4">
                A passionate and detail-oriented Front-End Developer with practical experience in building responsive, user-friendly websites and applications. Seeking opportunities to leverage skills in HTML5, CSS3, JavaScript (ES6+), TypeScript, and modern front-end frameworks like React to create engaging user experiences.
              </p>

              <div className="p-4 rounded-xl bg-[#FAFAFC] border border-slate-200 text-xs text-[#64748B] space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4F46E5] mt-0.5 flex-shrink-0" />
                  <span><strong>Full Web Lifecycle:</strong> Designing responsive component layouts, managing client-side state, integrating RESTful/GraphQL APIs, and deploying live on Vercel.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4F46E5] mt-0.5 flex-shrink-0" />
                  <span><strong>Structured Implementation:</strong> Mobile-first design approach using Flexbox, CSS Grid, media queries, and utility-first styling with Tailwind CSS and Bootstrap.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Languages & Soft Strengths (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* English & Spoken Languages */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-200 text-[#7C3AED]">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F172A]">Language Proficiency</h3>
                  <span className="text-xs text-[#7C3AED] font-semibold">Bilingual Capabilities</span>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                {languagesData.map((lang) => (
                  <div key={lang.language} className="p-3.5 rounded-xl bg-[#FAFAFC] border border-slate-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-[#0F172A]">{lang.language}</span>
                      <span className="px-2 py-0.5 rounded bg-purple-100 text-[#7C3AED] font-semibold text-[11px]">
                        {lang.proficiency}
                      </span>
                    </div>
                    <p className="text-[#64748B] text-[11px] leading-normal">
                      {lang.language === 'English' 
                        ? 'Upper-Intermediate B2 (approaching C1). Capable of extended technical conversations, understanding spoken English, explaining complex ideas, and professional collaboration.' 
                        : 'Native Arabic speaker with excellent command of formal and informal communication.'}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Professional Strengths */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-200 text-[#F97316]">
                  <MessageSquareQuote className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0F172A]">Core Professional Strengths</h3>
              </div>

              <ul className="space-y-2.5 text-xs text-[#64748B]">
                {softSkillsData.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 p-2 rounded-lg bg-[#FAFAFC] border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4F46E5] flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
