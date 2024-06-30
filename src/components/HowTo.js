import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./HowTo.css";

const HowTo = ({ className = "" }) => {
  return (
    <section className={`how-to ${className}`}>
      <div className="how-to-content">
        <div className="how-to-steps">
          <img
            className="step-image-icon"
            loading="lazy"
            alt=""
            src="/4121365-1@2x.png"
          />
          <div className="settings-instructions">
            <div className="go-to-settings">
              Go to Settings and tap either Cellular or Mobile Data
            </div>
            <h1 className="cite-step">STEP 1</h1>
          </div>
        </div>
      </div>
      <div className="delivery-warranty">
        <div className="delivery-support">
          <div className="delivery-icons">
            <div className="delivery-warranty-icons">
              <div className="delivery-warranty-figures">
                <img
                  className="figure-iphone-esim-delivery-"
                  loading="lazy"
                  alt=""
                  src="/figure--iphoneesimdeliveryicon1png@2x.png"
                />
                <div className="delivery-headings">
                  <h3 className="heading-310">Delivery</h3>
                  <div className="after-successful-payment-container">
                    <p className="after-successful-payment">
                      After successful payment, you will receive a QR code to
                      add your new
                    </p>
                    <p className="esim-into-your">
                      eSIM into your device. The eSIM additionally comes with a
                      +66 phone
                    </p>
                    <p className="number">number.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="delivery-warranty-icons1">
              <FrameComponent
                figureIphoneEsimWarrantyI="/figure--iphoneesimwarrantyicon1png@2x.png"
                heading3WarrantyAndRefund="Warranty and Refunds"
                weOfferALimitedWarrantyFo="We offer a limited warranty for your unused eSIM if there are any"
                issuesInstallingYourESIMF="issues installing your eSIM. For more review our terms."
              />
            </div>
            <FrameComponent
              figureIphoneEsimWarrantyI="/figure--iphoneesimsupporticon1png@2x.png"
              heading3WarrantyAndRefund="Support"
              weOfferALimitedWarrantyFo=" Apexsim Hub offers"
              issuesInstallingYourESIMF="24/7 multilingual support for network issues."
              propWidth="unset"
              propGap="32px"
              propFlex="1"
              propPadding="0px 0px 0px 0px"
              propMinWidth="380px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

HowTo.propTypes = {
  className: PropTypes.string,
};

export default HowTo;
