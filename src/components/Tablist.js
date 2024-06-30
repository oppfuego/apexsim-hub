import PropTypes from "prop-types";
import "./Tablist.css";

const Tablist = ({ className = "" }) => {
  return (
    <div className={`tablist ${className}`}>
      <div className="tab4">
        <div className="ais-global-plan">{`AIS Global Plan `}</div>
        <img
          className="f30esvg-icon"
          loading="lazy"
          alt=""
          src="/1f30esvg.svg"
        />
      </div>
      <div className="asian-plan-tab">
        <div className="tab5">
          <div className="ais-asian-plan">{`AIS Asian Plan `}</div>
          <img
            className="f35csvg-icon"
            loading="lazy"
            alt=""
            src="/1f35csvg.svg"
          />
        </div>
      </div>
      <div className="tab6">
        <div className="orange-europe-plan">{`Orange Europe Plan `}</div>
        <img
          className="f1ea-1f1fasvg-icon"
          loading="lazy"
          alt=""
          src="/1f1ea1f1fasvg.svg"
        />
      </div>
    </div>
  );
};

Tablist.propTypes = {
  className: PropTypes.string,
};

export default Tablist;
