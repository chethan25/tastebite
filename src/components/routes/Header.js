import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../assets/icons/logo.svg';

const Header = () => {
  return (
    <section id="recipes-header-section">
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
