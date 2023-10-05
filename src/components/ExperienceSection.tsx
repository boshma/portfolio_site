//src/components/ExperienceSection.tsx
import React from "react";
import { useInView } from 'react-intersection-observer';

const ExperienceSection = () => {
  const sections = [
    {
      title: "About me",
      text: "I love spending time with friends, being outdoors, watching movies, staying healthy, and pursuing my goals. I'm a senior at Washington State University studying Software Engineering, and my dream is to become a Partner/Dist. Engineer at a top tech company. ",
    },
    {
      title: "Work experience",
      text: "Developing innovative and user-friendly software that solves real-world problems and improves people's lives is my passion. During my summer internship at Invent, I was part of a team that utilized micro-frontends to create PWAs for financial clients ",
    },
  ];

  const listItems = [
    "Food: Sushi / Orange Chicken",
    "Drink: Coffee w/ Almond Milk",
    "Movie: Dodgeball / LOTR",
    "TV Show: The Office",
    "Game: OSRS",
    "Music: Basically everything",
    "Book: The Inheritance Cycle",
    "Vacation: Cancun",
    "Exercise: Deadlift",
  ];

  const [ref, inView] = useInView({
    triggerOnce: false, // Animations will trigger every time the element enters/leaves the viewport
    threshold: 0.1, // Adjust as needed: 0.1 means 10% of the element is visible
  });

  return (
    <div id="experience" className="container mx-auto py-8 text-center">
      <h2 className="mb-8 text-4xl font-bold italic tracking-widest text-blue-600">
        Experience
      </h2>
      <div className="flex flex-wrap justify-center">
        {sections.map((section, index) => (
          <div 
            key={index} 
            ref={ref}
            className={`w-full p-4 sm:w-1/2 lg:w-1/3 ${inView ? 'animate-fadeInExperience' : 'animate-fadeOutExperience'}`}
          >
            <h3 className="mb-4 text-2xl font-semibold text-blue-400 sm:text-2xl md:text-2xl">
              {section.title}
            </h3>
            <p className="mx-auto max-w-sm rounded border p-4 text-lg shadow-lg sm:text-2xl md:text-2xl">
              {section.text}
            </p>
          </div>
        ))}
        <div className="w-full p-4 sm:w-1/2 lg:w-1/3">
          <h3 className="mb-4 text-2xl font-semibold text-blue-400 sm:text-2xl md:text-2xl">
            Fav things
          </h3>
          <div className="mx-auto max-w-sm rounded border p-4 text-lg shadow-lg sm:text-2xl md:text-2xl">
            <ul>
              {listItems.map((item, index) => (
                <li key={index} className={inView ? 'animate-fadeInExperience' : 'animate-fadeOutExperience'}>
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
