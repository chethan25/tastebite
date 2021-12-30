import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import HamburgerMenu from './HamburgerMenu';

import Logo from '../../assets/icons/logo.svg';

import './header.css';

const Header = ({ headerTitle }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Toggle navbarOpen value whenever hamburger menu is opened or closed
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <section id="recipes-header-section">
      <CSSTransition
        in={navbarOpen}
        unmountOnExit
        timeout={800}
        classNames="hamburger-menu"
      >
        <HamburgerMenu handleToggle={handleToggle} />
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
          <div className="recipes-header-bookmark-icon" title="View Bookmarks">
            <i className="fas fa-bookmark fa-lg"></i>
          </div>
          <div className="recipes-header-adjust-icon" title="Change Theme">
            <i className="fas fa-adjust fa-lg"></i>
          </div>
          <div className="recipes-header-bars-icon" onClick={handleToggle}>
            <i className="fas fa-bars fa-2x"></i>
          </div>
        </div>
      </div>
      <div className="recipes-header-bottom-overlay">
        <div className="recipes-header-bottom-container">
          <div className="recipes-header-subheader">
            <p className="recipes-header-subheader-text">{headerTitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
