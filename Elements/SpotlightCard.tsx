import React, { useRef } from 'react';
import '../CSS/SpotlightCard.css';

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
    children,
    className = '',
    spotlightColor = 'rgba(255, 255, 255, 0.25)'
  }) => {
    const divRef = useRef<HTMLDivElement>(null);
  
    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = e => {
      if (!divRef.current) return;
  
      const rect = divRef.current.getBoundingClientRect();
  
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      divRef.current.style.setProperty('--mouse-x', `${x}px`);
      divRef.current.style.setProperty('--mouse-y', `${y}px`);
      divRef.current.style.setProperty('--spotlight-color', spotlightColor);
  
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
  
      const rotateY = ((x - centerX) / centerX) * 8;
      const rotateX = ((y - centerY) / centerY) * -8;
  
      divRef.current.style.transform =
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
  
    const handleMouseLeave = () => {
      if (!divRef.current) return;
  
      divRef.current.style.transform =
        'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };
  
    return (
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`card-spotlight ${className}`}
      >
        {children}
      </div>
    );
  };
  
export default SpotlightCard;
