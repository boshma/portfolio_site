import React from "react";
import ChristmasLights from "./ChristmasLights";

const ShowcaseSection = () => {
  // Showcase items data
  const showcaseItems = [
    {
      title: "Gym Progress App, track macros and sets *mobile friendly*",
      description:
        "(TypeScript, Next 14, React, PostgreSQL, Drizzle, Shadcn, Tailwind.css, Clerk)",
      link: "https://gpa-eosin.vercel.app/",
    },
    {
      title: "Meal/Exercise Logger Mobile",
      description: "(Kotlin, BCrypt, Room)",
      link: "https://github.com/boshma/FitnessAppKotlin",
    },
    {
      title: "Discord Clone",
      description: "(Django, Python, JavaScript, CSS, sqlite3)",
      link: "https://github.com/boshma/FitnessCommunity",
    },
    {
      title: "Checkers!",
      description: "(Kotlin, Room)",
      link: "https://github.com/boshma/Checkers-Kotlin-",
    },
    {
      title: "APOD - astronomy pic of the day",
      description: "(Kotlin, Glide, APOD API)",
      link: "https://github.com/boshma/APOD-kotlin-",
    },
    {
      title: "Microsoft Cloud Cert",
      description: "Microsoft Azure Fundamentals AZ-900 (link to results)",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/ShmatBogdanValeriyevich-1496/3DFC01CA70D7A3D1?sharingId=EBCE04780037F3DD",
    },
  ];

  return (
    <>
      {/* Title */}
      <h2 className="mb-8 text-center text-4xl font-bold italic tracking-widest text-white">
        Showcase
      </h2>

      {/* Cards Container */}
      <div id="showcase" className="container mx-auto flex flex-wrap justify-center gap-8 py-8 text-white">
        {showcaseItems.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-md rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Card Title */}
            <h3 className="text-2xl font-bold mb-4 italic tracking-wider">
              <a
                target="_blank"
                href={item.link}
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {item.title}
              </a>
            </h3>
            {/* Card Description */}
            <p className="text-sm md:text-lg font-light">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowcaseSection;