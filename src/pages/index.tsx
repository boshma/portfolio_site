// src/pages/index.tsx
import Head from "next/head";
import NavBar from "~/components/NavBar";
import { useEffect, useState } from "react";
import TechSection from "~/components/TechSection";
import HeaderSection from "~/components/HeaderSection";
import ExperienceSection from "~/components/ExperienceSection";
import ShowcaseSection from "~/components/ShowcaseSection";
import ContactSection from "~/components/ContactSection";
import Snow from "~/components/Snow";

const Home = () => {

    // State to determine if the device is considered mobile
    const [isMobile, setIsMobile] = useState(false);

    // Define your mobile width breakpoint, for example 768px for tablets
    const mobileBreakpoint = 768;
  
    useEffect(() => {
      const updateMobileStatus = () => {
        setIsMobile(window.innerWidth < mobileBreakpoint);
      };
  
      // Set the initial value
      updateMobileStatus();
  
      // Add event listener for window resize
      window.addEventListener('resize', updateMobileStatus);
  
      // Clean up event listener
      return () => window.removeEventListener('resize', updateMobileStatus);
    }, []);
  const [documentHeight, setDocumentHeight] = useState(0);

  useEffect(() => {
    // Update the document height on mount and when window is resized
    const updateHeight = () => {
      setDocumentHeight(document.documentElement.scrollHeight);
    };

    window.addEventListener('resize', updateHeight);
    updateHeight(); // Initial call to set height

    return () => window.removeEventListener('resize', updateHeight);
  }, []);
  const [navBottom, setNavBottom] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      setNavBottom(scrollPosition < 10); // instead of scrollPosition === 0
    };
    

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavBar navBottom={navBottom} />
      <Head>
        <title>Bogdan Shmat | Software Engineer </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Bogdan Shmat - Software Engineer - Washington State University ."
        />
        <link rel="icon" href="/flag-ukraine.svg" type="image/svg+xml" />
      </Head>

      <HeaderSection />
      <div className="h-1 bg-white"></div>
      <div className="relative">
      {!isMobile && <Snow documentHeight={documentHeight} />}
        <div id="tech">
          <TechSection />
        </div>
        
        <div id="experience">
          <ExperienceSection />
        </div>
        <div id="showcase">
          <ShowcaseSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </div>
    </>
  );
};

export default Home;
