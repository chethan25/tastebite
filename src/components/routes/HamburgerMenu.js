import { Link } from 'react-router-dom';
import './hamburger-menu.css';
import Logo from '../../assets/icons/logo.svg';

const HamburgerMenu = ({ handleToggle }) => {
  return (
    <section id="hamburger-menu-section">
      <div className="hamburger-menu-header">
        <div className="hamburger-menu-header-logo">
          <img
            className="hamburger-menu-header-logo-svg"
            src={Logo}
            alt="brand-name"
          />
        </div>
        <div
          className="hamburger-menu-header-close"
          onClick={() => handleToggle()}
        >
          <i className="fas fa-times fa-2x"></i>
        </div>
      </div>
      <nav className="hamburger-menu-nav-bar">
        <ul className="hamburger-menu-nav-list">
          <Link to="/">
            <li className="hamburger-menu-list-item">Home</li>
          </Link>
          <Link to="/recipes">
            <li className="hamburger-menu-list-item">Recipes</li>
          </Link>
          <Link to="/">
            <li className="hamburger-menu-list-item">About</li>
          </Link>
          <Link to="/">
            <li className="hamburger-menu-list-item">Contact</li>
          </Link>
          <Link to="/">
            <li className="hamburger-menu-list-item">Sign In</li>
          </Link>
        </ul>
      </nav>
      <div className="sign-up-button">Sign Up</div>
      <div className="social-media-icons">
        <div>
          <i className="fab fa-twitter fa-lg"></i>
        </div>
        <div>
          <i className="fab fa-facebook-f fa-lg"></i>
        </div>
        <div>
          <i className="fab fa-instagram fa-lg"></i>
        </div>
        <div>
          <i className="fab fa-reddit-alien fa-lg"></i>
        </div>
      </div>
    </section>
  );
};

export default HamburgerMenu;
