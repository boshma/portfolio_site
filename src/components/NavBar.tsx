// src/components/NavBar.tsx
import React, { CSSProperties } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = ({ navBottom, visible }: { navBottom: boolean, visible: boolean }) => {
  const navStyle: CSSProperties = {
    position: 'sticky',
    top: navBottom ? 'unset' : 0,
    bottom: navBottom ? 0 : 'unset',
    backgroundColor: 'transparent',
    zIndex: 50,
    color: 'white',
    opacity: visible ? 1 : 0,
    visibility: visible ? 'visible' : 'hidden',
    maxHeight: visible ? '100px' : '0', 
    overflow: 'hidden', 
    transition: 'opacity 500ms ease-in-out, visibility 500ms ease-in-out, maxHeight 500ms ease-in-out',
  };


  // Apply classes conditionally based on the `visible` prop
  const navClasses = `transition-opacity duration-500 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`;

  return (
    <nav style={navStyle} className={navClasses}>
      <div className="container mx-auto">
        <ul className="flex justify-around py-4 space-x-2">
          <li className="cursor-pointer">
            <ScrollLink to="tech" smooth={true} duration={500} className="scroll-link">Tech</ScrollLink>
          </li>
          <li className="cursor-pointer">
            <ScrollLink to="experience" smooth={true} duration={500} className="scroll-link">Experience</ScrollLink>
          </li>
          <li className="cursor-pointer">
            <ScrollLink to="showcase" smooth={true} duration={500} className="scroll-link">Showcase</ScrollLink>
          </li>
          <li className="cursor-pointer">
            <ScrollLink to="contact" smooth={true} duration={500} className="scroll-link">Contact</ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
