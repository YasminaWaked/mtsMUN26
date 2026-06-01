import React from 'react';
import StaggeredMenu from '../Elements/menu';

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
        </div>
    );
};

export default Committees