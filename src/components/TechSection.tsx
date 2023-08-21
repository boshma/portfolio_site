//src/components/TechSection.tsx
import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';

const TechSection = () => {
  const [animate, setAnimate] = useState(false);
  const techSectionRef = React.useRef<HTMLDivElement | null>(null);

  const handleAnimationEnd = () => {
    setAnimate(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animate) {
            setAnimate(true);
          } else if (!entry.isIntersecting && animate) {
            setAnimate(false);
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
    { icon: "devicon:tailwindcss", name: "Tailwind CSS" },
    { icon: "logos:planetscale", name: "PlanetScale" },
    { icon: "logos:nextjs-icon", name: "Next.js" },
    { icon: "logos:typescript-icon", name: "TypeScript" },
    { icon: "skill-icons:styledcomponents", name: "Styled Components" },
  ];
  return (
    <div ref={techSectionRef} id="tech" className="flex flex-wrap mx-52 p-8">
      {techItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-1/4 p-4"
        >
          <div
            onAnimationEnd={handleAnimationEnd} // Keep existing event handler
            className={`perspective-container border-4 border-gray-400 rounded-lg p-4 ${
              animate ? `animate-spin delay-${(index % techItems.length) * 100}` : ''
            }`}
            // Add the corresponding delay class based on the index
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Icon icon={item.icon} className="w-20 h-20" />
          </div>
          <p className="mt-2 text-xl font-semibold text-gray-700">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechSection;