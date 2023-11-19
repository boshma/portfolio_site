// src/components/HeaderSection.tsx
import React, { useState, useEffect, useRef } from 'react';
import TypingText from '~/components/typingtext';
import HeartSVG from '~/components/heartSVG';
import NavBar from './NavBar';

const HeaderSection = ({ hasNavBar }: { hasNavBar: boolean }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header ref={headerRef} className="text-white relative overflow-hidden bg-black">
      <div className="flex flex-col justify-between h-screen">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div className="flex-grow flex justify-center items-center">
          <div 
            id="title" 
            style={windowWidth && windowWidth <= 640 ? { top: "30%" } : {}} 
            className="absolute z-20 text-center w-full"
          >
            <span className="font-pacifico "> Hey, I&apos;m Bogdan</span> 
            <div className="flex items-center justify-center mt-4">
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl mr-2">I</h2>
              <HeartSVG className="h-6 sm:h-8 md:h-10 lg:h-10 xl:h-10 2xl:h-12 w-6 sm:w-8 md:w-10 lg:w-10 xl:w-10 2xl:w-12 mr-3" />
              <TypingText className="z-10" />
            </div>
          </div>
        </div>
        {hasNavBar ? <NavBar navBottom={true} /> : null}
      </div>
    </header>
  );
};

export default HeaderSection;
