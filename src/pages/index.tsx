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

    // State to determine if the device has a large screen
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    // Define your large screen width breakpoint, for example, 1440px (adjust based on your laptop screen width)
    const largeScreenBreakpoint = 1440;
  
    useEffect(() => {
      const updateScreenStatus = () => {
        setIsMobile(window.innerWidth < mobileBreakpoint);
        setIsLargeScreen(window.innerWidth > largeScreenBreakpoint);
      };
  
      // Set the initial value
      updateScreenStatus();
  
      // Add event listener for window resize
      window.addEventListener('resize', updateScreenStatus);
  
      // Clean up event listener
      return () => window.removeEventListener('resize', updateScreenStatus);
    }, []);

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


  return (
    <>
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
      <div className="relative" >
      {!isMobile && !isLargeScreen && <Snow documentHeight={documentHeight} />}
        <div id="tech">
          <TechSection className="miasmic-blur " />
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
