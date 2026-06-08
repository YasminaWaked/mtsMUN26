import React, { useState } from 'react';
import StaggeredMenu from '../Elements/menu';
import SpotlightCard from '../Elements/SpotlightCard';
import CommitteeContent from '../Elements/CommitteeContent';
import CommitteeReveal from '../Elements/CommitteeReveal';

import { committees, Committee } from '../data/committees';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Committees', ariaLabel: 'Learn about our committees', link: '/committees' },
  { label: 'Gallery', ariaLabel: 'All of our photos!!', link: '/gallery' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

const Committees = () => {
    const [selectedCommittee, setSelectedCommittee] =
    useState<Committee | null>(null);

    console.log(committees);
console.log(Array.isArray(committees));

  return (
    <div>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering
        menuButtonColor="#ffffff"
        openMenuButtonColor="#000000"
        changeMenuColorOnOpen
        colors={['#B497CF', '#5227FF']}
        accentColor="#5227FF"
      />

      <div className="cards">
        {committees.map((committee) => (
          <SpotlightCard
            key={committee.name}
            className="committee-spotlight"
          >
            <CommitteeContent
              committeeName={committee.name}
              committeeLogo={committee.logo}
              category={committee.category}
              agenda1={committee.agenda1}
              agenda2={committee.agenda2}
              onLearnMore={() =>
                setSelectedCommittee(committee)
              }
            />
          </SpotlightCard>
        ))}
      </div>

      {selectedCommittee && (
  <CommitteeReveal
    committee={selectedCommittee}
    onClose={() => setSelectedCommittee(null)}
  />
)}
    </div>
  );
}; 

export default Committees;