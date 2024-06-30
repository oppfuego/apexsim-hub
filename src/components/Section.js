import PropTypes from "prop-types";
import "./Section.css";

const Section = ({ className = "" }) => {
  return (
    <section className={`section2 ${className}`}>
      <div className="compatibility-content">
        <img
          className="compatibility-image-icon"
          loading="lazy"
          alt=""
          src="/9062097-1@2x.png"
        />
        <div className="heading-2-does-my-device-sup-parent">
          <h1 className="heading-28">Does my device support eSIM?</h1>
          <div className="check-if-your">
            Check if Your Device is Compatible with Our eSIM Service
          </div>
        </div>
        <div className="link2">
          <div className="all-supported-devices">all Supported Devices</div>
        </div>
      </div>
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
