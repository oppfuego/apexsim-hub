import PropTypes from "prop-types";
import "./Partners.css";

const Partners = ({ className = "" }) => {
  return (
    <section className={`partners ${className}`}>
      <div className="partner-logos">
        <h1 className="partnered-with">Partnered With</h1>
        <div className="partner-images">
          <img
            className="lets-roam-iconjpeg"
            loading="lazy"
            alt=""
            src="/lets-roam-iconjpeg@2x.png"
          />
          <img
            className="phonearena-iconjpeg"
            loading="lazy"
            alt=""
            src="/phonearena-iconjpeg@2x.png"
          />
          <img
            className="group-icon"
            loading="lazy"
            alt=""
            src="/group@2x.png"
          />
          <img
            className="travelgcca-iconpng"
            loading="lazy"
            alt=""
            src="/travelgcca-iconpng@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

Partners.propTypes = {
  className: PropTypes.string,
};

export default Partners;
