// src/components/NavBar.tsx
import React, { CSSProperties } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = ({ navBottom }: { navBottom: boolean }) => {
  const navStyle: CSSProperties = {
    position: 'sticky',
    top: navBottom ? 'unset' : 0,  // 'unset' will allow the navbar to use the bottom property
    bottom: navBottom ? 0 : 'unset', // When navBottom is true, stick to bottom of HeaderSection
    backgroundColor: 'transparent',
    zIndex: 50,
    color: 'white',
  };

  return (
    <nav style={navStyle}>
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
