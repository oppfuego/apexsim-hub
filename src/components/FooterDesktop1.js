import PropTypes from "prop-types";
import "./FooterDesktop1.css";

const FooterDesktop1 = ({ className = "" }) => {
  return (
    <footer className={`footer-desktop1 ${className}`}>
      <div className="footer1">
        <div className="frame-parent5">
          <div className="heading-4-features-parent">
            <div className="heading-47">Features</div>
            <div className="item-link-esim-supporte-parent">
              <div className="item-link13">📲 eSIM Supported Devices</div>
              <div className="item-link14">🌐 SIM2Fly Supported Countries</div>
              <div className="item-link15">➕ SIM2Fly Addon Data Plans</div>
              <div className="item-link16">➕ SIM2Fly Top Up</div>
              <div className="item-link17">
                ❓ Adding an eSIM with a QR Code
              </div>
              <div className="item-link18">
                <div className="e-sim-devices-link-content">
                  <img
                    className="f1f9-1f1edsvg-icon1"
                    loading="lazy"
                    alt=""
                    src="/1f1f91f1edsvg.svg"
                  />
                </div>
                <div className="dtac-thailand-tourist1">
                  DTAC Thailand Tourist eSIM
                </div>
              </div>
              <div className="item-link19">📖 Blog</div>
            </div>
          </div>
          <div className="frame-parent6">
            <div className="heading-4-be-a-partner-parent">
              <div className="heading-48">Be a partner</div>
              <div className="item-link-affiliate-progra-parent">
                <div className="item-link20">Affiliate Program</div>
                <div className="item-link21">Affiliate Login</div>
              </div>
            </div>
            <div className="heading-4-downloads-group">
              <div className="heading-49">Downloads</div>
              <div className="plans-parent">
                <div className="plans3">Plans</div>
                <div className="faq2">FAQ</div>
                <div className="item-link22">Contact Us</div>
              </div>
            </div>
          </div>
          <div className="frame-parent7">
            <div className="heading-4-users-parent">
              <div className="heading-410">Users</div>
              <div className="nav-list2">
                <div className="item-link-order-history-parent">
                  <div className="item-link23">Order History</div>
                  <div className="item-link24">Lost password</div>
                </div>
              </div>
            </div>
            <div className="container4">
              <div className="list1">
                <div className="frame-parent8">
                  <div className="symbol-wrapper1">
                    <h1 className="symbol11"></h1>
                  </div>
                  <div className="data-plan-symbol">
                    <h1 className="symbol12"></h1>
                  </div>
                </div>
                <div className="symbol-parent2">
                  <h1 className="symbol13"></h1>
                  <div className="symbol-wrapper2">
                    <h1 className="symbol14"></h1>
                  </div>
                </div>
                <div className="symbol-parent3">
                  <h1 className="symbol15"></h1>
                  <div className="symbol-wrapper3">
                    <h1 className="symbol16"></h1>
                  </div>
                </div>
                <div className="symbol-parent4">
                  <h1 className="symbol17"></h1>
                  <div className="symbol-wrapper4">
                    <h1 className="symbol18"></h1>
                  </div>
                </div>
                <div className="symbol-parent5">
                  <h1 className="symbol19"></h1>
                  <div className="symbol-wrapper5">
                    <h1 className="symbol20"></h1>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="php-peso-logospng-icon1"
              rows={7}
              cols={19}
              alt=""
              src="/phppesologospng@2x.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterDesktop1.propTypes = {
  className: PropTypes.string,
};

export default FooterDesktop1;
