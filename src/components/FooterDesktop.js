import PropTypes from "prop-types";
import "./FooterDesktop.css";
import { FaCcVisa } from "react-icons/fa";
import { FaCcJcb } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcApplePay } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaIdeal } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";




const FooterDesktop = ({ className = "", pHPPesoLogospng }) => {
  return (
    <footer className={`footer-desktop ${className}`}>
      <div className="footer">
        <div className="footer-features-users">
          <div className="footer-features-downloads">
            <div className="heading-4">Features</div>
            <div className="features-items">
              <div className="item-link1">📲 eSIM Supported Devices</div>
              <div className="item-link2">🌐 SIM2Fly Supported Countries</div>
              <div className="item-link3">➕ SIM2Fly Addon Data Plans</div>
              <div className="item-link4">➕ SIM2Fly Top Up</div>
              <div className="item-link5">❓ Adding an eSIM with a QR Code</div>
              <div className="item-link6">
                <div className="d-t-a-c-icon">
                  <img
                    className="f1f9-1f1edsvg-icon"
                    alt=""
                    src="/1f1f91f1edsvg.svg"
                  />
                </div>
                <div className="dtac-thailand-tourist">
                  DTAC Thailand Tourist eSIM
                </div>
              </div>
              <div className="item-link7">📖 Blog</div>
            </div>
          </div>
          <div className="partner-downloads">
            <div className="be-partner">
              <div className="heading-41">Be a partner</div>
              <div className="partner-items">
                <div className="item-link8">Affiliate Program</div>
                <div className="item-link9">Affiliate Login</div>
              </div>
            </div>
            <div className="heading-4-downloads-parent">
              <div className="heading-42">Downloads</div>
              <div className="downloads-list">
                <div className="plans2">Plans</div>
                <div className="faq1">FAQ</div>
                <div className="item-link10">Contact Us</div>
              </div>
            </div>
          </div>
          <div className="users-title-parent">
            <div className="users-title">
              <div className="heading-43">Users</div>
              <div className="nav-list1">
                <div className="users-links">
                  <div className="item-link11">Order History</div>
                  <div className="item-link12">Lost password</div>
                </div>
              </div>
            </div>
            <div className="container1">
              <div className="list">
                <div className="p-h-p-logo-container">
                  <div className="p-h-p-logo-image">
                    <h1 className="symbol"><FaCcVisa /></h1>
                  </div>
                  <h1 className="symbol1"><FaCcJcb/></h1>
                </div>
                <div className="symbol-parent">
                  <h1 className="symbol2"><SiAmericanexpress/></h1>
                  <h1 className="symbol3"><FaCcApplePay/></h1>
                </div>
                <div className="symbol-group">
                  <h1 className="symbol4"><FaPaypal/></h1>
                  <h1 className="symbol5"><FaGooglePay/></h1>
                </div>
                <div className="symbol-container">
                  <h1 className="symbol6"><FaIdeal/></h1>
                  <div className="symbol-wrapper">
                    <h1 className="symbol7"><IoLogoWechat/></h1>
                  </div>
                </div>
                <div className="symbol-parent1">
                  <h1 className="symbol8"><FaBitcoin/></h1>
                  <div className="symbol-frame">
                    <h1 className="symbol9"><FaEthereum/></h1>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="php-peso-logospng-icon"
              rows={7}
              cols={19}
              alt=""
              src={pHPPesoLogospng}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterDesktop.propTypes = {
  className: PropTypes.string,
  pHPPesoLogospng: PropTypes.string,
};

export default FooterDesktop;
