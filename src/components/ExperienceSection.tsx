import React from "react";
import { useInView } from "react-intersection-observer";

const ExperienceSection = () => {
  const sections = [
    {
      title: "About Me",
      text: "I graduated from Washington State University with a degree in Software Engineering. I have a passion for full stack development and have experience with TypeScript, React, and Node.js.",
    },
    {
      title: "Work Experience",
      text: "During my 3-month summer internship at Invent, I was part of a team of engineers and product managers that utilized micro-frontends to help work on UIs for PWAs used by financial clients. My stack consisted of TypeScript, React, Styled-Components, Effector, and RTL/Jest.",
    },
  ];

  const listItems = [
    "Food: Ice Cream",
    "Show: Vikings",
    "Anime: One Piece", 
    "Book: Harry Potter series",
    "Pet: Cat",
    "Movie: Talladega Nights",
    "FE Language: TypeScript",
    "BE Language: Java",
    "Artist: Armin Van Buuren",
  ];

  const [ref, inView] = useInView({
    triggerOnce: false, // Animations trigger every time the element enters/leaves the viewport
    threshold: 0.1, // Adjust as needed: 0.1 means 10% of the element is visible
  });

  return (
    <div
      id="experience"
      className="container mx-auto py-16 px-4 text-center font-pacifico text-white"
    >
      {/* Section Title */}
      <h2 className="mb-12 text-4xl font-bold italic tracking-widest underline decoration-wavy decoration-blue-500">
        Experience
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Dynamic Sections */}
        {sections.map((section, index) => (
          <div
            key={index}
            ref={ref}
            className={`w-full max-w-md p-6 rounded-lg bg-gray-800 shadow-lg transform transition-all duration-500 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="mb-4 text-2xl font-bold underline decoration-dotted decoration-blue-400">
              {section.title}
            </h3>
            <p className="text-lg font-light leading-relaxed">{section.text}</p>
          </div>
        ))}

        {/* Favorite Things */}
        <div
          className={`w-full max-w-md p-6 rounded-lg bg-gray-800 shadow-lg transform transition-all duration-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="mb-4 text-2xl font-bold underline decoration-dotted decoration-blue-400">
            Favorite Things
          </h3>
          <ul className="list-disc list-inside text-left text-lg font-light leading-relaxed">
            {listItems.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;