import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './header.css';
import Logo from '../../assets/icons/logo.svg';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <section id="recipes-header-section">
      <CSSTransition
        in={navbarOpen}
        unmountOnExit
        timeout={2000}
        classNames="hamburger-menu"
      >
        <HamburgerMenu navbarOpen={navbarOpen} handleToggle={handleToggle} />
      </CSSTransition>
      <div className="recipes-header-top-container">
        <div className="recipes-header-logo">
          <img
            className="recipes-header-logo-svg"
            src={Logo}
            alt="brand-name"
          />
        </div>
        <nav className="recipes-header-nav-bar">
          <ul className="recipes-header-nav-list">
            <Link to="/" className="effect-underline">
              <li className="recipes-header-list-item">Home</li>
            </Link>
            <Link to="/recipes" className="effect-underline">
              <li className="recipes-header-list-item">Recipes</li>
            </Link>
            <Link to="/" className="effect-underline">
              <li className="recipes-header-list-item">About</li>
            </Link>
            <Link to="/" className="effect-underline">
              <li className="recipes-header-list-item">Contact</li>
            </Link>
          </ul>
        </nav>
        <div className="recipes-header-icons">
          <div className="recipes-header-search-icon">
            <i className="fas fa-search fa-lg"></i>
          </div>
          <div className="recipes-header-bookmark-icon">
            <i className="fas fa-bookmark fa-lg"></i>
          </div>
          <div className="recipes-header-bars-icon" onClick={handleToggle}>
            <i className="fas fa-bars fa-2x"></i>
          </div>
        </div>
      </div>
      <div className="recipes-header-bottom-overlay">
        <div className="recipes-header-bottom-container">
          <div className="recipes-header-subheader">
            <p className="recipes-header-subheader-text">Recipes Archive</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
