import { Link } from 'react-router-dom';
import '../CSS/Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo">
        <Link to='/'><img src='MUN-logo.PNG' className='logo-image' /></Link>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/committees">Committees</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>
    </header>
  );
};

export default Header;