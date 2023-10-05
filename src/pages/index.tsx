// src/pages/index.tsx
import Head from 'next/head';
import NavBar from '~/components/NavBar';
import { useEffect, useRef, useState } from 'react';
import TechSection from '~/components/TechSection';
import HeaderSection from '~/components/HeaderSection';
import ExperienceSection from '~/components/ExperienceSection';
import ShowcaseSection from '~/components/ShowcaseSection';
import ContactSection from '~/components/ContactSection';

const Home = () => {
  const [navBottom, setNavBottom] = useState(true);
  const headerHeightRef = useRef<number | undefined>(undefined); // Change this

  useEffect(() => {
    headerHeightRef.current = document.querySelector('main')?.offsetHeight; // Measure the header height on mount
    const handleScroll = () => {
      if(headerHeightRef.current !== undefined) { // Change this
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        setNavBottom(scrollPosition < headerHeightRef.current); // Check if scrolled past header
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    
      <Head>
        <title>Bogdan Shmat | Software Engineer </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <meta name="description" content="Bogdan Shmat - Software Engineer - Washington State University ." />
        <link rel="icon" href="/flag-ukraine.svg" type="image/svg+xml" />
      </Head>

      <NavBar navBottom={navBottom} />
    <HeaderSection />
      <div className="h-1 bg-white"></div>
      <div className="bg-gradient-to-r from-current via-blue-100 to-current">
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