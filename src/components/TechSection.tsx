//src/components/TechSection.tsx
import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';

const TechSection = () => {
  const [animate, setAnimate] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const techSectionRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animate) {
            setAnimate(true);
            setIsInView(true);
          } else if (!entry.isIntersecting) {
            setIsInView(false);
          }
        });
      },
      {
        root: null,
        threshold: 0.1, // Adjust the threshold as needed
      }
    );

    if (techSectionRef.current) {
      observer.observe(techSectionRef.current);
    }

    return () => {
      if (techSectionRef.current) {
        observer.unobserve(techSectionRef.current);
      }
    };
  }, []);
  const techItems = [
    { icon: "logos:react", name: "React" },
    { icon: "vscode-icons:file-type-light-prisma", name: "Prisma" },
    { icon: "logos:trpc", name: "tRPC" },
    { icon: "devicon:tailwindcss", name: "Tailwind" },
    { icon: "logos:planetscale", name: "PlanetScale" },
    { icon: "logos:nextjs-icon", name: "Next.js" },
    { icon: "logos:typescript-icon", name: "TypeScript" },
    { icon: "skill-icons:styledcomponents", name: "Styled-Components" },
  ];
  return (
    <div ref={techSectionRef} id="tech" className="flex flex-wrap md:mx-52 p-8">
      <h2 className="w-full text-4xl font-bold text-center text-blue-600 mb-8 italic tracking-widest">My fav tech</h2>
      {techItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 p-4">
          <div
            className={`opacity-0 perspective-container border-16 border-gray-400 rounded-lg p-8 flex justify-center items-center ${animate ? `animate-fadein-spin delay-${(index % techItems.length) * 100}` : ''} ${!isInView ? 'animate-fadeout' : ''
              }`}
            style={{ animationDelay: `${index * 180}ms`, height: '160px', width: '160px' }} // 4x the original size
          >
            <Icon icon={item.icon} className="w-40 h-40" /> {/* 4x the original size */}
          </div>
          <p className="mt-2 text-xl font-semibold text-blue-100 text-center leading-snug h-[50px]">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechSection;