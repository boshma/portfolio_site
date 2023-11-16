// src/components/Snow.tsx
import React, { useMemo } from 'react';

interface SnowProps {
  documentHeight: number;
}

const Snow: React.FC<SnowProps> = ({ documentHeight }) => {
  const snowStyles = {
    '--document-height': `${documentHeight}px`,
  } as React.CSSProperties;

  // Memoize the snowflake elements
  const snowflakes = useMemo(() => (
    Array.from({ length: 200 }, (_, index) => (
      <div key={index} className={`snow snow-${index + 1}`}></div>
    ))
  ), []); // Empty dependency array as the snowflakes do not depend on any external variables

  return (
    <div style={snowStyles}>
      {snowflakes}
    </div>
  );
};

export default Snow;

