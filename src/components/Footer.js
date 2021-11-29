import './footer.css';
import Footer1 from '../assets/images/footer-1.jpg';
import Footer2 from '../assets/images/footer-2.jpg';
import Footer3 from '../assets/images/footer-3.jpg';
import Footer4 from '../assets/images/footer-4.jpg';
import Footer5 from '../assets/images/footer-5.jpg';
import Footer6 from '../assets/images/footer-6.jpg';

const Footer = () => {
  return (
    <footer>
      <div className="gallery-container">
        <img className="gallery" src={Footer1} alt="food-gallery" />
        <img className="gallery" src={Footer2} alt="food-gallery" />
        <img className="gallery" src={Footer3} alt="food-gallery" />
        <img className="gallery" src={Footer4} alt="food-gallery" />
        <img className="gallery" src={Footer5} alt="food-gallery" />
        <img className="gallery" src={Footer6} alt="food-gallery" />
      </div>
      <div className="footer-title">
        <h3>&#169; 2021 - All Rights Reserved</h3>
      </div>
    </footer>
  );
};

export default Footer;
