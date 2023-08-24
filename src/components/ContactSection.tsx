// src/components/ContactSection.tsx
import React from 'react';
import { Icon } from '@iconify/react';

const ContactSection = () => {
  const iconSize = '4rem';

  return (
    <div id="contact" className="container mx-auto text-center py-8">
      <h2 className="text-4xl font-bold text-blue-600 mb-8 italic tracking-widest">Lets Connect!</h2>
      <div className="flex justify-center">
        <a href="https://github.com/boshma" target="_blank" rel="noopener noreferrer" className="p-4">
          <Icon icon="icon-park:github" style={{ fontSize: iconSize }} />
        </a>
        <a href="https://www.linkedin.com/in/bogdan-shmat-b42552222/" target="_blank" rel="noopener noreferrer" className="p-4">
          <Icon icon="devicon:linkedin" style={{ fontSize: iconSize }} />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
