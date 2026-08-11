import html2pdf from 'html2pdf.js';
import { fullResumeData } from '../data/portfolioData';

/**
 * Downloads a clean text-based formatted Resume file (.txt / .doc format)
 */
export function downloadResumeText() {
  const data = fullResumeData;
  const p = data.personalInfo;

  const content = `========================================================================
                       ALHUSSEIN SALAH SHABAN
                     Software Engineer & Front-End Developer
========================================================================
Phone: ${p.phone1} / ${p.phone2}
Email: ${p.email}
Location: ${p.address}
LinkedIn: ${p.linkedIn}
GitHub: ${p.gitHub}
University: ${p.university} (${p.degree})

------------------------------------------------------------------------
OBJECTIVE
------------------------------------------------------------------------
${data.objective}

------------------------------------------------------------------------
PROFESSIONAL SUMMARY
------------------------------------------------------------------------
${data.summary}

------------------------------------------------------------------------
TECHNICAL SKILLS
------------------------------------------------------------------------
• Languages: ${data.skills.languages.join(', ')}
• Frameworks & Libraries: ${data.skills.frameworks.join(', ')}
• Responsive Design: ${data.skills.design.join(', ')}
• Version Control: ${data.skills.versionControl.join(', ')}
• APIs: ${data.skills.apis.join(', ')}
• Tools & Platforms: ${data.skills.tools.join(', ')}

------------------------------------------------------------------------
EDUCATION
------------------------------------------------------------------------
Faculty of Computers and Information - Minya University
Degree: ${p.degree}
Status: ${p.graduationYear}

------------------------------------------------------------------------
CERTIFICATIONS
------------------------------------------------------------------------
1. ${data.certifications[0].title}
   Issuer: ${data.certifications[0].issuer} | Date: ${data.certifications[0].issueDate} | Duration: ${data.certifications[0].duration}
   Details: ${data.certifications[0].description}

2. ${data.certifications[1].title}
   Issuer: ${data.certifications[1].issuer} | Date: ${data.certifications[1].issueDate} | Duration: ${data.certifications[1].duration}
   Details: ${data.certifications[1].description}

------------------------------------------------------------------------
FEATURED PROJECTS & WORKS
------------------------------------------------------------------------
${data.projects.map((proj, i) => `${i + 1}. ${proj.title} (${proj.subtitle})
   Live URL: ${proj.liveUrl}
   Category: ${proj.category} | Tech: ${proj.tags.join(', ')}
   Description: ${proj.description}
`).join('\n')}
------------------------------------------------------------------------
LANGUAGES
------------------------------------------------------------------------
${data.spokenLanguages.map(l => `• ${l.language}: ${l.proficiency}`).join('\n')}

========================================================================
`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Alhussein_Salah_Shaban_Resume.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Generates and directly downloads a professional PDF file to the local computer
 */
export async function downloadResumePdf() {
  const data = fullResumeData;
  const p = data.personalInfo;

  // Create temporary container element for rendering PDF
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.left = '-9999px';
  container.style.top = '-9999px';
  container.style.width = '790px';
  container.style.backgroundColor = '#ffffff';
  container.style.color = '#1e293b';
  container.style.fontFamily = "'Segoe UI', Arial, Helvetica, sans-serif";
  container.style.padding = '30px 36px';
  container.style.boxSizing = 'border-box';

  container.innerHTML = `
    <div style="text-align: center; border-bottom: 2px solid #2563eb; padding-bottom: 10px; margin-bottom: 14px;">
      <h1 style="font-size: 24px; font-weight: 800; color: #0f172a; margin: 0; text-transform: uppercase; letter-spacing: 0.5px;">${p.name}</h1>
      <div style="font-size: 14px; font-weight: 700; color: #2563eb; margin: 3px 0 6px 0;">${p.title}</div>
      <div style="font-size: 11px; color: #475569; display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
        <span>📞 ${p.phone1} / ${p.phone2}</span>
        <span>✉️ ${p.email}</span>
        <span>📍 ${p.address}</span>
        <span>🔗 ${p.linkedIn}</span>
        <span>💻 ${p.gitHub}</span>
      </div>
    </div>

    <div style="margin-bottom: 12px;">
      <div style="font-size: 12.5px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #cbd5e1; padding-bottom: 2px; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.5px;">Objective & Summary</div>
      <p style="font-size: 10.5px; line-height: 1.45; color: #334155; margin: 0 0 3px 0;">${data.objective}</p>
      <p style="font-size: 10.5px; line-height: 1.45; color: #334155; margin: 0;">${data.summary}</p>
    </div>

    <div style="margin-bottom: 12px;">
      <div style="font-size: 12.5px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #cbd5e1; padding-bottom: 2px; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.5px;">Technical Skills</div>
      <table style="width: 100%; border-collapse: collapse; font-size: 10.5px; color: #334155;">
        <tr>
          <td style="width: 50%; vertical-align: top; padding-right: 8px;">
            <div style="margin-bottom: 2px;"><strong>Languages:</strong> ${data.skills.languages.join(', ')}</div>
            <div style="margin-bottom: 2px;"><strong>Frameworks & Libraries:</strong> ${data.skills.frameworks.join(', ')}</div>
            <div style="margin-bottom: 2px;"><strong>APIs & Web Services:</strong> ${data.skills.apis.join(', ')}</div>
          </td>
          <td style="width: 50%; vertical-align: top; padding-left: 8px;">
            <div style="margin-bottom: 2px;"><strong>Tools & Platforms:</strong> ${data.skills.tools.join(', ')}</div>
            <div style="margin-bottom: 2px;"><strong>Responsive Design:</strong> ${data.skills.design.join(', ')}</div>
            <div style="margin-bottom: 2px;"><strong>Version Control:</strong> ${data.skills.versionControl.join(', ')}</div>
          </td>
        </tr>
      </table>
    </div>

    <div style="margin-bottom: 12px;">
      <div style="font-size: 12.5px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #cbd5e1; padding-bottom: 2px; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.5px;">Education</div>
      <div style="font-size: 11px; font-weight: 700; color: #0f172a;">${p.university}</div>
      <div style="font-size: 10.5px; color: #475569;">${p.degree} | Status: ${p.graduationYear}</div>
    </div>

    <div style="margin-bottom: 12px;">
      <div style="font-size: 12.5px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #cbd5e1; padding-bottom: 2px; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.5px;">Certifications & Diplomas</div>
      ${data.certifications.map(c => `
        <div style="margin-bottom: 5px;">
          <div style="font-size: 11px; font-weight: 700; color: #1e293b;">
            ${c.title} — <span style="color: #2563eb; font-weight: 600;">${c.issuer}</span> (${c.issueDate} | ${c.duration})
          </div>
          <div style="font-size: 10px; color: #475569;">${c.description}</div>
        </div>
      `).join('')}
    </div>

    <div style="margin-bottom: 12px;">
      <div style="font-size: 12.5px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #cbd5e1; padding-bottom: 2px; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.5px;">Featured Projects & Live Works</div>
      ${data.projects.map(proj => `
        <div style="margin-bottom: 6px;">
          <div style="font-size: 11px; font-weight: 700; color: #0f172a;">
            ${proj.title} <span style="font-weight: 400; color: #64748b; font-size: 10px;">(${proj.subtitle})</span>
            <span style="font-weight: 400; color: #2563eb; font-size: 10px; margin-left: 6px;">${proj.liveUrl}</span>
          </div>
          <div style="font-size: 10px; color: #334155; margin-top: 1px;">${proj.description}</div>
          <div style="font-size: 9.5px; color: #64748b; margin-top: 1px;"><strong>Tech:</strong> ${proj.tags.join(' • ')}</div>
        </div>
      `).join('')}
    </div>

    <div>
      <div style="font-size: 12.5px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #cbd5e1; padding-bottom: 2px; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.5px;">Languages</div>
      <div style="font-size: 10.5px; color: #334155;">
        ${data.spokenLanguages.map(l => `<strong>${l.language}:</strong> ${l.proficiency}`).join(' &nbsp;|&nbsp; ')}
      </div>
    </div>
  `;

  document.body.appendChild(container);

  const opt = {
    margin: [8, 8, 8, 8],
    filename: 'Alhussein_Salah_Shaban_Resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: false },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  try {
    // @ts-ignore
    const pdf = html2pdf().set(opt).from(container);
    await pdf.save();
  } catch (err) {
    console.error('PDF generation error:', err);
  } finally {
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
  }
}

/**
 * Triggers direct PDF download on local computer
 */
export function openPrintableResume() {
  downloadResumePdf();
}

