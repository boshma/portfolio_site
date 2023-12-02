// src/components/ShowcaseSection.tsx
import React from 'react';
import ChristmasLights from './ChristmasLights';

const ShowcaseSection = () => {
  return (

    <>
      <h2 className="mb-8 text-center text-4xl font-bold italic tracking-widest text-blue-600 icon-glow-planetscale ">Showcase</h2>

    <div id="showcase" className="container mx-auto text-center py-8">
      <h2 className="text-3xl md:text-6xl font-bold text-blue-600 mb-4 italic tracking-widest icon-glow-planetscale font-pacifico">
        <a target="_blank" href="https://www.nutrifit.dev/" rel="noopener noreferrer">Meal/Excercise Logger Web-App</a>
      </h2>
      <h2 className="text-2xl md:text-4xl font-bold text-blue-400 mb-4 italic tracking-widest">
        (TypeScript, Next.js, React, Prisma, PlanetScale, Trpc, Shadcn, Tailwind.css, Clerk)
      </h2>
      <h2 className="text-3xl md:text-6xl font-bold text-blue-600 mb-4 italic tracking-widest icon-glow-planetscale font-pacifico">
        <a target="_blank" href="https://github.com/boshma/FitnessAppKotlin" rel="noopener noreferrer">Meal/Excercise Logger Mobile</a>
      </h2>
      <h2 className="text-2xl md:text-4xl font-bold text-blue-400 mb-4 italic tracking-widest">
        (Kotlin, BCrypt, Room)
      </h2>
      <h2 className="text-3xl md:text-6xl font-bold text-blue-600 mb-4 italic tracking-widest icon-glow-planetscale font-pacifico">
        <a target="_blank" href="https://github.com/boshma/FitnessCommunity" rel="noopener noreferrer">Discord Clone</a>
      </h2>
      <h2 className="text-2xl md:text-4xl font-bold text-blue-400 mb-4 italic tracking-widest">
        (Django, Python, JavaScript, CSS, sqlite3)
      </h2>

      <h2 className="text-3xl md:text-6xl font-bold text-blue-600 mb-4 italic tracking-widest icon-glow-planetscale font-pacifico">
        <a target="_blank" href="https://github.com/boshma/Checkers-Kotlin-" rel="noopener noreferrer">Checkers!</a>
      </h2>
      <h2 className="text-2xl md:text-4xl font-bold text-blue-400 mb-4 italic tracking-widest">
        (Kotlin, Room)
      </h2>

      <h2 className="text-3xl md:text-6xl font-bold text-blue-600 mb-4 italic tracking-widest icon-glow-planetscale font-pacifico">
        <a target="_blank" href="https://github.com/boshma/APOD-kotlin-" rel="noopener noreferrer">APOD - astronomy pic of the day</a>
      </h2>
      <h2 className="text-2xl md:text-4xl font-bold text-blue-400 mb-4 italic tracking-widest">
        (Kotlin, Glide, APOD API)
      </h2>
      

      <h2 className="text-3xl md:text-6xl font-bold text-blue-600 mb-4 italic tracking-widest icon-glow-planetscale font-pacifico">
        <a target="_blank" href="https://github.com/boshma/Ball-Game-" rel="noopener noreferrer">Silly Ball Game</a>
      </h2>
      <h2 className="text-2xl md:text-4xl font-bold text-blue-400 mb-4 italic tracking-widest">
        (Java, JavaFX)
      </h2>

    </div>
    </>
  );
};

export default ShowcaseSection;

