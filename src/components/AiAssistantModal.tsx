import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  Loader2, 
  Code2, 
  Award, 
  GraduationCap, 
  FileText 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResumeModal: () => void;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({
  isOpen,
  onClose,
  onOpenResumeModal
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'ai',
      text: `Hello! I am Alhussein Salah Shaban's AI Career Assistant powered by Gemini. Ask me anything about his React projects, Front-End Diploma certification, Computer Science background at Minya University, or technical skills!`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!queryText) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend })
      });

      const data = await response.json();
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: data.reply || `Alhussein is a Front-End Developer proficient in React, TypeScript, and modern web engineering. Feel free to download his CV or contact him directly.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error('AI assistant chat error:', err);
      const fallbackMsg: Message = {
        id: `ai-err-${Date.now()}`,
        sender: 'ai',
        text: `Alhussein Salah Shaban is a Front-End Developer student at Minya University. You can reach him directly at ${personalInfo.email} or call ${personalInfo.phone1}.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const samplePrompts = [
    "What React projects has Alhussein built?",
    "Tell me about his certifications",
    "What is his English proficiency?",
    "What university does he attend?"
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full h-[600px] max-h-[85vh] flex flex-col shadow-2xl overflow-hidden my-auto text-[#0F172A]">
        
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-indigo-50 via-white to-purple-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0F172A] flex items-center gap-1.5">
                <span>Ask AI About Alhussein</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-50 border border-indigo-200 text-[#4F46E5] font-semibold">
                  Gemini AI
                </span>
              </h3>
              <p className="text-[11px] text-[#64748B]">Software Engineer & Front-End Developer Assistant</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenResumeModal();
              }}
              className="hidden sm:flex px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-[#4F46E5] border border-indigo-200 text-xs font-semibold items-center gap-1.5 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 text-[#0F172A] hover:bg-slate-200 transition-colors border border-slate-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#FAFAFC] text-xs sm:text-sm">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'ai' && (
                <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-[#4F46E5] flex-shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[82%] rounded-2xl p-3.5 shadow-sm ${
                  m.sender === 'user'
                    ? 'bg-[#4F46E5] text-white rounded-br-none shadow-indigo-100'
                    : 'bg-white border border-slate-200 text-[#0F172A] rounded-bl-none'
                }`}
              >
                <p className="whitespace-pre-wrap leading-relaxed">{m.text}</p>
                <div
                  className={`text-[10px] mt-1.5 ${
                    m.sender === 'user' ? 'text-indigo-100 text-right' : 'text-[#64748B]'
                  }`}
                >
                  {m.time}
                </div>
              </div>

              {m.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-[#4F46E5] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 justify-start">
              <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-[#4F46E5] flex-shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-slate-200 text-[#64748B] p-3 rounded-2xl rounded-bl-none flex items-center gap-2 text-xs">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#4F46E5]" />
                <span>Thinking & analyzing profile data...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompts */}
        <div className="px-4 py-2 bg-[#FAFAFC] border-t border-slate-200 overflow-x-auto flex items-center gap-2 scrollbar-none">
          <span className="text-[10px] uppercase font-bold text-[#64748B] whitespace-nowrap">Suggested:</span>
          {samplePrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => handleSend(prompt)}
              className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[#64748B] hover:text-[#0F172A] hover:border-[#4F46E5] text-[11px] font-medium whitespace-nowrap transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask anything about Alhussein's skills, apps, or background..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-[#FAFAFC] border border-slate-200 text-[#0F172A] text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#4F46E5] transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="px-4 py-2.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] disabled:opacity-50 text-white font-semibold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-indigo-200"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Send</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
