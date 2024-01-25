// src/pages/index.tsx
import Head from "next/head";
import NavBar from "~/components/NavBar";
import { useEffect, useRef, useState } from "react";
import TechSection from "~/components/TechSection";
import HeaderSection from "~/components/HeaderSection";
import ExperienceSection from "~/components/ExperienceSection";
import ShowcaseSection from "~/components/ShowcaseSection";
import ContactSection from "~/components/ContactSection";
import Snow from "~/components/Snow";

const Home = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  const [isScrolledPastHeader, setIsScrolledPastHeader] = useState(false);
  const [hasStoppedScrolling, setHasStoppedScrolling] = useState(true);

  // Header section height (update with actual height of your header)
  const headerHeight = 800; // Example height in pixels

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Ensure the ref is current and the element exists
      if (headerRef.current) {
        const headerBottom = headerRef.current.getBoundingClientRect().bottom;
        const scrolledPastHeader = headerBottom < 0;
        setIsScrolledPastHeader(scrolledPastHeader);
      }
      const scrolledPastHeader = window.scrollY > headerHeight;
      setIsScrolledPastHeader(scrolledPastHeader);
      console.log("Scrolled past header:", scrolledPastHeader);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setHasStoppedScrolling(true);
        console.log("Stopped scrolling");
      }, 100); // Set delay for stop-scroll detection

      if (!hasStoppedScrolling) {
        setHasStoppedScrolling(false);
        console.log("Scrolling...");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [headerRef, hasStoppedScrolling]);

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
    window.addEventListener("resize", updateScreenStatus);

    // Clean up event listener
    return () => window.removeEventListener("resize", updateScreenStatus);
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
    window.addEventListener("resize", updateMobileStatus);

    // Clean up event listener
    return () => window.removeEventListener("resize", updateMobileStatus);
  }, []);
  const [documentHeight, setDocumentHeight] = useState(0);

  useEffect(() => {
    // Update the document height on mount and when window is resized
    const updateHeight = () => {
      setDocumentHeight(document.documentElement.scrollHeight);
    };

    window.addEventListener("resize", updateHeight);
    updateHeight(); // Initial call to set height

    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  const [navBottom, setNavBottom] = useState(true);

  return (
    <>
      <Head>
        <title>Bogdan Shmat | Software Engineer </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Bogdan Shmat - Software Engineering Student - Washington State University ."
        />
        <link rel="icon" href="/sweetlogo.svg" type="image/svg+xml" />
      </Head>
      {!hasStoppedScrolling || isScrolledPastHeader ? (
        <NavBar navBottom={false} visible={true} /> // Set visible to true
      ) : (
        <NavBar navBottom={false} visible={false} /> // Set visible to false
      )}
      <HeaderSection hasNavBar={hasStoppedScrolling && !isScrolledPastHeader} />
      <div className="h-1 bg-white"></div>
      <div className="relative">
        {/* <Snow documentHeight={documentHeight} /> */} 
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
