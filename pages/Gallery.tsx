import React from 'react';
import StaggeredMenu from '../Elements/menu';
import Masonry from '../Elements/Masonry';
import Header from '../Elements/Header';
import { useEffect, useState } from 'react';
import { getDriveImages } from '../services/googleDrive';

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

  const Gallery = () => {
    const [images, setImages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      getDriveImages().then((imgs) => {
        setImages(imgs);
        setLoading(false);
      });
    }, []);
  
    if (loading) {
      return (
        <div style={{ color: "white", padding: 40 }}>
          Loading gallery...
        </div>
      );
    }
  
    return (
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          position: "relative",
        }}
      >
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
          colors={["#0432ba", "#011757"]}
          accentColor="#0432ba"
        />

        <div style={{
          width: '100%',
          paddingTop: '-10000px',
          paddingBottom: '100px'
        }}>
          <Masonry
            items={images}
            ease="power1.out"
            duration={0.3}
            stagger={0.05}
            animateFrom="center"
            scaleOnHover
            hoverScale={0.95}
            blurToFocus
          />
        </div>
      </div>
    );
  };

export default Gallery