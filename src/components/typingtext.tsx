import { useEffect, useState, FunctionComponent } from "react";

const textList = ['building neat things', 'horror movies', 'fitness', 'nature', 'animals', 'food'];

interface TypingTextProps {
  className?: string;
}

const TypingText: FunctionComponent<TypingTextProps> = ({ className }) => {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(true);
  const [paused, setPaused] = useState(false);

  function forceReflow(element: HTMLElement) {
    void element.offsetHeight;
  }


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
            forceReflow(document.getElementById('typing-text') as HTMLElement);
          }, 1000);
        } else {
          setText((prevText) => prevText + currentText[text.length]);
        }
      } else {
        if (text.length === 0) {
          setDirection(true);
          setIdx((prevIdx) => (prevIdx + 1) % textList.length);
          forceReflow(document.getElementById('typing-text') as HTMLElement);
        } else {
          setText((prevText) => prevText.slice(0, prevText.length - 1));
        }
      }
    }, direction ? 150 : 50);
    return () => clearTimeout(timer);
  }, [text, idx, direction, paused]);

  return (
    <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl leading-normal overflow-visible border-r-2 border-white whitespace-nowrap animate-blink-caret ${className}`}>
      <div id="typing-text" className="inline-block">{text}</div>
    </h2>
  );
  
};

export default TypingText;
