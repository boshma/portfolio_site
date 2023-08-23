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
        <div className=" text-4xl font-semibold mb-8 leading-loose">
          <p>Hey, I'm Bogdan</p>
          <p>I'm a full-stack engineer</p>
        </div>
        <div className="flex items-center">
          <h2 className="text-4xl mr-2">I</h2>
          <HeartSVG className="h-10 w-10 mr-2" />
          <TypingText className="z-10" />
        </div>
        
      </div>
    </main>
  );
};

export default HeaderSection;
