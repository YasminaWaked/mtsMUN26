import React, { useState } from 'react';
import StaggeredMenu from '../Elements/menu';
import SpotlightCard from '../Elements/SpotlightCard';
import CommitteeContent from '../Elements/CommitteeContent';
import CommitteeReveal from '../Elements/CommitteeReveal';
import Header from '../Elements/Header';

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
        <Header />
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering
        menuButtonColor="#ffffff"
        openMenuButtonColor="#000000"
        changeMenuColorOnOpen
        colors={['#0432ba', '#011757']}
        accentColor="#0432ba"
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