import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Globe, 
  Smartphone, 
  Monitor, 
  RefreshCw,
  Tag,
  CheckCircle2
} from 'lucide-react';
import { Project } from '../types';

interface ProjectPreviewModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({ project, onClose }) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  if (!project) return null;

  const refreshIframe = () => {
    setIsLoading(true);
    setIframeKey(prev => prev + 1);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-6xl w-full h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto text-[#0F172A]">
        
        {/* Top Header Controls Bar */}
        <div className="p-4 bg-[#FAFAFC] border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            
            <div className="ml-2">
              <h3 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                <span>{project.title}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-50 border border-indigo-200 text-[#4F46E5] font-semibold">
                  {project.category}
                </span>
              </h3>
              <p className="text-[11px] text-[#64748B] truncate max-w-xs">{project.liveUrl}</p>
            </div>
          </div>

          {/* Viewport Mode Toggles & Refresh */}
          <div className="flex items-center gap-2">
            <div className="bg-white p-1 rounded-xl border border-slate-200 flex items-center gap-1 shadow-sm">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
                  deviceMode === 'desktop' ? 'bg-[#4F46E5] text-white' : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
                title="Desktop View"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop</span>
              </button>

              <button
                onClick={() => setDeviceMode('mobile')}
                className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
                  deviceMode === 'mobile' ? 'bg-[#4F46E5] text-white' : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
                title="Mobile View"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>

            <button
              onClick={refreshIframe}
              className="p-2 rounded-xl bg-slate-100 text-[#0F172A] hover:bg-slate-200 transition-colors border border-slate-200"
              title="Refresh Preview"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-xs flex items-center gap-1.5 shadow-md shadow-indigo-200"
            >
              <span>Open Vercel Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 text-[#0F172A] hover:bg-slate-200 transition-colors ml-2 border border-slate-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Live Preview Container */}
        <div className="flex-1 bg-slate-100 relative flex items-center justify-center overflow-hidden p-2">
          
          {isLoading && (
            <div className="absolute inset-0 z-10 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center text-[#0F172A] gap-3">
              <div className="w-8 h-8 border-3 border-[#4F46E5] border-t-transparent rounded-full animate-spin" />
              <p className="text-xs font-semibold">Loading live Vercel applet frame ({project.title})...</p>
            </div>
          )}

          <div
            className={`transition-all duration-300 bg-white shadow-2xl rounded-lg overflow-hidden h-full ${
              deviceMode === 'mobile' 
                ? 'w-[375px] max-h-[720px] border-8 border-slate-800 rounded-3xl' 
                : 'w-full h-full'
            }`}
          >
            <iframe
              key={iframeKey}
              src={project.liveUrl}
              title={project.title}
              className="w-full h-full border-0"
              onLoad={() => setIsLoading(false)}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>

        </div>

        {/* Bottom Details Bar */}
        <div className="p-3 bg-[#FAFAFC] border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-[#64748B]">
          <div className="flex items-center gap-2">
            <span className="text-[#0F172A] font-semibold">{project.title}:</span>
            <span>{project.description}</span>
          </div>
          
          <div className="flex items-center gap-1.5">
            {project.tags.map(t => (
              <span key={t} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] text-[#64748B]">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
