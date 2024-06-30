import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content ${className}`}>
      <header className="header1">
        <div className="navbar1">
          <div className="logo-container">
            <div className="logo1">
              <img
                className="logo-icon"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <b className="apexsim-hub1">Apexsim Hub</b>
            </div>
            <div className="nav-links1">
              <nav className="nav-list3">
                <div className="plans4">Plans</div>
                <div className="faq3">FAQ</div>
                <div className="item-link25">Contact Us</div>
              </nav>
              <div className="link6">
                <div className="how-esims-work1">How eSIMs work</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="cart-content-wrapper">
        <div className="cart-content">
          <div className="cart-title">
            <h1 className="your-cart">Your Cart</h1>
          </div>
          <div className="view-or-edit">
            View or edit your cart before checkout
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
