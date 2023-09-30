import React from 'react';

const ExperienceSection = () => {
  const sections = [
    { title: "About me", text: "I love spending time with friends, being outdoors, watching movies, staying healthy, and pursuing my goals. I'm a senior at Washington State University studying Software Engineering, and my dream is to become a Partner/Dist. Engineer at a top tech company. " },
    { title: "Work experience", text: "Developing innovative and user-friendly software that solves real-world problems and improves people's lives is my passion. During my summer internship at Invent, I was part of a team that utilized micro-frontends to create PWAs for financial clients " },
  ];

  const listItems = [
    "Food: Sushi / Orange Chicken",
    "Drink: Coffee w/ Almond Milk",
    "Movie: Dodgeball / LOTR",
    "TV Show: The Office" ,
    "Game: OSRS",
    "Music: Basically everything",
    "Book: The Inheritance Cycle",
    "Vacation: Cancun",
    "Exercise: Deadlift"

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