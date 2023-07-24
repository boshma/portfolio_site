// src/pages/index.tsx
import Head from 'next/head';
import TypingText from '~/components/typingtext';
import HeartSVG from '~/components/heartSVG';

const Home = () => {
  return (
    <>
      <Head>
        <title>Welcome | Bogdan Shmat - Software Engineer</title>
        <meta name="description" content="Bogdan Shmat - Software Engineer. A full-stack developer with experience in Next.js, TypeScript, and Tailwind CSS." />
        <link rel="icon" href="" />
      </Head>
      <main className="flex justify-center items-center h-screen bg-gray-900 text-white relative overflow-hidden">
        <div className="flex items-center">
          <h2 className="text-4xl mr-2">I</h2>  
          <HeartSVG className="h-10 w-10 mr-2"/> 
        </div>
        <TypingText />
      </main>
    </>
  );
};

export default Home;
