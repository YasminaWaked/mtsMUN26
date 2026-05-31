import React from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
  wrap,
} from "framer-motion";

interface ScrollVelocityProps {
  texts: string[];
  velocity?: number;
}

const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  texts,
  velocity = 110,
}) => {
  const baseX = useMotionValue(0);

  const { scrollY } = useScroll();

  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 45,
    stiffness: 450,
  });

  const velocityFactor = useTransform(
    smoothVelocity,
    [0, 1000],
    [0, 5],
    {
      clamp: false,
    }
  );

  useAnimationFrame((_, delta) => {
    let moveBy = (velocity / 1000) * delta;

    moveBy += moveBy * velocityFactor.get();

    baseX.set(baseX.get() - moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, -0, v)}%`);

  return (
    <div className="scroll-container">
      <motion.div className="scroll-track" style={{ x }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <React.Fragment key={i}>
            {texts.map((text, idx) => (
              <span className="scroll-text" key={`${i}-${idx}`}>
                {text}
              </span>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollVelocity;