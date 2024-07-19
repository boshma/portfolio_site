//src/components/ExperienceSection.tsx
import React from "react";
import { useInView } from 'react-intersection-observer';

const ExperienceSection = () => {
  const sections = [
    {
      title: "About me",
      text: "I graduated from Washington State University with a degree in Software Engineering. I have a passion for full stack development and have experience with TypeScript, React, and Node.js.",
    },
    {
      title: "Work experience",
      text: "During my 3 month summer internship at Invent, I was part of a team of engineers and product managers that utilized micro-frontends to help work on UI's for PWAs used by financial clients. My stack consisted of TypeScript, React, Styled-Components, Effector, and RTL/Jest.",
    },
  ];

  const listItems = [
    "Food: Ice Cream",
    "Show: Vikings",
    "Book: Harry Potter series",
    "Pet: cat", 
    "Movie: Talladega Nights",
    "Language: JavaScript",
    "Artist: Armin Van Buuren",
  ];

  const [ref, inView] = useInView({
    triggerOnce: false, // Animations will trigger every time the element enters/leaves the viewport
    threshold: 0.1, // Adjust as needed: 0.1 means 10% of the element is visible
  });

  return (
    <div id="experience" className="container mx-auto py-8 text-center font-pacifico">
      <h2 className="mb-8 text-4xl font-bold italic tracking-widest text-blue-600 icon-glow-planetscale">
        Experience
      </h2>
      <div className="flex flex-wrap justify-center">
        {sections.map((section, index) => (
          <div 
            key={index} 
            ref={ref}
            className={`w-full p-4 sm:w-1/2 lg:w-1/3 ${inView ? 'animate-fadeInExperience' : 'animate-fadeOutExperience'}`}
          >
            <h3 className="mb-4 text-2xl font-semibold text-blue-400 sm:text-2xl md:text-2xl icon-glow-styledcomponents">
              {section.title}
            </h3>
            <p className="mx-auto max-w-sm rounded border p-4 text-lg shadow-lg sm:text-2xl md:text-2xl icon-glow-trpc text-color-react">
              {section.text}
            </p>
          </div>
        ))}
        <div className="w-full p-4 sm:w-1/2 lg:w-1/3">
          <h3 className="mb-4 text-2xl font-semibold text-blue-400 sm:text-2xl md:text-2xl icon-glow-styledcomponents">
            Fav things
          </h3>
          <div className="mx-auto max-w-sm rounded border p-4 text-lg shadow-lg sm:text-2xl md:text-2xl">
            <ul>
              {listItems.map((item, index) => (
                <li key={index} className={inView ? 'animate-fadeInExperience icon-glow-trpc text-color-react' : 'animate-fadeOutExperience'}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
