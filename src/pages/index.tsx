// src/pages/index.tsx
import Head from 'next/head';
import TypingText from '~/components/typingtext';
import HeartSVG from '~/components/heartSVG';
import Particles from '~/components/Particles';
import NavBar from '~/components/NavBar';
import { useEffect, useState } from 'react';
import TechSection from '~/components/TechSection';

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
        <title>Welcome | Bogdan Shmat - Software Engineer</title>
        <meta name="description" content="Bogdan Shmat - Software Engineer. A full-stack developer with experience in Next.js, TypeScript, and Tailwind CSS." />
        <link rel="icon" href="" />
      </Head>

      <main className="flex justify-center items-center h-screen bg-gray-900 text-white relative overflow-hidden particle-section">
        <div className="absolute w-full h-full">
          <Particles id="tsparticles" />
        </div>
        <div className="flex items-center z-10">
          <h2 className="text-4xl mr-2">I</h2>
          <HeartSVG className="h-10 w-10 mr-2" />
        </div>
        <TypingText className="z-10" />

      </main>
      <div id="tech">
        <TechSection />
      </div>
    </>
  );
};

export default Home;
