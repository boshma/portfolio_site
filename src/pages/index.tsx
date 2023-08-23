// src/pages/index.tsx
import Head from 'next/head';
import NavBar from '~/components/NavBar';
import { useEffect, useState } from 'react';
import TechSection from '~/components/TechSection';
import HeaderSection from '~/components/HeaderSection'; // Import the HeaderSection component

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

      <HeaderSection /> {/* Use the HeaderSection component */}
      
      <div id="tech">
        <TechSection />
      </div>
    </>
  );
};

export default Home;
