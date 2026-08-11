import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Building2,
  ExternalLink,
  Sparkles,
  Loader2,
  RotateCcw,
  AlertCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastSentData, setLastSentData] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
    mailtoUrl: string;
  } | null>(null);

  const buildMailtoUrl = (data: typeof formState) => {
    const bodyText = `Hello Alhussein,\n\n${data.message}\n\n---\nSender Details:\nName: ${data.name}\nEmail: ${data.email}`;
    return `mailto:${personalInfo.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(bodyText)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.subject || !formState.message) {
      return;
    }

    setIsSending(true);

    const mailtoUrl = buildMailtoUrl(formState);

    setTimeout(() => {
      // Trigger user's mail client with prefilled details
      window.location.href = mailtoUrl;

      setLastSentData({
        ...formState,
        mailtoUrl
      });
      setIsSending(false);
      setSubmitted(true);
    }, 800);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-[#FAFAFC] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-[#4F46E5] text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Get In Touch With Alhussein
          </h2>
          <p className="mt-3 text-[#64748B] text-sm sm:text-base">
            Open for Front-End Developer positions, software engineering opportunities, or technical project collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex items-start gap-4 hover:border-[#4F46E5]/40 transition-all">
              <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-[#4F46E5]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0F172A]">Direct Phone Call</h3>
                <p className="text-[#64748B] text-xs mt-0.5">Primary & Secondary Contact Lines</p>
                <div className="mt-2 space-y-1">
                  <a href={`tel:${personalInfo.phone1}`} className="block text-[#4F46E5] font-semibold text-sm hover:underline">
                    {personalInfo.phone1}
                  </a>
                  <a href={`tel:${personalInfo.phone2}`} className="block text-[#0F172A] font-semibold text-xs hover:underline">
                    {personalInfo.phone2}
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex items-start gap-4 hover:border-[#4F46E5]/40 transition-all">
              <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-[#7C3AED]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0F172A]">Email Inbox</h3>
                <p className="text-[#64748B] text-xs mt-0.5">Direct Inquiry & Hiring Opportunities</p>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="mt-2 block text-[#7C3AED] font-semibold text-sm hover:underline break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex items-start gap-4 hover:border-[#4F46E5]/40 transition-all">
              <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-[#4F46E5]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0F172A]">Location & Residence</h3>
                <p className="text-[#64748B] text-xs leading-normal mt-1">
                  {personalInfo.address}
                </p>
                <span className="inline-block mt-2 text-[11px] text-[#4F46E5] font-medium">
                  Faculty of Computers and Information, Minya University
                </span>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex items-center justify-between">
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-indigo-50 border border-indigo-200 text-[#4F46E5] hover:bg-indigo-100 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={personalInfo.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-purple-50 border border-purple-200 text-[#7C3AED] hover:bg-purple-100 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub (alhussein30)</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>

          </div>

          {/* Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl">
              
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">Send a Direct Message</h3>
              <p className="text-[#64748B] text-xs mb-6">
                Fill out the form below to reach out directly to Alhussein Salah Shaban.
              </p>

              {submitted && lastSentData ? (
                <div className="p-6 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-left animate-in fade-in duration-300 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#4F46E5] text-white flex items-center justify-center shadow-md">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-[#0F172A] font-bold text-base">Message Ready & Email App Opened!</h4>
                      <p className="text-[#64748B] text-xs">
                        Your message has been formatted and sent to your default email app targeting <strong>{personalInfo.email}</strong>.
                      </p>
                    </div>
                  </div>

                  {/* Summary of sent email */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-[#64748B] font-medium">To:</span>
                      <span className="text-[#0F172A] font-semibold">{personalInfo.email}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-[#64748B] font-medium">From:</span>
                      <span className="text-[#0F172A] font-semibold">{lastSentData.name} ({lastSentData.email})</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-[#64748B] font-medium">Subject:</span>
                      <span className="text-[#0F172A] font-semibold">{lastSentData.subject}</span>
                    </div>
                    <div>
                      <span className="text-[#64748B] font-medium block mb-1">Message Content:</span>
                      <p className="text-[#0F172A] bg-[#FAFAFC] p-2.5 rounded-lg border border-slate-200 whitespace-pre-wrap">
                        {lastSentData.message}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={lastSentData.mailtoUrl}
                      className="px-4 py-2.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-md shadow-indigo-100"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Re-open Email Application</span>
                    </a>

                    <button
                      onClick={handleResetForm}
                      className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-[#0F172A] text-xs font-semibold flex items-center gap-2 transition-colors"
                    >
                      <RotateCcw className="w-4 h-4 text-[#64748B]" />
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-[#FAFAFC] border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#4F46E5] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-[#FAFAFC] border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#4F46E5] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Front-End Developer Position / Project Inquiry"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-[#FAFAFC] border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#4F46E5] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write your message details here..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-[#FAFAFC] border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#4F46E5] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] disabled:opacity-75 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-200 active:scale-[0.99] cursor-pointer"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Opening Mail Client & Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

