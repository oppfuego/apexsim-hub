import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  figureIphoneEsimWarrantyI,
  heading3WarrantyAndRefund,
  weOfferALimitedWarrantyFo,
  issuesInstallingYourESIMF,
  propWidth,
  propGap,
  propFlex,
  propPadding,
  propMinWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      gap: propGap,
      flex: propFlex,
      padding: propPadding,
      minWidth: propMinWidth,
    };
  }, [propWidth, propGap, propFlex, propPadding, propMinWidth]);

  return (
    <div
      className={`figure-iphone-esim-warranty-parent ${className}`}
      style={frameDivStyle}
    >
      <img
        className="figure-iphone-esim-warranty-"
        loading="lazy"
        alt=""
        src={figureIphoneEsimWarrantyI}
      />
      <div className="heading-3-warranty-and-refun-parent">
        <h3 className="heading-39">{heading3WarrantyAndRefund}</h3>
        <div className="we-offer-a-container">
          <p className="we-offer-a">{weOfferALimitedWarrantyFo}</p>
          <p className="issues-installing-your">{issuesInstallingYourESIMF}</p>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  figureIphoneEsimWarrantyI: PropTypes.string,
  heading3WarrantyAndRefund: PropTypes.string,
  weOfferALimitedWarrantyFo: PropTypes.string,
  issuesInstallingYourESIMF: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propGap: PropTypes.any,
  propFlex: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default FrameComponent;
