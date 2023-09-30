// src/components/ShowcaseSection.tsx
import React from 'react';
import Image from 'next/image';

const ShowcaseSection = () => {
  return (
    <div id="showcase" className="container mx-auto text-center py-8">
      <h2 className="text-3xl md:text-6xl font-bold text-blue-600 mb-4 italic tracking-widest">
        <a target="_blank" href="https://www.nutrifit.dev/" rel="noopener noreferrer">NutriFit</a>
      </h2>
      <h2 className="text-2xl md:text-4xl font-bold text-blue-400 mb-4 italic tracking-widest">
        (TypeScript, Next.js, React, Prisma, PlanetScale, Trpc, Shadcn, Tailwind.css, Clerk)
      </h2>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/2 p-4">
          <p className="text-2xl md:text-4xl text-indigo-700 font-semibold mb-4">All in one Fitness App!</p>
          <ul className="text-xl md:text-2xl text-indigo-500 font-serif">
            <li>Quick add meals
              <div className="relative w-full h-[200px] md:h-[400px]">
                <Image src="/quickadd.jpg" alt="Quick add" layout="fill" objectFit="contain" />
              </div>
            </li>
            <li>Save meals to your collection and add from there!
              <div className="relative w-full h-[200px] md:h-[400px]">
                <Image src="/addfromcoll.jpg" alt="Add from Collection" layout="fill" objectFit="contain" />
              </div>
            </li>
            <li>Add meals from nutritionix database
              <div className="relative w-full h-[200px] md:h-[400px]">
                <Image src="/nutritionix.jpg" alt="Add from Nutritionix" layout="fill" objectFit="contain" />
              </div>
            </li>
            <li>Track your workouts and meals!
              <div className="relative w-full h-[200px] md:h-[400px]">
                <Image src="/meallog.jpg" alt="Meal Log" layout="fill" objectFit="contain" />
              </div>
            </li>
          </ul>
          <p className="text-xl md:text-2xl font-semibold mb-4 text-blue-800">
            <a target="_blank" href="https://github.com/boshma" rel="noopener noreferrer">Check out my other projects in Kotlin, Java and Django</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;

