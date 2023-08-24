import React from 'react';

const ExperienceSection = () => {
  const sections = [
    { title: "About me", text: "I love hiking, movies, and hanging with friends. I try to combine these things as much as possible. Right now, my passion project is centered around a fitness app and soon, online training." },
    { title: "Work experience", text: "I'm a software engineer with a passion for building stuff that solves problems. I am currently interning for Invent.us working with TypeScript, React, StyledComponents and their microfrontend system building software for Wealth-management clients." },
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
        {sections.map((section, index) => (
          <div key={index} className="w-1/3 p-4">
            <h3 className="text-2xl text-blue-400 font-semibold mb-4">{section.title}</h3>
            <p className="text-2xl border rounded shadow-lg max-w-sm mx-auto p-4">{section.text}</p>
          </div>
        ))}
        <div className="w-1/3 p-4">
          <h3 className="text-2xl text-blue-400 font-semibold mb-4">Fav things</h3>
          <div className="text-2xl border rounded shadow-lg max-w-sm mx-auto p-4">
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
