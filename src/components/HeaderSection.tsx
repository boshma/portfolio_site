// src/components/HeaderSection.tsx
import TypingText from '~/components/typingtext';
import HeartSVG from '~/components/heartSVG';
import Particles from '~/components/Particles';

const HeaderSection = () => {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-10 w-full h-full">
        <Particles id="tsparticles" />
      </div>
      <div className="absolute z-20 flex flex-col items-center justify-center h-screen w-full">
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-normal text-center mb-8 leading-loose">
          <p>Hey, I&apos;m Bogdan</p>
        </div>
        <div className="flex items-center">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl mr-2">I</h2>
          <HeartSVG className="h-6 sm:h-8 md:h-10 lg:h-10 xl:h-10 2xl:h-12 w-6 sm:w-8 md:w-10 lg:w-10 xl:w-10 2xl:w-12 mr-2" />
          <TypingText className="z-10" />
        </div>
      </div>
    </main>
  );
};

export default HeaderSection;