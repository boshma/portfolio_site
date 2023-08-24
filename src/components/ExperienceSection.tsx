// src/components/ExperienceSection.tsx
import React from 'react';

const ExperienceSection = () => {
  const paragraphs = [
    "I love hiking, movies, and hanging with friends. I try to combine these things as much as possible. Right now, my passion project is centered around a fitness app and soon, online training.",
    "I'm a software engineer with a passion for building stuff that solves problems. I am currently interning for Invent.us working with TypeScript, React, StyledComponents and their microfrontend system building software for Wealth-management clients.",
  ];

  const listItems = [
    "Food: Sushi",
    "Drink: Tea/Coffee",
    "Movie: Dodgeball",
    "TV Show: Southpark",
    "Game: OSRS",
    "Music: Basically everything",
    "Book: The Inheritance Cycle"
  ];


  return (
    <div id="experience" className="container mx-auto text-center py-8">
      <h2 className="text-4xl font-bold text-blue-600 mb-8 italic tracking-widest">Experience</h2>
      <div className="flex flex-wrap justify-center">
        {paragraphs.map((text, index) => (
          <div key={index} className="w-1/3 p-4">
            <p className="border rounded shadow-lg max-w-sm mx-auto p-4">{text}</p>
          </div>
        ))}
        <div className="w-1/3 p-4">
          <div className="border rounded shadow-lg max-w-sm mx-auto p-4">
            <ul>
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
