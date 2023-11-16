// src/components/NavBar.tsx
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = ({ navBottom }: { navBottom: boolean }) => {
  // If `navBottom` is true, position at the bottom, else position at the top.
  const navPosition = navBottom ? 'bottom-0' : 'top-0';
  // If `navBottom` is true, make the background transparent, else apply a solid background color.
  const bgColor = navBottom ? 'bg-transparent' : 'bg-gray-900 shadow-md'; // Added shadow for better visibility

  return (
    <nav className={`sticky ${navPosition} left-0 w-full ${bgColor} text-white z-50 transition-all duration-300 ease-in-out`}>
      <div className="container mx-auto font-pacifico">
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
