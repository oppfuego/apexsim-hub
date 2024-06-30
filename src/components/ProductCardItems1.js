import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ProductCardItems1.css";
import { Link } from "react-router-dom";

const ProductCardItems1 = ({
  className = "",
  asiaDataPackage6GBDec2023,
  heading2AISSIM2FlyESIM6GB,
  prop,
  propHeight,
  propWidth,
  propMargin,
  propPosition,
  propTop,
  propLeft,
  propPadding,
}) => {
  const productCardItemsStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      margin: propMargin,
      position: propPosition,
      top: propTop,
      left: propLeft,
      padding: propPadding,
    };
  }, [
    propHeight,
    propWidth,
    propMargin,
    propPosition,
    propTop,
    propLeft,
    propPadding,
  ]);

  return (
    <div
      className={`product-card-items1 ${className}`}
      style={productCardItemsStyle}
    >
      <Link to="/product-description">
        <img
            className="asia-data-package-6gb-dec2023-icon1"
            loading="lazy"
            alt=""
            src={asiaDataPackage6GBDec2023}
        />
      </Link>

      <div className="product-card-items-inner">
        <div className="heading-2-ais-sim2fly-esim-6-group">
          <div className="heading-23">{heading2AISSIM2FlyESIM6GB}</div>
          <div className="frame-wrapper1">
            <div className="stars-fullsvg-fill-parent">
              <img
                className="stars-fullsvg-fill-icon1"
                loading="lazy"
                alt=""
                src="/starsfullsvg-fill.svg"
              />
              <div className="wrapper">
                <div className="div">{prop}</div>
              </div>
            </div>
          </div>
          <div className="link-add-to-cart-ais-sim2f-wrapper">
            <button className="link-add-to-cart-ais-sim2f1">
              <div className="add-to-cart1">Add to cart</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCardItems1.propTypes = {
  className: PropTypes.string,
  asiaDataPackage6GBDec2023: PropTypes.string,
  heading2AISSIM2FlyESIM6GB: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propMargin: PropTypes.any,
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propPadding: PropTypes.any,
};

export default ProductCardItems1;
