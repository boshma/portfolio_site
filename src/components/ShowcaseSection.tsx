// src/components/ShowcaseSection.tsx
import React from 'react';
import Image from 'next/image';

const ShowcaseSection = () => {
  return (
    <div id="showcase" className="container mx-auto text-center py-8">
      <h2 className="text-3xl md:text-6xl font-bold text-blue-600 mb-4 italic tracking-widest icon-glow-planetscale">
        <a target="_blank" href="https://www.nutrifit.dev/" rel="noopener noreferrer">NutriFit</a>
      </h2>
      <h2 className="text-2xl md:text-4xl font-bold text-blue-400 mb-4 italic tracking-widest">
        (TypeScript, Next.js, React, Prisma, PlanetScale, Trpc, Shadcn, Tailwind.css, Clerk)
      </h2>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/2 p-4">
          <p className="text-2xl md:text-4xl text-teal-100 font-semibold mb-4 ">Fitness App!</p>
          <ul className="text-xl md:text-2xl text-green-100 font-serif icon-glow-react">
          <li> SSO auth/protected routes with Clerk
              <div className="relative w-full h-[200px] md:h-[400px]">
                <Image src="/auth.jpg" alt="auth" layout="fill" objectFit="contain" />
              </div>
            </li>
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
          <p className="text-xl md:text-2xl font-semibold mb-4 text-blue-100">
             I'm also looking for online clients looking to drop bodyfat or build muscle, send me an email at bogdan.shmat@wsu.edu if you're interested!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;

