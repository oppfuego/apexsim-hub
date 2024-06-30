import PropTypes from "prop-types";
import "./BackgroundBorder.css";

const BackgroundBorder = ({
  className = "",
  heading3GlobalPlanESIM,
  gB15Days,
  extendable,
}) => {
  return (
    <div className={`backgroundborder ${className}`}>
      <div className="paragraphoverlay">
        <h3 className="heading-311">{heading3GlobalPlanESIM}</h3>
        <div className="plans-days">
          <div className="gb-15">{gB15Days}</div>
        </div>
      </div>
      <div className="extendable">
        <div className="extendable1">{extendable}</div>
      </div>
      <div className="plans-links">
        <div className="plans-learn">
          <div className="link3">
            <div className="learn-more1">Learn More</div>
          </div>
        </div>
        <div className="reloadable-extendable-container">
          <span>
            <p className="reloadable-extendable">• Reloadable • Extendable</p>
            <p className="add-data-from">•Add data from $2.50 per GB</p>
          </span>
        </div>
      </div>
    </div>
  );
};

BackgroundBorder.propTypes = {
  className: PropTypes.string,
  heading3GlobalPlanESIM: PropTypes.string,
  gB15Days: PropTypes.string,
  extendable: PropTypes.string,
};

export default BackgroundBorder;
