// src/components/NavBar.tsx
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = ({ navBottom }: { navBottom: boolean }) => {
  const navPosition = navBottom ? 'absolute bottom-0' : 'fixed top-0'; // Use absolute positioning at the bottom when navBottom is true
  const bgColor = navBottom ? 'bg-transparent' : 'bg-gray-900';

  return (
    <nav className={`${navPosition} left-0 w-full ${bgColor} text-white z-50 transition-all duration-300 ease-in-out`}>
      <div className="container mx-auto">
        <ul className="flex justify-around py-4 space-x-2"> 
          <li className="cursor-pointer"><ScrollLink to="tech" smooth={true}>Tech</ScrollLink></li>
          <li className="cursor-pointer"><ScrollLink to="experience" smooth={true}>Experience</ScrollLink></li>
          <li className="cursor-pointer"><ScrollLink to="showcase" smooth={true}>Showcase</ScrollLink></li>
          <li className="cursor-pointer"><ScrollLink to="contact" smooth={true}>Contact</ScrollLink></li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
