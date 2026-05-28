import React from 'react';
import ReactDOM from 'react-dom/client';
import './mtsMUN26.css';
import ScrollVelocity from './ScrollVelocity';
import ScrollReveal from './scrollReveal';
import StaggeredMenu from './menu';
import FillTextScroll from './FillTextScroll';
import LineWaves from './lineWaves';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Register', ariaLabel: 'Register now!', link: '/register' },
  { label: 'Committees', ariaLabel: 'Learn about our committees', link: '/committees' },
  { label: 'Resources', ariaLabel: 'Resources for the conference', link: '/resources' },
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
  const targetDate = new Date("November 15, 2026 09:00:00").getTime();
  
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

//APP
const App: React.FC = () => {
  return (
    <div id="app">  
  <LineWaves
    speed={0.3}
    innerLineCount={14}
    outerLineCount={31}
    warpIntensity={0.2}
    rotation={-34}
    edgeFadeWidth={0.1}
    colorCycleSpeed={0.6}
    brightness={0.4}
    color1="#101ba3"
    color2="#040572"
    color3="#144397"
    enableMouseInteraction
    mouseInfluence={2}
  />

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
      <Timer />

      <ScrollReveal
        baseOpacity={0.15}
        enableBlur={true}
        baseRotation={3}
      >
        MTSMUN is where future leaders learn diplomacy,
        negotiation, and global collaboration.
      </ScrollReveal>

      <FillTextScroll
  text="Meet our Scretariat"
/>

    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}