import { useEffect, useState } from "react";

const textList = ['building software', 'horror movies', 'running', 'lifting', 'cats', 'food'];

const TypingText = () => {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    // if paused, do nothing
    if (paused) return;
    const timer = setTimeout(() => {
      const currentText = textList[idx] || '';
      if (direction) {
        if (text.length === currentText.length) {
          // start pause, set paused to true
          setPaused(true);
          // after pause, continue deleting word and stop pause
          setTimeout(() => {
            setDirection(false);
            setPaused(false);
          }, 1000);  // pause for 2 seconds
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
  }, [text, idx, direction, paused]);  // added paused here

  return (
    <h2 className="text-4xl overflow-hidden border-r-2 border-white whitespace-nowrap animate-blink-caret">
      <div className="inline-block">{text}</div>
    </h2>
  );
};

export default TypingText;
