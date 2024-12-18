import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

const getTechClasses = (name: string) => {
  const techToClassesMap: Record<string, { icon: string }> = {
    Tailwind: { icon: "icon-glow-blue" },
    React: { icon: "icon-glow-react" },
    "Spring Boot": { icon: "logos:spring-icon" }, 
    PostHog: { icon: "icon-glow-posthog" },
    DrizzleORM: { icon: "icon-glow-drizzleorm" },
    "Next.js": { icon: "icon-glow-nextjs" },
    TypeScript: { icon: "icon-glow-typescript" },
    Upstash: { icon: "icon-glow-upstash" },
  };

  return techToClassesMap[name] ?? { icon: "" };
};

interface TechSectionProps {
  className?: string;
}

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
        threshold: 0.1,
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
    { icon: "logos:upstash-icon", name: "Upstash" },
    { icon: "/drizzleORMicon.png", name: "DrizzleORM" },
    { icon: "devicon:tailwindcss", name: "Tailwind" },
    { icon: "logos:nextjs-icon", name: "Next.js" },
    { icon: "logos:spring-icon", name: "Spring Boot" }, 
    { icon: "logos:typescript-icon", name: "TypeScript" },
    { icon: "logos:posthog", name: "PostHog" },
  ];

  return (
    <div
      ref={techSectionRef}
      id="tech"
      className="flex flex-wrap p-8 md:mx-52"
    >
      <h2 className="mb-8 w-full text-center text-4xl font-bold italic tracking-widest text-white">
        My fav tech
      </h2>
      {techItems.map((item, index) => {
        const { icon: iconClass } = getTechClasses(item.name);
        return (
          <div
            key={index}
            className="flex w-1/4 flex-col items-center p-4 sm:w-1/2 lg:w-1/4"
          >
            <div
              className={`perspective-container border-16 flex h-[80px] w-[80px] items-center justify-center rounded-lg border-gray-400 p-4 opacity-0 lg:h-[160px] lg:w-[160px] lg:p-8 ${
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
              {item.name === "DrizzleORM" ? (
                <img
                  src={item.icon}
                  alt={item.name}
                  // className={`h-20 w-auto lg:h-34 lg:w-auto drizzle-icon`}
                />
              ) : (
                <Icon
                  icon={item.icon}
                  className={`h-20 w-20 lg:h-40 lg:w-40 ${iconClass}`}
                />
              )}
            </div>
            <p className="mt-2 h-[25px] text-center text-xs font-semibold leading-snug text-white sm:text-lg lg:h-[50px] lg:text-xl">
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default TechSection;