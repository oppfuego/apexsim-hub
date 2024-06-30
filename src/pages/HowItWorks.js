import Header from "../components/Header";
import FrameComponent4 from "../components/FrameComponent4";
import FooterDesktop1 from "../components/FooterDesktop1";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <Header />
      <main className="frame-container">
        <section className="frame-section">
          <div className="header-heading-1-dtac-happ-parent">
            <h1 className="header-heading">
              DTAC Happy Tourist eSIM Quick Start User Guide
            </h1>
            <h3 className="heading-36">Getting Started with DTAC Happy eSIM</h3>
          </div>
          <h3 className="strong-container">
            <span>{`» `}</span>
            <span className="qr-setup">QR setup</span>
          </h3>
          <div className="your-device-needs-container">
            <p className="your-device-needs">
              Your device needs an internet connection to download the SIM
              Profile the first time. You will not have signal till arrival in
              Thailand.
            </p>
            <p className="blank-line1">&nbsp;</p>
            <p className="note-some-users">{`Note: Some users report a spinning wheel and long install time.  This is a known issue and recommend not to interrupt the process.  Other users report an error. The eSIM will only activate in Thailand, and only works on the Thailand DTAC network.   `}</p>
          </div>
        </section>
        <FrameComponent4 />
      </main>
      <FooterDesktop1 />
    </div>
  );
};

export default HowItWorks;
