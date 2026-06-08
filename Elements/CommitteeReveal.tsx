import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import '../CSS/CommitteeReveal.css';

import { Committee } from '../data/committees';

interface CommitteeRevealProps {
  committee: Committee;
  onClose: () => void;
}

const CommitteeReveal: React.FC<CommitteeRevealProps> = ({
  committee,
  onClose
}) => {
  const { scrollYProgress } = useScroll();

  const leftX = useTransform(scrollYProgress, [0, 0.5], ['0%', '-100%']);
  const rightX = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%']);

  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const contentScale = useTransform(scrollYProgress, [0.3, 0.7], [0.9, 1]);

  return (
    <div className="committee-overlay">
      <div className="committee-modal">
  
        <motion.div
          className="door left-door"
          style={{ x: leftX }}
        >
          <div className="door-content">
            <h2>Agenda 1</h2>
            <p>{committee.agenda1}</p>

            <div className="door-footer">
              Position Paper
            </div>
          </div>
        </motion.div>

        <motion.div
          className="door right-door"
          style={{ x: rightX }}
        >
          <div className="door-content">
            <h2>Agenda 2</h2>
            <p>{committee.agenda2}</p>

            <div className="door-footer">
              Committee Guide
            </div>
          </div>
        </motion.div>
  
        <motion.div
          className="committee-content"
          style={{
            opacity: contentOpacity,
            scale: contentScale
          }}
        >
          <img
            src={committee.logo}
            className="committee-logo"
          />

          <h1>{committee.name}</h1>

          <p>
            Committee description goes here...
          </p>

          <button
            className="close-button"
            onClick={onClose}
          >
            ✕
          </button>
        </motion.div>
  
      </div>
    </div>
  );
};

export default CommitteeReveal;