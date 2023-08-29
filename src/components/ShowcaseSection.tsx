// src/components/ShowcaseSection.tsx
import React from 'react';

const ShowcaseSection = () => {
  return (
    <div id="showcase" className="container mx-auto text-center py-8">
      <h2 className="text-3xl md:text-6xl font-bold text-blue-600 mb-4 italic tracking-widest">
        <a target="_blank" href="https://www.nutrifit.dev/">NutriFit</a>
      </h2>
      <h2 className="text-2xl md:text-4xl font-bold text-blue-400 mb-4 italic tracking-widest">
        (TypeScript, Next.js, React, Prisma, PlanetScale, Trpc, Shadcn, Tailwind.css, Clerk)
      </h2>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/2 p-4">
          <p className="text-2xl md:text-4xl text-indigo-700 font-semibold mb-4">All in one Fitness App!</p>
          <ul className="text-xl md:text-2xl text-indigo-500 font-serif">
            <li>Quick add meals</li>
            <li>Save meals to your collection and add from there!</li>
            <li>Add meals from nutritionix database</li>
            <li>Track your workouts!</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <p className="text-2xl md:text-4xl font-semibold mb-4 text-indigo-700">TODO</p>
          <ul className="text-xl md:text-2xl text-indigo-500 font-serif">
            <li>Migrate fully to server components</li>
            <li>Websocket live chat using Pusher API</li>
            <li>Friend/Trainer/Client roles</li>
            <li>Prisma to Drizzle?</li>
          </ul>
        </div>
      </div>
      <p className="text-xl md:text-2xl font-semibold mb-4 text-blue-800">
        <a target="_blank" href="https://github.com/boshma">Check out my other projects in Kotlin, Java and Django</a>
      </p>
    </div>
  );
};

export default ShowcaseSection;