import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`separator-parent ${className}`}>
      <div className="separator" />
      <h3 className="heading-210">
        How to to use eSIM on iPhone video from Apple
      </h3>
      <div className="iframe-body">
        <div className="youtube-video-player">
          <img className="image-icon" alt="" src="/image@2x.png" />
          <div className="video-controls">
            <div className="video-player-controls-parent">
              <div className="video-player-controls">
                <div className="play-button-container-parent">
                  <div className="play-button-container">
                    <div className="container2">
                      <img
                        className="link-photo-image-of-apple-su"
                        loading="lazy"
                        alt=""
                        src="/link--photo-image-of-apple-support@2x.png"
                      />
                    </div>
                    <div className="video-title-link">
                      <div className="link5">
                        <div className="how-to-activate">
                          How to activate an eSIM on your iPhone | Apple Support
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="button-play-svg-wrapper">
                    <img
                      className="button-play-svg"
                      loading="lazy"
                      alt=""
                      src="/button--play--svg.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="link-watch-on-youtube">
                <div className="watch-on">Watch on</div>
                <img
                  className="svg-icon"
                  loading="lazy"
                  alt=""
                  src="/svg.svg"
                />
              </div>
            </div>
          </div>
          <div className="button-menu-share">
            <div className="svg-wrapper">
              <img
                className="svg-icon1"
                loading="lazy"
                alt=""
                src="/svg-1.svg"
              />
            </div>
            <div className="container3">
              <div className="share">Share</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
