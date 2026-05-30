import React from 'react';
import StaggeredMenu from '../menu';
import Masonry from '../Masonry';

const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Register', ariaLabel: 'Register now!', link: '/register' },
    { label: 'Committees', ariaLabel: 'Learn about our committees', link: '/committees' },
    { label: 'Gallery', ariaLabel: 'All of our photos!!', link: '/gallery' }
  ];
  
  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

const items = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
];

const Gallery = () => {
    return (
      <div
        style={{
          width: '100%',
          minHeight: '100vh',
          position: 'relative'
        }}
      >
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

        <Masonry
          items={items}
          ease="power1.out"
          duration={0.3}
          stagger={0.05}
          animateFrom="center"
          scaleOnHover
          hoverScale={0.95}
          blurToFocus
        />
      </div>
    );
  };

export default Gallery