import React from 'react';

const ExperienceSection = () => {
  const sections = [
    { title: "About me", text: "I love hanging with friends, hiking,movies, fitness, and web dev in my spare time. Right now, my passion project is centered around extending an all-in-one fitness app." },
    { title: "Work experience", text: "I'm a software engineer with a passion for building stuff that solves problems. I am currently interning for Invent working with TypeScript, React, styled components and their micro frontend system building software for Wealth-management clients." },
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
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-2xl text-blue-400 font-semibold mb-4">{section.title}</h3>
            <p className="text-2xl border rounded shadow-lg max-w-sm mx-auto p-4">{section.text}</p>
          </div>
        ))}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
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