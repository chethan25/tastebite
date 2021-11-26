import './header.css';
import Logo from '../assets/icons/logo.svg';
import HeaderVideoMp4 from '../assets/videos/header-video.mp4';
import HeaderVideoWebm from '../assets/videos/header-video.webm';
import HeaderImage from '../assets/images/headerbg.jpeg';
import SearchIcon from '../assets/icons/search.png';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="top-header">
          <div className="logo">
            <img className="logo-svg" src={Logo} alt="brand-name" />
          </div>
          <nav className="nav-bar">
            <ul className="nav-list">
              <a href="/">
                <li className="list-item">Home</li>
              </a>
              <a href="/">
                <li className="list-item">Recipes</li>
              </a>
              <a href="/">
                <li className="list-item">About</li>
              </a>
              <a href="/">
                <li className="list-item">Contact</li>
              </a>
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
          <img src={HeaderImage} alt="background-cooking" />
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
