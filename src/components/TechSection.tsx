//src/components/TechSection.tsx
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

const getTechClasses = (name: string) => {
  const techToClassesMap: Record<string, {icon: string, text: string}> = {
    Tailwind: { icon: "icon-glow-blue", text: "text-color-blue" },
    React: { icon: "icon-glow-react", text: "text-color-react" },
    Prisma: { icon: "icon-glow-prisma", text: "text-color-prisma" },
    tRPC: { icon: "icon-glow-trpc", text: "text-color-trpc" },
    PlanetScale: { icon: "icon-glow-planetscale", text: "text-color-planetscale" },
    "Next.js": { icon: "icon-glow-nextjs", text: "text-color-nextjs" },
    TypeScript: { icon: "icon-glow-typescript", text: "text-color-typescript" },
    "Styled-Components": { icon: "icon-glow-styledcomponents", text: "text-color-styledcomponents" },
  };

  return techToClassesMap[name] ?? { icon: "", text: "" };
};




type TechSectionProps = {
  className?: string; // Make className optional
};

const TechSection: React.FC<TechSectionProps> = ({ className = "" }) => {
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
    { icon: "skill-icons:styledcomponents", name: "Styled-Components" },
    { icon: "logos:planetscale", name: "PlanetScale" },
    { icon: "devicon:tailwindcss", name: "Tailwind" },
    { icon: "logos:nextjs-icon", name: "Next.js" },
    { icon: "vscode-icons:file-type-light-prisma", name: "Prisma" },
    { icon: "logos:typescript-icon", name: "TypeScript" },
    { icon: "logos:trpc", name: "tRPC" },
  ];
  return (
    <div ref={techSectionRef} id="tech" className="flex flex-wrap p-8 md:mx-52">
      <h2 className="mb-8 w-full text-center text-4xl font-bold italic tracking-widest text-blue-600">
        My fav tech
      </h2>
      {techItems.map((item, index) => {
        const { icon: iconClass, text: textClass } = getTechClasses(item.name);
        return (
          <div
            key={index}
            className="flex w-1/4 flex-col items-center p-4 sm:w-1/2 lg:w-1/4"
          >
            <div
              className={`perspective-container border-16 flex items-center justify-center rounded-lg border-gray-400 p-4 lg:p-8 opacity-0 w-[80px] h-[80px] lg:w-[160px] lg:h-[160px] ${
                animate
                  ? `animate-fadein-spin delay-${
                      (index % techItems.length) * 100
                    }`
                  : ""
              } ${!isInView ? "animate-fadeout" : ""}`}
              style={{
                animationDelay: `${index * 180}ms`,
              }}
            >
              <Icon
                icon={item.icon}
                className={`h-20 w-20 lg:h-40 lg:w-40 ${iconClass}`}
              />
            </div>
            <p className={`mt-2 h-[25px] lg:h-[50px] text-center text-xs sm:text-lg lg:text-xl font-semibold leading-snug ${textClass}`}>
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default TechSection;
