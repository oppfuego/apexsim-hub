import Tabpanel from "./Tabpanel";
import PropTypes from "prop-types";
import "./Reviews.css";

const Reviews = ({ className = "" }) => {
  return (
    <section className={`reviews1 ${className}`}>
      <div className="reviews-tab">
        <h1 className="heading-313">What people think of us</h1>
        <div className="reviews-tabs">
          <Tabpanel anonymous="Anonymous" />
          <Tabpanel anonymous="sunyen yan" />
          <Tabpanel anonymous="Yong Fang" />
        </div>
      </div>
    </section>
  );
};

Reviews.propTypes = {
  className: PropTypes.string,
};

export default Reviews;
