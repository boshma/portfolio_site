import React, { useState, useEffect } from 'react';
interface Props {
  text: string;
}

const ChristmasLights: React.FC<Props> = ({ text }) => {
  // Lighted title state
  const [lightedTitle, setLightedTitle] = useState<JSX.Element[]>([]);

  // Generate the lighted title
  const generateLightedTitle = (text: string) => {
    return text.split('').map((char, index) => {
      const rand = Math.floor(Math.random() * 7) + 1;
      return (
        <span key={`${char}-${index}`} className={`lights-${rand}`}>
          {char}
        </span>
      );
    });
  };

  useEffect(() => {
    setLightedTitle(generateLightedTitle(text));
  }, [text]);

  return <>{lightedTitle}</>;
};

export default ChristmasLights;