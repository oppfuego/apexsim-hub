import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={`installation-instructions-parent ${className}`}>
      <div className="installation-instructions">
        <h3 className="heading-44">» Timing</h3>
        <div className="emphasis-strong-container">
          <span>Install on the day of travel to Thailand.</span>
          <span className="span"> </span>
        </div>
      </div>
      <div className="frame-parent2">
        <div className="strong-parent">
          <h3 className="strong">» ️ Important</h3>
          <div className="qr-code-can-container">
            <p className="qr-code-can">
              QR code can be added only once*.  Remove only if you’re done with
              the SIM.
            </p>
            <p className="new-ios-16-quick-transfer">
              <span>*New: (</span>
              <span className="ios-16-quick">iOS 16 Quick Transfer</span>
              <span className="span1">)</span>
            </p>
          </div>
        </div>
        <h3 className="heading-45">» Refunds</h3>
        <div className="request-a-refund-if-you-did-no-wrapper">
          <div className="request-a-refund">
            Request a refund if you did not install the eSIM.
          </div>
        </div>
        <div className="strong-group">
          <h3 className="strong1">» Slow speeds</h3>
          <div className="try-restarting-your">
            Try restarting your phone if you are not getting full speeds.
          </div>
        </div>
      </div>
      <div className="strong-parent1">
        <h3 className="strong2">» Check Balance</h3>
        <div className="dial-1019-to-check">
          Dial: *101*9#📞 to check balance.
        </div>
      </div>
      <div className="strong-parent2">
        <h3 className="strong3">» Data Balance</h3>
        <div className="dial-10119-to-check-you-wrapper">
          <div className="dial-10119-to-check">
            Dial: *101*1*9#📞 to check your remaining data.
          </div>
        </div>
        <h3 className="strong4">» Phone Number</h3>
        <div className="printed-in-local">
          Printed in local format below the QR code or dial: *102*9#📞 to see
          your phone number.  Needed to add phone credit. Country code is +66.
        </div>
      </div>
      <div className="frame-parent3">
        <div className="strong-parent3">
          <h3 className="strong5">» Recharge</h3>
          <div className="you-can-add">
            You can add credit for calls, sms and more data plans at
            Mobiletopup.com
          </div>
        </div>
        <div className="strong-parent4">
          <h3 className="strong6">» Expiry</h3>
          <div className="use-the-data">
            Use the data plan with in 60 days of your order. After activation,
            expires 60 days after last use.
          </div>
        </div>
        <div className="strong-parent5">
          <h3 className="strong7">» eSIM Details</h3>
          <div className="you-have-purchased">
            You have purchased the eSIM export version of the DTAC Happy Tourist
            SIM. The eSIM is bound by the terms and conditions of the Total
            Access Communication Public Company Limited (dtac).
          </div>
        </div>
      </div>
      <div className="installation-instructions1">
        <div className="separator1" />
      </div>
      <div className="installation-instructions2">
        <h3 className="heading-46">️  eSIM Review</h3>
        <div className="link-leave">
          Leave a website review.  Leave a Facebook Review.
        </div>
      </div>
      <div className="strong-esim-parent">
        <h3 className="strong8">️  eSIM Community</h3>
        <div className="learn-and-share">
          Learn and share at: /r/esims  Facebook Travel Data Group
        </div>
      </div>
      <div className="installation-instructions3">
        <div className="separator2" />
      </div>
      <div className="frame-parent4">
        <div className="heading-3-strong-customer-parent">
          <h3 className="heading-314">Customer Support</h3>
          <div className="strong-dtac-container">
            <p className="dtac-call-center">
              DTAC Call Center – Call 1678  – Multiple languages.  For eSIM
              usage issues.
            </p>
            <p className="esim-shop">{`eSIM Shop – Check the FAQ. `}</p>
            <p className="contact-us-for">
              Contact us for order issues, refunds or set up questions.  Contact
              Us.
            </p>
          </div>
        </div>
        <div className="separator3" />
      </div>
      <div className="heading-3-strong-additiona-parent">
        <h3 className="heading-315">Additional Data Plans</h3>
        <div className="after-your-first-container">
          <span>
            <p className="after-your-first-data-plan-is">
              <span>{`After your first data plan is finished, you can continue using the eSIM by adding credit and choosing any of these add on plans: `}</span>
              <span className="more-plans-listed">More plans listed here</span>
              <span className="and"> and</span>
            </p>
            <p className="here">
              <span>here</span>
              <span className="span2">.</span>
            </p>
          </span>
        </div>
        <img
          className="link-screen-shot-2021-12-31-"
          loading="lazy"
          alt=""
          src="/link--screenshot20211231at194036300x134png@2x.png"
        />
      </div>
      <div className="separator4" />
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
