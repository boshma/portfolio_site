import React from 'react';

const ExperienceSection = () => {
  const sections = [
    { title: "About me", text: "I love hanging with friends, hiking,movies, fitness, and building personal projects. I am currently a senior at Washington State University pursuing a degree in Software Engineering. My non-technical goals include running a marathon and placing in powerlifting competitions. " },
    { title: "Work experience", text: "I am passionate about developing innovative and user-friendly software that can solve real-world problems and improve people's lives. This past summer, I interned for Invent where I was part of a team that used micro-frontends to create PWA's for their financial clients looking to modernize their orgs. " },
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