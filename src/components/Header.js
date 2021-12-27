import './header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/icons/logo.svg';
import HeaderVideoMp4 from '../assets/videos/header-video.mp4';
import HeaderVideoWebm from '../assets/videos/header-video.webm';
import HeaderImage from '../assets/images/headerbg.jpeg';
import SearchIcon from '../assets/icons/search.svg';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <header className="header">
        <div className="top-header">
          <div className="logo">
            <img className="logo-svg" src={Logo} alt="brand-name" />
          </div>
          <nav className="nav-bar">
            <ul className="nav-list">
              <Link to="/" className="effect-underline">
                <li className="list-item">Home</li>
              </Link>
              <Link to="/recipes" className="effect-underline">
                <li className="list-item">Recipes</li>
              </Link>
              <Link to="/" className="effect-underline">
                <li className="list-item">About</li>
              </Link>
              <Link to="/" className="effect-underline">
                <li className="list-item">Contact</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="main-header">
          <h1 className="main-header-title">
            It is even better than an expensive cookery book
          </h1>
          <p className="main-header-tag">
            Learn how to make your favourite restaurant’s dishes
          </p>
          <form className="main-header-form">
            <div className="main-header-search">
              <input
                className="search-input"
                type="text"
                placeholder="I want to make..."
                onChange={handleSearchInputChange}
                value={searchInput}
              />
            </div>
            <div className="search-icon">
              <img className="search-icon-svg" src={SearchIcon} alt="" />
            </div>
          </form>
        </div>
        <video playsInline autoPlay muted loop className="header-video">
          <source src={HeaderVideoMp4} type="video/mp4" />
          <source src={HeaderVideoWebm} type="video/webm" />
          <img
            className="header-img"
            src={HeaderImage}
            alt="background-cooking"
          />
        </video>
      </header>
    </>
  );
};

export default Header;
