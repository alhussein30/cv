import { jsPDF } from 'jspdf';
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
 * Generates and directly downloads a professional PDF file using jsPDF vector engine.
 * Guarantees zero blank pages, high resolution, and clean layout on all devices.
 */
export async function downloadResumePdf() {
  const data = fullResumeData;
  const p = data.personalInfo;

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
  const pageHeight = doc.internal.pageSize.getHeight(); // 297mm
  const margin = 12; // 12mm margins
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // Helper function to handle page breaks
  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
      return true;
    }
    return false;
  };

  // Helper function to draw crisp section headers
  const drawSectionHeader = (title: string) => {
    checkPageBreak(12);
    
    // Background strip
    doc.setFillColor(241, 245, 249); // slate-100
    doc.rect(margin, y, contentWidth, 6.5, 'F');
    
    // Left accent bar
    doc.setFillColor(79, 70, 229); // indigo-600 #4F46E5
    doc.rect(margin, y, 2.5, 6.5, 'F');

    // Title text
    doc.setTextColor(15, 23, 42); // slate-900
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.text(title.toUpperCase(), margin + 5, y + 4.5);

    y += 9;
  };

  // --- HEADER BANNER ---
  doc.setFillColor(15, 23, 42); // dark slate #0F172A
  doc.rect(margin, y, contentWidth, 26, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text(p.name.toUpperCase(), margin + 6, y + 8);

  doc.setTextColor(168, 85, 247); // purple-500 #A855F7
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text(p.title, margin + 6, y + 14);

  doc.setTextColor(203, 213, 225); // slate-300
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  const contactLine1 = `Phone: ${p.phone1} / ${p.phone2}   |   Email: ${p.email}`;
  const contactLine2 = `Location: ${p.address}`;
  doc.text(contactLine1, margin + 6, y + 19);
  doc.text(contactLine2, margin + 6, y + 23);

  y += 30;

  // --- SUMMARY & OBJECTIVE ---
  drawSectionHeader('Professional Summary & Objective');
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85); // slate-700

  const summaryLines = doc.splitTextToSize(data.summary + ' ' + data.objective, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 4 + 4;

  // --- EDUCATION ---
  drawSectionHeader('Education');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text(p.university, margin, y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(79, 70, 229);
  doc.text(`${p.degree} (${p.graduationYear})`, margin, y + 4.5);

  y += 9;

  // --- TECHNICAL SKILLS ---
  drawSectionHeader('Technical Skills & Expertise');

  doc.setFontSize(8.5);
  const skillsList = [
    { label: 'Languages:', val: data.skills.languages.join(', ') },
    { label: 'Frameworks & Libraries:', val: data.skills.frameworks.join(', ') },
    { label: 'APIs & Integration:', val: data.skills.apis.join(', ') },
    { label: 'Design & Responsive:', val: data.skills.design.join(', ') },
    { label: 'Tools & Platforms:', val: data.skills.tools.join(', ') }
  ];

  skillsList.forEach((sk) => {
    checkPageBreak(5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(sk.label, margin, y);
    const labelWidth = doc.getTextWidth(sk.label) + 2;

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.text(sk.val, margin + labelWidth, y);
    y += 4.5;
  });

  y += 2;

  // --- CERTIFICATIONS ---
  drawSectionHeader('Certifications & Practical Training');

  data.certifications.forEach((cert) => {
    checkPageBreak(14);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text(cert.title, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(79, 70, 229);
    doc.text(`${cert.issuer}  |  ${cert.issueDate} (${cert.duration})`, margin, y + 4);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    const certDescLines = doc.splitTextToSize(cert.description, contentWidth);
    doc.text(certDescLines, margin, y + 8);

    y += 9 + certDescLines.length * 3.5;
  });

  // --- FEATURED PROJECTS ---
  drawSectionHeader('Featured Deployed Projects');

  data.projects.forEach((proj) => {
    const projDescLines = doc.splitTextToSize(proj.description, contentWidth);
    const needed = 12 + projDescLines.length * 3.5;
    checkPageBreak(needed);

    // Title & Subtitle
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text(`${proj.title} — ${proj.subtitle}`, margin, y);

    // Live URL
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(37, 99, 235); // blue-600
    doc.text(`Live URL: ${proj.liveUrl}`, margin, y + 4);

    // Description
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);
    doc.text(projDescLines, margin, y + 8);

    // Tags
    const tagPos = y + 8 + projDescLines.length * 3.5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text(`Tech Stack: ${proj.tags.join(' • ')}`, margin, y + tagPos - y);

    y = tagPos + 5;
  });

  // --- ONLINE LINKS & FOOTER ---
  checkPageBreak(12);
  drawSectionHeader('Links & Contacts');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(37, 99, 235);
  doc.text(`LinkedIn: ${p.linkedIn}`, margin, y);
  doc.text(`GitHub: ${p.gitHub}`, margin, y + 4.5);

  // Save the document directly
  doc.save('Alhussein_Salah_Shaban_Resume.pdf');
}

/**
 * Triggers direct PDF download on local computer
 */
export function openPrintableResume() {
  downloadResumePdf();
}


