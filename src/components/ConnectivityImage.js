import BackgroundBorder from "./BackgroundBorder";
import PropTypes from "prop-types";
import "./ConnectivityImage.css";

const ConnectivityImage = ({ className = "" }) => {
  return (
    <section className={`connectivity-image ${className}`}>
      <div className="connectivity">
        <div className="connectivity-experience">
          <div className="seamless-connectivity-anytime-parent">
            <h1 className="seamless-connectivity-anytime1">
              Seamless Connectivity, Anytime, Anywhere
            </h1>
            <h3 className="experience-the-future1">
              Experience the Future of Mobile Connectivity with eSIM Technology
            </h3>
          </div>
          <img
            className="online-app-for-tourism-travele-icon"
            loading="lazy"
            alt=""
            src="/onlineappfortourismtravelerwithmobilephoneandpassportbookingorbuypng@2x.png"
          />
        </div>
      </div>
      <div className="plans1">
        <div className="global-thailand">
          <div className="plans-headings">
            <BackgroundBorder
              heading3GlobalPlanESIM="Global Plan eSIM"
              gB15Days="6 GB / 15 Days"
              extendable="$33"
            />
            <div className="backgroundborder1">
              <div className="overlay1">
                <div className="heading-312">
                  <h3 className="asian-plan-esim">{`Asian Plan eSIM `}</h3>
                </div>
                <div className="gb-8-days-wrapper">
                  <div className="gb-8">6 GB / 8 Days</div>
                </div>
              </div>
              <div className="container">
                <div className="div2">$18</div>
              </div>
              <div className="frame-parent1">
                <div className="link-wrapper">
                  <div className="link4">
                    <div className="learn-more2">Learn More</div>
                  </div>
                </div>
                <div className="reloadable-extendable-container1">
                  <span>
                    <p className="reloadable-extendable1">
                      • Reloadable • Extendable
                    </p>
                    <p className="add-data-from1">
                      •Add data from $2.50 per GB
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <BackgroundBorder
              heading3GlobalPlanESIM="Thailand Plan eSIM"
              gB15Days="15 GB / 16 Days"
              extendable="$11"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

ConnectivityImage.propTypes = {
  className: PropTypes.string,
};

export default ConnectivityImage;
