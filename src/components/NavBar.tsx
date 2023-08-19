//src/components/NavBar.tsx
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = ({ navBottom }: { navBottom: boolean }) => {
  const navPosition = navBottom ? 'bottom-0' : 'top-0';
  const bgColor = navBottom ? 'bg-transparent' : 'bg-gray-900';
  
  return (
    <nav className={`fixed ${navPosition} left-0 w-full ${bgColor} text-white z-50 transition-all duration-300 ease-in-out`}>
      <div className="container mx-auto">
        <ul className="flex justify-around py-4">
          <li><ScrollLink to="tech" smooth={true}>Tech</ScrollLink></li>
          <li><ScrollLink to="experience" smooth={true}>Experience</ScrollLink></li>
          <li><ScrollLink to="showcase" smooth={true}>Showcase</ScrollLink></li>
          <li><ScrollLink to="contact" smooth={true}>Contact</ScrollLink></li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
