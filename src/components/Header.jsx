import logo from '../assets/logo.svg';
import '../components/css/Header.css';

function Header() {
  return (
    <header className="portfolio">
      <div className="portfolio__header">
        <div className="portfolio__logo">
          <img src={logo} alt="logo" className="portfolio__logo-img" />
          <h1 className="portfolio__logo-name">Agency</h1>
        </div>
        <nav className="portfolio__navbar">
          <button className="portfolio__navbar-item">About</button>
          <button className="portfolio__navbar-item">Service</button>
          <button className="portfolio__navbar-item">Pricing</button>
          <button className="portfolio__navbar-item">Blog</button>
        </nav>
        <button className="portfolio__contact-button">Contact</button>
      </div>
      <div className="portfolio__info">
        <div className="portfolio__topic">Portfolio</div>
        <div className="portfolio__text">
          Agency provides a full service range including technical skills, design, business
          understanding.
        </div>
      </div>
    </header>
  );
}

export default Header;
