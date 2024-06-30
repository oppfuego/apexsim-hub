import ProductCardItems1 from "./ProductCardItems1";
import PropTypes from "prop-types";
import "./MoreProducts.css";

const MoreProducts = ({ className = "" }) => {
  return (
    <section className={`more-products ${className}`}>
      <div className="more-product-title">
        <h1 className="heading-38">Global Coverage and Partner Networks</h1>
      </div>
      <div className="more-product-cards">
        <div className="more-product-card-items">
          <img
            className="asia-data-package-6gb-dec2023-icon2"
            loading="lazy"
            alt=""
            src="/asiadatapackage6gbdec2023600300x300png-4@2x.png"
          />
          <div className="more-card-details">
            <div className="heading-2-ais-sim2fly-esim-6-container">
              <div className="heading-25">Basic Plan- 1GB Data 30 Days</div>
              <div className="more-card-rating">
                <div className="more-rating-images">
                  <div className="more-full-star-icons">
                    <div className="more-full-star-image">
                      <img
                        className="stars-fullsvg-fill-icon2"
                        loading="lazy"
                        alt=""
                        src="/starsfullsvg-fill.svg"
                      />
                      <div className="more-full-star-placeholder">
                        <div className="more-full-star">$11.99</div>
                      </div>
                    </div>
                  </div>
                  <button className="link-add-to-cart-ais-sim2f2">
                    <div className="add-to-cart2">Add to cart</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductCardItems1
          asiaDataPackage6GBDec2023="/asiadatapackage6gbdec2023600300x300png-5@2x.png"
          heading2AISSIM2FlyESIM6GB="Standard Plan- 5GB Data 30 Days"
          prop="$9.00"
          propHeight="524px"
          propWidth="365px"
          propMargin="0 !important"
          propPosition="absolute"
          propTop="0px"
          propLeft="425px"
          propPadding="0px 0px 23.3px"
        />
        <ProductCardItems1
          asiaDataPackage6GBDec2023="/asiadatapackage6gbdec2023600300x300png-6@2x.png"
          heading2AISSIM2FlyESIM6GB="Pro Plan- 10GB Data 30 Days"
          prop="$22.00"
          propHeight="524px"
          propWidth="365px"
          propMargin="0 !important"
          propPosition="absolute"
          propTop="0px"
          propLeft="850px"
          propPadding="0px 0px 23.3px"
        />
        <div className="more-product-card-items1">
          <div className="asia-data-package-6gb-dec2023-">
            <div className="background">
              <b className="sale">Sale!</b>
            </div>
          </div>
          <div className="more-product-card-items-inner">
            <div className="heading-2-ais-sim2fly-esim-6-parent1">
              <div className="heading-26">{`Unlimited Plan-Unlimited Plan 30 Days `}</div>
              <div className="frame-wrapper2">
                <div className="stars-fullsvg-fill-group">
                  <img
                    className="stars-fullsvg-fill-icon3"
                    loading="lazy"
                    alt=""
                    src="/starsfullsvg-fill-7.svg"
                  />
                  <div className="frame-wrapper3">
                    <div className="more-cart-placeholders-parent">
                      <div className="more-cart-placeholders">$49.50</div>
                      <b className="more-cart-dividers">$45.00</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="link-add-to-cart-ais-sim2f-container">
                <button className="link-add-to-cart-ais-sim2f3">
                  <div className="add-to-cart3">Add to cart</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="more-product-card-items2">
          <div className="asia-data-package-6gb-dec2023-1">
            <div className="background1">
              <b className="sale1">Sale!</b>
            </div>
          </div>
          <div className="more-product-card-items-child">
            <div className="heading-2-ais-sim2fly-esim-6-parent2">
              <div className="heading-27">
                Custom Plan- Customizable Data Amount Flexible Validity Periods
              </div>
              <div className="frame-wrapper4">
                <div className="stars-fullsvg-fill-container">
                  <img
                    className="stars-fullsvg-fill-icon4"
                    loading="lazy"
                    alt=""
                    src="/starsfullsvg-fill-7.svg"
                  />
                  <div className="frame-wrapper5">
                    <div className="parent">
                      <div className="div1">$49.50</div>
                      <b className="b">$45.00</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="link-add-to-cart-ais-sim2f-frame">
                <div className="link-add-to-cart-ais-sim2f4">
                  <div className="add-to-cart4">Add to cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MoreProducts.propTypes = {
  className: PropTypes.string,
};

export default MoreProducts;
