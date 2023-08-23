// src/components/HeaderSection.tsx
import TypingText from '~/components/typingtext';
import HeartSVG from '~/components/heartSVG';
import Particles from '~/components/Particles';

const HeaderSection = () => {
  return (
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
  );
};

export default HeaderSection;
