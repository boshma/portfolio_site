// src/components/HeaderSection.tsx
import React, { useState, useEffect, useRef } from "react";
import TypingText from "~/components/typingtext";
import HeartSVG from "~/components/heartSVG";
import NavBar from "./NavBar";
import ChristmasLights from "./ChristmasLights";

const HeaderSection = ({ hasNavBar }: { hasNavBar: boolean }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="relative overflow-hidden bg-black text-white"
    >
      <div className="flex h-screen flex-col justify-between">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
        <div className="flex flex-grow items-center justify-center">
          <div
            id="title"
            style={windowWidth && windowWidth <= 640 ? { top: "30%" } : {}}
            className="absolute z-20 w-full text-center"
          >
            <ChristmasLights text="Hey, I'm Bogdan" />
            <div className="mt-4 flex items-center justify-center">
              <h2 className="mr-2 text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">
                <ChristmasLights text="I" />
              </h2>
              <HeartSVG className="mr-3 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-10 lg:w-10 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12" />
              <TypingText className="z-10" />
            </div>
          </div>
        </div>
        {/* Always render NavBar, but pass visibility and position props */}
        <NavBar navBottom={!hasNavBar} visible={hasNavBar} />
      </div>
    </header>
  );
};

export default HeaderSection;
