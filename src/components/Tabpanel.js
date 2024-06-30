import PropTypes from "prop-types";
import "./Tabpanel.css";

const Tabpanel = ({ className = "", anonymous }) => {
  return (
    <div className={`tabpanel ${className}`}>
      <div className="review-borders">
        <div className="horizontalborder">
          <h3 className="anonymous">{anonymous}</h3>
          <div className="review-verified">
            <img
              className="verifiedsvg-icon"
              loading="lazy"
              alt=""
              src="/verifiedsvg.svg"
            />
            <div className="verified-owner">Verified owner</div>
          </div>
        </div>
        <div className="review-ratings">
          <div className="review-rating-containers">
            <div className="review-rating-icons">
              <img className="container-icon7" alt="" src="/container-6.svg" />
              <img className="icon5" loading="lazy" alt="" src="/icon-5.svg" />
            </div>
            <div className="review-rating-icons-two">
              <img className="container-icon8" alt="" src="/container-7.svg" />
              <img className="icon6" loading="lazy" alt="" src="/icon-6.svg" />
            </div>
            <div className="review-rating-icons-three">
              <img className="container-icon9" alt="" src="/container-8.svg" />
              <img className="icon7" loading="lazy" alt="" src="/icon-5.svg" />
            </div>
            <div className="review-rating-icons-four">
              <img className="container-icon10" alt="" src="/container-9.svg" />
              <img className="icon8" loading="lazy" alt="" src="/icon-8.svg" />
            </div>
            <div className="review-rating-icons-five">
              <img
                className="container-icon11"
                alt=""
                src="/container-10.svg"
              />
              <img className="icon9" loading="lazy" alt="" src="/icon-9.svg" />
            </div>
          </div>
          <div className="review-comments">5/5</div>
        </div>
        <div className="paragraphbackgroundborder">
          <div className="its-a-very-container">
            <p className="its-a-very">It’s a very practical and flexible</p>
            <p className="program-to-me">program to me. Could I …</p>
            <p className="show-more">Show More</p>
          </div>
          <div className="week-ago">1 week ago</div>
        </div>
      </div>
    </div>
  );
};

Tabpanel.propTypes = {
  className: PropTypes.string,
  anonymous: PropTypes.string,
};

export default Tabpanel;
