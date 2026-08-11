import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import { fullResumeData } from './src/data/portfolioData.js';

const serverDirname = typeof __dirname !== 'undefined' ? __dirname : process.cwd();

const app = express();
const PORT = 3000;

app.use(express.json());

// API route for AI Career Assistant about Alhussein
app.post('/api/ai-assistant', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message string is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Fallback response if GEMINI_API_KEY is missing or fails
    if (!apiKey) {
      const lower = message.toLowerCase();
      let reply = `Hello! I am Alhussein Salah Shaban's portfolio assistant. `;
      if (lower.includes('contact') || lower.includes('email') || lower.includes('phone')) {
        reply += `You can reach Alhussein at email ${fullResumeData.personalInfo.email} or call him at ${fullResumeData.personalInfo.phone1} / ${fullResumeData.personalInfo.phone2}.`;
      } else if (lower.includes('project') || lower.includes('work') || lower.includes('react')) {
        reply += `Alhussein has built multiple React web apps including Al-Yaqtin (al-yaqtin.vercel.app), Jurista Legal (jurista-wheat.vercel.app), Vape Master E-commerce (vape-master1.vercel.app), and Big Data Analytics (big-data-orpin.vercel.app).`;
      } else if (lower.includes('certif') || lower.includes('diploma') || lower.includes('instant')) {
        reply += `Alhussein holds a 100-Hour Front-End Diploma and a 1-Month Practical Front-End Developer Training certificate from Instant Software Solutions.`;
      } else if (lower.includes('study') || lower.includes('university') || lower.includes('minya')) {
        reply += `Alhussein studies Computer Science & Software Engineering at the Faculty of Computers and Information, Minya University.`;
      } else {
        reply += `Alhussein is a Front-End Developer proficient in React, TypeScript, JavaScript (ES6+), Tailwind CSS, Bootstrap, RESTful APIs, and Git. Feel free to explore his portfolio sections or download his resume!`;
      }
      return res.json({ reply });
    }

    const ai = new GoogleGenAI({ apiKey });
    const systemInstruction = `You are the personal AI Assistant for Alhussein Salah Shaban's Portfolio.
Alhussein's Profile:
- Name: Alhussein Salah Shaban
- Role: Software Engineer & Front-End Developer
- Education: Faculty of Computers and Information, Minya University (Computer Science & Software Engineering)
- Location: El Minya, Egypt
- Contact: Email alhusseinsalah66@gmail.com, Phone 01211980194 / 01146457871
- Certifications:
  1) Front-End DIPLOMA (100 Hours) from Instant Software Solutions (Issued August 1, 2024)
  2) Front-End Developer Training Completion (1 Month) from Instant Software Solutions (Issued September 2, 2024)
- Live React Projects:
  1) Al-Yaqtin Platform (https://al-yaqtin.vercel.app/)
  2) Jurista Legal Platform (https://jurista-wheat.vercel.app/)
  3) Vape Master E-Commerce Store (https://vape-master1.vercel.app/)
  4) Big Data Educational Analytics (https://big-data-orpin.vercel.app/)
  5) Jorista Seven Web App (https://jorista-seven.vercel.app/)
  6) Jurestahu Management Portal (https://jurestahu.vercel.app/)
- Key Skills: React.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Bootstrap, jQuery, RESTful APIs, GraphQL, HTML5, CSS3, Git, GitHub, VS Code, Figma.
- English Proficiency: B2 (Upper-Intermediate), approaching C1. Arabic Native.

Be helpful, professional, friendly, and concise. Highlight Alhussein's technical strengths, problem-solving mindset, and project links when relevant.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    const reply = response.text || 'Thank you for your question! Alhussein is open for Front-End & Software Engineering opportunities.';
    return res.json({ reply });
  } catch (err: any) {
    console.error('AI Assistant Error:', err);
    return res.json({
      reply: `Alhussein Salah Shaban is a Front-End Developer specializing in React, TypeScript, and modern web engineering. You can email him directly at ${fullResumeData.personalInfo.email}.`
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
