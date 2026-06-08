import React from 'react';
import ReactDOM from 'react-dom/client';
import '../CSS/mtsMUN26.css';
import Header from '../Elements/Header';
import ScrollVelocity from '../Elements/ScrollVelocity';
import ScrollReveal from '../Elements/scrollFloat';
import StaggeredMenu from '../Elements/menu';
import FillTextScroll from '../Elements/FillTextScroll';
import LineWaves from '../Elements/lineWaves';
import CircularGallery from '../Elements/CircularGallery'
import ChairButton from '../Elements/chairButton'
import DelegateButton from '../Elements/delegateButton'
import DelegationButton from '../Elements/delegationButton'
import ScrollFloat from '../Elements/scrollFloat';
import RotatingText from '../Elements/RotatingText'
import { motion } from "framer-motion";
import SpotlightCard from '../Elements/SpotlightCard';


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

interface TimerCharProps {
  char: string;
}

const TimerChar: React.FC<TimerCharProps> = (props: TimerCharProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const colon: boolean = props.char === ":";
  
  if (colon) {
    return <h1 className="timer-char colon">:</h1>;
  }
  
  const number: number = parseInt(props.char);
  
  const getCharSlider = (): React.JSX.Element => {
    let options: React.JSX.Element[] = [];
    
    for (let i: number = 0; i <= 9; i++) {
      const classes: string = `timer-char-slider-option ${number === i ? "active" : ""}`;
      options.push(<span key={i} className={classes}>{i}</span>);
    }
  
    const height: number = ref.current ? ref.current.offsetHeight : 0;
    const top: string = `${number * height * -1}px`;
  
    return (
      <div className="timer-char-slider" style={{ top }}>{options}</div>
    );
  }

  return (
    <div ref={ref} className="timer-char number">{getCharSlider()}</div>
  );
}

const Timer: React.FC = () => {
  const targetDate = new Date("December 11, 2026 15:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = React.useState(targetDate - Date.now());

  React.useEffect(() => {
    const interval = setInterval(() => {
      const distance = targetDate - Date.now();
      setTimeLeft(distance < 0 ? 0 : distance);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const getTimeStrings = () => {
    // Math to convert milliseconds into units
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const format = (num: number) => num.toString().padStart(2, "0");

    // This creates the string "DD:HH:MM:SS"
    return `${format(days)}:${format(hours)}:${format(minutes)}:${format(seconds)}`;
  };

  const getChars = (): React.JSX.Element[] => {
    return getTimeStrings().split("").map((char, index) => (
      <TimerChar key={index} char={char} />
    ));
  };

  return (
    <div id="timer">
      <div id="timer-text">{getChars()}</div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div id="app">
    <Header />    
    <div id='first-section'>
        <LineWaves
          speed={0.3}
          innerLineCount={14}
          outerLineCount={40}
          warpIntensity={0.2}
          rotation={-34}
          edgeFadeWidth={0.3}
          colorCycleSpeed={0.6}
          brightness={0.4}
          color1="#011757"
          color2="#011757"
          color3="#011757"
          enableMouseInteraction
          mouseInfluence={3}
        />
        <div className='hero-content'>
          <StaggeredMenu
            position= "right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials
            displayItemNumbering={true}
            menuButtonColor="#ffffff"
            openMenuButtonColor="#000000"
            changeMenuColorOnOpen={true}
            colors={['#0432ba', '#011757']}
            accentColor="#0432ba"
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
          />
          

            <div className='velocity-group' style = {{marginBottom: '-50px'}}>
              <ScrollVelocity
              texts={[
                "MTS MUN 2026",
                "DIPLOMACY",
                "DEBATE",
                "RESOLUTION"
              ]}
              velocity={1}
              />
            <ScrollVelocity
              texts={[
                "MTS MUN 2026",
                "DIPLOMACY",
                "DEBATE",
                "RESOLUTION"
              ]}
              velocity={-1}
              />
            </div>

            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <img className='card-img' src='MUN-logo.JPG'/>
            <h1>MTS MUN</h1>
          </SpotlightCard>
          
          <Timer />
          <div className='buttons'>
            <ChairButton />
            <DelegateButton />
            <DelegationButton />
          </div>
        </div>
      </div>  

    <div className='blue-section'>
      <ScrollFloat
        textClassName='theme1'
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.03}
      >
        Theme of 2026
      </ScrollFloat>
      
      <ScrollFloat
        textClassName='theme2'
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.03}
      >
         Bridging the Global Divide: Diplomacy Shaping Tomorrow      
      </ScrollFloat>


          <FillTextScroll
      text="Meet our Secretariat"
    />

    <div style={{ height: '700px', width: '100%', position: 'relative' }}>
    <CircularGallery
      bend={1}
      textColor="#ffffff"
      borderRadius={0.05}
      scrollSpeed={1.4}
      scrollEase={0.08}
/>
    </div>

    <h1 className="full-rotatingText">
   Shaping{" "}
  <span className="rotating-pill">
    <RotatingText
      texts={["tomorrow", "diplomacy", "progress", "sustainability"]}
      staggerFrom="last"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-120%" }}
      staggerDuration={0.025}
      splitLevelClassName="overflow-hidden"
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
      rotationInterval={2000}
      splitBy="characters"
      auto
      loop
    />
  </span>
</h1>

</div>

    </div>
  );
}

export default Home;