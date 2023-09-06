// src/pages/index.tsx
import Head from 'next/head';
import NavBar from '~/components/NavBar';
import { useEffect, useState } from 'react';
import TechSection from '~/components/TechSection';
import HeaderSection from '~/components/HeaderSection';
import ExperienceSection from '~/components/ExperienceSection';
import ShowcaseSection from '~/components/ShowcaseSection';
import ContactSection from '~/components/ContactSection';

const Home = () => {
  const [navBottom, setNavBottom] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      setNavBottom(scrollPosition === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavBar navBottom={navBottom} />
      <Head>
        <title>Bogdan Shmat | Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" /> {/* Added viewport meta tag */}
        <meta name="description" content="Bogdan Shmat - Software Engineer." />
        <link rel="icon" href="/flag-ukraine.svg" type="image/svg+xml" />
      </Head>

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