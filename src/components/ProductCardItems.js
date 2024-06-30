import PropTypes from "prop-types";
import "./ProductCardItems.css";
import {Link } from "react-router-dom";

const ProductCardItems = ({
  className = "",
  asiaDataPackage6GBDec2023,
  heading2AISSIM2FlyESIM6GB,
  emptyStarPlaceholders,
  emptyStarDividers,
}) => {
  return (
    <div className={`product-card-items ${className}`}>
      <Link to="/product-description">
        <img
            className="asia-data-package-6gb-dec2023-icon"
            loading="lazy"
            alt=""
            src={asiaDataPackage6GBDec2023}
        />
      </Link>

      <div className="card-details">
        <div className="heading-2-ais-sim2fly-esim-6-parent">
          <div className="heading-22">{heading2AISSIM2FlyESIM6GB}</div>
          <div className="card-rating">
            <div className="rating-images">
              <img
                className="stars-fullsvg-fill-icon"
                loading="lazy"
                alt=""
                src="/starsfullsvg-fill.svg"
              />
              <div className="empty-star-icons">
                <div className="empty-star-placeholders-parent">
                  <div className="empty-star-placeholders">
                    {emptyStarPlaceholders}
                  </div>
                  <b className="empty-star-dividers">{emptyStarDividers}</b>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-buttons">
            <button className="link-add-to-cart-ais-sim2f">
              <div className="add-to-cart">Add to cart</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCardItems.propTypes = {
  className: PropTypes.string,
  asiaDataPackage6GBDec2023: PropTypes.string,
  heading2AISSIM2FlyESIM6GB: PropTypes.string,
  emptyStarPlaceholders: PropTypes.string,
  emptyStarDividers: PropTypes.string,
};

export default ProductCardItems;
