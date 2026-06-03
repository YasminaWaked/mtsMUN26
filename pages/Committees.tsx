import React from 'react';
import StaggeredMenu from '../Elements/menu';
import SpotlightCard from '../Elements/SpotlightCard';
import CommitteeContent from '../Elements/CommitteeContent';

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
    return (
        <div>
            <StaggeredMenu
                position= "right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials
                displayItemNumbering={true}
                menuButtonColor="#ffffff"
                openMenuButtonColor="#000000"
                changeMenuColorOnOpen={true}
                colors={['#B497CF', '#5227FF']}
                accentColor="#5227FF"
                onMenuOpen={() => console.log('Menu opened')}
                onMenuClose={() => console.log('Menu closed')}
            />

            <div className='cards'>
            <SpotlightCard className="committe-spotlight" spotlightColor="rgba(0, 229, 255, 0.2)">
                <CommitteeContent
                    category = 'beginner'
                    committeeName = "GA1/DISEC"
                    committeeLogo = "placeholder.png"
                    agenda1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    agenda2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    learnMore='idk'
                    />
            </SpotlightCard>

            <SpotlightCard className="committe-spotlight" spotlightColor="rgba(0, 229, 255, 0.2)">
                <CommitteeContent
                    category = 'beginner'
                    committeeName = "UNODC"
                    committeeLogo = "placeholder.png"
                    agenda1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    agenda2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    learnMore='idk'
                    />
            </SpotlightCard>

            <SpotlightCard className="committe-spotlight" spotlightColor="rgba(0, 229, 255, 0.2)">
                <CommitteeContent
                    category = 'beginner'
                    committeeName = "International Telecommunication Union"
                    committeeLogo = "placeholder.png"
                    agenda1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    agenda2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    learnMore='idk'
                    />
            </SpotlightCard>

            <SpotlightCard className="committe-spotlight" spotlightColor="rgba(0, 229, 255, 0.2)">
                <CommitteeContent
                    category = 'beginner'
                    committeeName = "IMF"
                    committeeLogo = "placeholder.png"
                    agenda1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    agenda2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    learnMore='idk'
                    />
            </SpotlightCard>

            <SpotlightCard className="committe-spotlight" spotlightColor="rgba(0, 229, 255, 0.2)">
                <CommitteeContent
                    category = 'beginner'
                    committeeName = "F1"
                    committeeLogo = "placeholder.png"
                    agenda1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    agenda2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    learnMore='idk'
                    />
            </SpotlightCard>

            <SpotlightCard className="committe-spotlight" spotlightColor="rgba(0, 229, 255, 0.2)">
                <CommitteeContent
                    category = 'beginner'
                    committeeName = "UNSC"
                    committeeLogo = "placeholder.png"
                    agenda1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    agenda2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    learnMore='idk'
                    />
            </SpotlightCard>

            <SpotlightCard className="committe-spotlight" spotlightColor="rgba(0, 229, 255, 0.2)">
                <CommitteeContent
                    category = 'beginner'
                    committeeName = "NATO X BRICS"
                    committeeLogo = "placeholder.png"
                    agenda1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    agenda2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    learnMore='idk'
                    />
            </SpotlightCard>

            <SpotlightCard className="committe-spotlight" spotlightColor="rgba(0, 229, 255, 0.2)">
                <CommitteeContent
                    category = 'beginner'
                    committeeName = "ICC"
                    committeeLogo = "placeholder.png"
                    agenda1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    agenda2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    learnMore='idk'
                    />
            </SpotlightCard>
            <SpotlightCard className="committe-spotlight" spotlightColor="rgba(0, 229, 255, 0.2)">
                <CommitteeContent
                    category = 'beginner'
                    committeeName = "White House (Biden Administration)"
                    committeeLogo = "placeholder.png"
                    agenda1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    agenda2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    learnMore='idk'
                    />
            </SpotlightCard>
            <SpotlightCard className="committe-spotlight" spotlightColor="rgba(0, 229, 255, 0.2)">
                <CommitteeContent
                    category = 'beginner'
                    committeeName = "FCC"
                    committeeLogo = "placeholder.png"
                    agenda1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    agenda2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    learnMore='idk'
                    />
            </SpotlightCard>
            <SpotlightCard className="committe-spotlight" spotlightColor="rgba(0, 229, 255, 0.2)">
                <CommitteeContent
                    category = 'beginner'
                    committeeName = "FUN COMMITTEE"
                    committeeLogo = "placeholder.png"
                    agenda1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    agenda2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
                    learnMore='idk'
                    />
            </SpotlightCard>

            </div>
        </div>
    );
};

export default Committees