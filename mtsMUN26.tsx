import React from 'react';
import ReactDOM from 'react-dom/client';
import './mtsMUN26.css';
import ScrollVelocity from './ScrollVelocity';

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

// THE MISSING PART: The App component
const App: React.FC = () => {
  return (
    <div id="app">
      <ScrollVelocity
        texts={[
          "MTS MUN 2026",
          "DIPLOMACY",
          "DEBATE",
          "RESOLUTION"
        ]}
        velocity={3}
      />
      <ScrollVelocity
        texts={[
          "MTS MUN 2026",
          "DIPLOMACY",
          "DEBATE",
          "RESOLUTION"
        ]}
        velocity={-3}
      />

      <Timer />
    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}