import './newsletter.css';

const Newsletter = () => {
  return (
    <>
      <section id="newsletter-section">
        <div className="newsletter-section-container">
          <h1 className="newsletter-title">Subscribe to our Newsletter</h1>
          <p className="newsletter-tag">
            Get access to our latest recipes by joining the weekly newsletter
          </p>
          <div className="subscribe-btn">Subscribe</div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
