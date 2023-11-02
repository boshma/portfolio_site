// src/components/Snow.tsx

interface SnowProps {
  documentHeight: number;
}

const Snow: React.FC<SnowProps> = ({ documentHeight }) => {
  const snowStyles = {
    '--document-height': `${documentHeight}px`,
  } as React.CSSProperties;

  return (
    <div style={snowStyles}>
      {Array.from({ length: 200 }, (_, index) => (
        <div key={index} className={`snow snow-${index + 1}`}></div>
      ))}
    </div>
  );
};

export default Snow;
