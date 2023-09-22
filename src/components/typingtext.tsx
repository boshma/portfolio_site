//src/components/typingtext.tsx
import React, { useEffect, useState } from "react";
import type { FunctionComponent } from "react";

const textList = ['running', 'Software Engineering', 'horror movies', 'lifting weights', 'scenic views'];

interface TypingTextProps {
  className?: string;
}

const TypingText: FunctionComponent<TypingTextProps> = ({ className }) => {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      const currentText = textList[idx] ?? '';
      if (direction) {
        if (text.length === currentText.length) {
          setPaused(true);
          setTimeout(() => {
            setDirection(false);
            setPaused(false);
          }, 1500);
        } else {
          setText((prevText) => prevText + currentText[text.length]);
        }
      } else {
        if (text.length === 0) {
          setDirection(true);
          setIdx((prevIdx) => (prevIdx + 1) % textList.length);
        } else {
          setText((prevText) => prevText.slice(0, prevText.length - 1));
        }
      }
    }, direction ? 150 : 50);
    return () => clearTimeout(timer);
  }, [text, idx, direction, paused]);

  return (
    <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl leading-normal overflow-visible border-white whitespace-nowrap animate-blink-caret ${className}`}>
  <div className="inline-block pr-1 relative">{text}<span className="animate-blink absolute bottom-0 right-0 w-0.5 h-full bg-white"></span></div>
    </h2>
  );
};

export default TypingText;