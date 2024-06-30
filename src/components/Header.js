import PropTypes from "prop-types";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="navbar">
        <div className="logo-parent">
          <Link to="/" className="logo">
            <img className="vector-icon" alt="" src="/vector.svg"/>
            <h3 className="apexsim-hub">Apexsim Hub</h3>
          </Link>

          <div className="nav-links">
          <nav className="nav-list">
            <Link to="/supported-countries" className="plans">Plans</Link>
              <div className="faq">FAQ</div>
              <div className="item-link">Contact Us</div>
            </nav>
            <div className="link">
              <Link to="/how-it-works" className="how-esims-work">How eSIMs work</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
