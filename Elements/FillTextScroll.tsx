import React, { useEffect, useRef } from "react";
import "../CSS/FillTextScroll.css";

interface FillTextScrollProps {
  text: string;
}

const FillTextScroll: React.FC<FillTextScrollProps> = ({ text }) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;

      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight * 0.9), 0),
        1
      );

      textRef.current.style.setProperty(
        "--fill-percent",
        `${progress * 100}%`
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="fill-text-section">
      <h1 ref={textRef} className="fill-text">
        {text}
      </h1>
    </section>
  );
};

export default FillTextScroll;