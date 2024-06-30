import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FooterDesktop from "../components/FooterDesktop";
import "./Account.css";

const Account = () => {
  return (
    <div className="account-1920">
      <FrameComponent
        checkout="Welcome, Darnell"
        viewOrEditYourCartBeforeC="Your Personal Dashboard"
      />
      <FrameComponent1 />
      <FooterDesktop />
    </div>
  );
};

export default Account;
