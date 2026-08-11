import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectPreviewModal } from './components/ProjectPreviewModal';
import { AiAssistantModal } from './components/AiAssistantModal';
import { Project } from './types';
import { downloadResumeText, openPrintableResume } from './utils/pdfGenerator';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#0F172A] font-sans selection:bg-[#4F46E5] selection:text-white">
      {/* Top Header Navigation */}
      <Header
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
        onDownloadResumeText={downloadResumeText}
        onOpenPrintableResume={openPrintableResume}
      />

      {/* Main Sections */}
      <main>
        <Hero
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
        />
        <About />
        <Skills />
        <Projects
          onSelectProjectPreview={(project) => setPreviewProject(project)}
        />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onDownloadText={downloadResumeText}
        onOpenPrintable={openPrintableResume}
      />

      <ProjectPreviewModal
        project={previewProject}
        onClose={() => setPreviewProject(null)}
      />

      <AiAssistantModal
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />
    </div>
  );
}
