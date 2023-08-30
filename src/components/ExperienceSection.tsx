import React from 'react';

const ExperienceSection = () => {
  const sections = [
    { title: "About me", text: "I love hanging with friends, hiking,movies, fitness, and web dev in my spare time. Right now, my passion project is centered around extending an all-in-one fitness app." },
    { title: "Work experience", text: "I am passionate about developing innovative and user-friendly software that can solve real-world problems and improve people's lives.I've interned for Invent where I was part of a team that used micro-frontends to create modular and scalable web applications that met the needs and expectations of Invent's customers.  I am grateful to have learned from my mentors and peers at Invent, and to have contributed to the company's mission and vision." },
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