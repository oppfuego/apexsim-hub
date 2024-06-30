import ProductCardItems from "./ProductCardItems";
import ProductCardItems1 from "./ProductCardItems1";
import PropTypes from "prop-types";
import "./RelatedProducts.css";

const RelatedProducts = ({ className = "" }) => {
  return (
    <section className={`related-products ${className}`}>
      <div className="related-title">
        <h1 className="heading-24">eSIM Categories</h1>
      </div>
      <div className="product-cards">
        <ProductCardItems
          asiaDataPackage6GBDec2023="/asiadatapackage6gbdec2023600300x300png@2x.png"
          heading2AISSIM2FlyESIM6GB="eSIM 6GB Asia Plan"
          emptyStarPlaceholders="$25.00"
          emptyStarDividers="$18.00"
        />
        <ProductCardItems
          asiaDataPackage6GBDec2023="/asiadatapackage6gbdec2023600300x300png-1@2x.png"
          heading2AISSIM2FlyESIM6GB="eSIM Global 6GB Plan"
          emptyStarPlaceholders="$39.00"
          emptyStarDividers="$33.00"
        />
        <ProductCardItems1
          asiaDataPackage6GBDec2023="/asiadatapackage6gbdec2023600300x300png-2@2x.png"
          heading2AISSIM2FlyESIM6GB="eSIM 6GB Europe Plan"
          prop="$8.49"
        />
        <ProductCardItems1
          asiaDataPackage6GBDec2023="/asiadatapackage6gbdec2023600300x300png-3@2x.png"
          heading2AISSIM2FlyESIM6GB="eSIM 6GB Australia Plan"
          prop="$9.80"
          propHeight="502.7px"
          propWidth="unset"
          propMargin="unset"
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
          propPadding="unset"
        />
      </div>
    </section>
  );
};

RelatedProducts.propTypes = {
  className: PropTypes.string,
};

export default RelatedProducts;
