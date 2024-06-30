import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ className = "" }) => {
  return (
    <section className={`hero ${className}`}>
      <div className="section">
        <div className="wavy-tech-29-single-11-1-parent">
          <img
            className="wavy-tech-29-single-11-1-icon"
            alt=""
            src="/wavy-tech29-single11-1@2x.png"
          />
          <div className="overlay" />
          <div className="frame-wrapper">
            <div className="frame-div">
              <div className="seamless-connectivity-anytime-wrapper">
                <h1 className="seamless-connectivity-anytime">
                  Seamless Connectivity, Anytime, Anywhere
                </h1>
              </div>
              <div className="experience-the-future">
                Experience the Future of Mobile Connectivity with eSIM
                Technology
              </div>
            </div>
          </div>
          <div className="section1">
            <img
              className="container-icon1"
              loading="lazy"
              alt=""
              src="/container.svg"
            />
            <div className="product-details-wrapper">
              <div className="product-details">
                <div className="product-header">
                  <h1 className="heading-37">
                    Wherever You Are, We're Here to Help
                  </h1>
                  <div className="product-reviews">
                    <div className="reviews">113 Reviews</div>
                    <div className="rating-stars">
                      <div className="star-icons">
                        <img
                          className="container-icon2"
                          alt=""
                          src="/container-1.svg"
                        />
                        <img className="icon" alt="" src="/icon.svg" />
                      </div>
                      <div className="star-icons1">
                        <img
                          className="container-icon3"
                          alt=""
                          src="/container-2.svg"
                        />
                        <img className="icon1" alt="" src="/icon-1.svg" />
                      </div>
                      <div className="star-icons2">
                        <img
                          className="container-icon4"
                          alt=""
                          src="/container-1.svg"
                        />
                        <img className="icon2" alt="" src="/icon.svg" />
                      </div>
                      <div className="star-icons3">
                        <img
                          className="container-icon5"
                          alt=""
                          src="/container-1.svg"
                        />
                        <img className="icon3" alt="" src="/icon.svg" />
                      </div>
                      <div className="star-icons4">
                        <img
                          className="container-icon6"
                          alt=""
                          src="/container-2.svg"
                        />
                        <img className="icon4" alt="" src="/icon-1.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <div className="supported-info">
                    <div className="countries-supported-15-container">
                      <p className="countries-supported-15">
                        144 countries supported! 15 Day plan. Single eSIM
                      </p>
                      <p className="for-easy-data">
                        for easy data roaming. Long term travel solution.
                      </p>
                    </div>
                    <img
                      className="pngable-icon-devops-logopng"
                      loading="lazy"
                      alt=""
                      src="/pngable-icondevopslogopng@2x.png"
                    />
                  </div>
                  <button className="link1">
                    <a className="learn-more">Learn More</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
