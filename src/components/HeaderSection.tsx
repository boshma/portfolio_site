// src/components/HeaderSection.tsx
import TypingText from '~/components/typingtext';
import HeartSVG from '~/components/heartSVG';

const HeaderSection = () => {
  return (
    <main style={{ background: "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)" }} className="flex justify-center items-center h-screen text-white relative overflow-hidden">

      <div id="stars" className="absolute inset-0 z-10 w-full h-full"></div>
      <div id="stars2" className="absolute inset-0 z-10 w-full h-full"></div>
      <div id="stars3" className="absolute inset-0 z-10 w-full h-full"></div>
      <div id="title" className="absolute z-20 top-1/5 text-center w-full md:top-1/4">

        <span>Hey, I&apos;m Bogdan</span>
        <div className="flex items-center justify-center mt-4">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl mr-2">I</h2>
          <HeartSVG className="h-6 sm:h-8 md:h-10 lg:h-10 xl:h-10 2xl:h-12 w-6 sm:w-8 md:w-10 lg:w-10 xl:w-10 2xl:w-12 mr-2" />
          <TypingText className="z-10" />
        </div>
      </div>
    </main>
  );
};

export default HeaderSection;
