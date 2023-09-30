//src/components/TechSection.tsx
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

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
    <div ref={techSectionRef} id="tech" className="flex flex-wrap p-8 md:mx-52">
      <h2 className="mb-8 w-full text-center text-4xl font-bold italic tracking-widest text-blue-600">
        My fav tech
      </h2>
      {techItems.map((item, index) => (
        <div
          key={index}
          className="flex w-full flex-col items-center p-4 sm:w-1/2 md:w-1/4"
        >
          <div
            className={`perspective-container border-16 flex items-center justify-center rounded-lg border-gray-400 p-8 opacity-0 ${animate
              ? `animate-fadein-spin delay-${(index % techItems.length) * 100
              }`
              : ""
              } ${!isInView ? "animate-fadeout" : ""}`}
            style={{
              animationDelay: `${index * 180}ms`,
              height: "160px",
              width: "160px",
            }} // 4x the original size
          >
            <Icon
              icon={item.icon}
              className={`h-40 w-40 ${item.name === "Tailwind" ? "icon-glow-blue" : item.name === "React" ? "icon-glow-react" : ""
                }`}
            />
            {/* 4x the original size */}
          </div>
          <p className="mt-2 h-[50px] text-center text-xl font-semibold leading-snug text-blue-100">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TechSection;
