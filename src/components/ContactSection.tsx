// src/components/ContactSection.tsx
import React from 'react';
import { Icon } from '@iconify/react';

const ContactSection: React.FC = () => {
  const iconSize = '4rem';

  return (
    <div id="contact" className="container mx-auto text-center py-8">
      <h2 className="text-4xl font-bold text-blue-600 mb-8 italic tracking-widest">Let&apos;s Connect!</h2>
      <div className="flex justify-center">
        <a href="https://github.com/boshma" target="_blank" rel="noopener noreferrer" className="p-4 group">
          <Icon icon="icon-park:github" style={{ fontSize: iconSize }} />
        </a>
        <a href="https://www.linkedin.com/in/bogdan-shmat-b42552222/" target="_blank" rel="noopener noreferrer" className="p-4 group">
          <Icon icon="devicon:linkedin" style={{ fontSize: iconSize }} />
        </a>
        <div className="p-4 group relative">
          <a href="/BogdanShmatResume.docx" target="_blank" rel="noopener noreferrer">
            <Icon icon="fxemoji:scroll" style={{ fontSize: iconSize }} />
          </a>
          <div className="opacity-0 group-hover:opacity-100 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-black text-white text-xs rounded-lg p-2">
            Resume
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

