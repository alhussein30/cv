import React, { useState } from 'react';
import { 
  ExternalLink, 
  Eye, 
  Search, 
  Briefcase, 
  Sparkles, 
  Globe, 
  CheckCircle2,
  Tag,
  Code2
} from 'lucide-react';
import { Project } from '../types';
import { projectsData } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProjectPreview: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProjectPreview }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'React', 'Legal Tech', 'E-Commerce', 'Educational', 'Full-Stack'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 bg-[#FAFAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-[#4F46E5] text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Featured Works & React Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Live Web Applications & Projects
          </h2>
          <p className="mt-3 text-[#64748B] text-sm sm:text-base">
            Explore live deployed frontend applications built with React, TypeScript, Tailwind CSS, and modern web architecture.
          </p>
        </div>

        {/* Filters & Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#4F46E5] text-white shadow-md shadow-indigo-200 scale-105'
                    : 'bg-white text-[#64748B] hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects or tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 text-[#0F172A] text-xs rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#4F46E5] transition-colors"
            />
          </div>

        </div>

        {/* Projects Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-[#4F46E5]/40 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl group hover:-translate-y-1 overflow-hidden"
            >
              {/* Card Header & Badges */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-[#4F46E5] text-[11px] font-semibold flex items-center gap-1">
                    <Tag className="w-3 h-3 text-[#4F46E5]" />
                    {project.category}
                  </span>
                  
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#F97316] bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
                    Vercel Live
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-[#64748B] mb-3">{project.subtitle}</p>

                <p className="text-[#64748B] text-xs leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-1.5 mb-4 text-[11.5px] text-[#64748B]">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4F46E5] mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-[#FAFAFC] border border-slate-200 text-[#64748B] text-[10px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-4 bg-[#FAFAFC] border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProjectPreview(project)}
                  className="flex-1 py-2 px-3 rounded-xl bg-white hover:bg-slate-100 text-[#0F172A] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-200"
                  title="Preview application inside modal"
                >
                  <Eye className="w-3.5 h-3.5 text-[#4F46E5]" />
                  <span>Preview</span>
                </button>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-indigo-200"
                >
                  <span>Launch Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <Globe className="w-10 h-10 text-[#64748B] mx-auto mb-3" />
            <h3 className="text-[#0F172A] font-bold text-base">No projects match your search</h3>
            <p className="text-[#64748B] text-xs mt-1">Try clearing filters or search query.</p>
          </div>
        )}

      </div>
    </section>
  );
};
