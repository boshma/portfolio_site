//src/components/TechSection.tsx
import { Icon } from '@iconify/react';
import React from 'react';

const TechSection = () => {
  const techItems = [
    { icon: "logos:react", name: "React" },
    { icon: "vscode-icons:file-type-light-prisma", name: "Prisma" },
    { icon: "logos:trpc", name: "tRPC" },
    { icon: "devicon:tailwindcss", name: "Tailwind CSS" },
    { icon: "logos:planetscale", name: "PlanetScale" },
    { icon: "logos:nextjs-icon", name: "Next.js" },
    { icon: "logos:typescript-icon", name: "TypeScript" },
    { icon: "skill-icons:styledcomponents", name: "Styled Components" },
  ];

  return (
    <div id="tech" className="flex flex-wrap mx-52 p-8">
      {techItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center w-1/4 p-4">
          <Icon icon={item.icon} className="w-20 h-20" /> 
          <p className="mt-2">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechSection;