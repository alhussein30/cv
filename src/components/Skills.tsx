import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Globe, 
  Terminal, 
  CheckCircle2, 
  Sparkles,
  Cpu
} from 'lucide-react';
import { skillCategoriesData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...skillCategoriesData.map(c => c.category)];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-[#4F46E5]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#7C3AED]" />;
      case 'Globe': return <Globe className="w-5 h-5 text-[#A855F7]" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-[#F97316]" />;
      default: return <Cpu className="w-5 h-5 text-[#4F46E5]" />;
    }
  };

  const filteredCategories = activeCategory === 'All' 
    ? skillCategoriesData 
    : skillCategoriesData.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-[#FAFAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-[#4F46E5] text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Skills & Technical Stack
          </h2>
          <p className="mt-3 text-[#64748B] text-sm sm:text-base">
            Core technologies and engineering workflows utilized in creating front-end applications, responsive layouts, and RESTful web interfaces.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#4F46E5] text-white shadow-md shadow-indigo-200 scale-105'
                  : 'bg-white text-[#64748B] hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredCategories.map((catGroup) => (
            <div 
              key={catGroup.category} 
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#4F46E5]/40 transition-all shadow-md hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-2.5 rounded-xl bg-[#FAFAFC] border border-slate-200">
                  {getIcon(catGroup.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A]">{catGroup.category}</h3>
                  <p className="text-[#64748B] text-xs">Verified skills & practical experience</p>
                </div>
              </div>

              <div className="space-y-4">
                {catGroup.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-[#0F172A] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4F46E5]" />
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        {skill.experience && (
                          <span className="text-[11px] text-[#64748B] hidden sm:inline">{skill.experience}</span>
                        )}
                        <span className="px-2 py-0.5 rounded bg-indigo-50 text-[#4F46E5] font-bold text-[10px] border border-indigo-200">
                          {skill.badge || `${skill.level}%`}
                        </span>
                      </div>
                    </div>

                    {/* Progress Meter Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                      <div 
                        className="h-full bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#A855F7] rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Tech Stack Summary Footer Pill */}
        <div className="mt-12 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center max-w-2xl mx-auto flex items-center justify-center gap-2 text-xs text-[#64748B]">
          <Sparkles className="w-4 h-4 text-[#F97316] flex-shrink-0" />
          <span>Equipped with modern development tools including <strong className="text-[#0F172A]">VS Code, Figma, Git, GitHub, Vite, and Vercel Deployment</strong>.</span>
        </div>

      </div>
    </section>
  );
};
