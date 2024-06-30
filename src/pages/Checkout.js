import FrameComponent from "../components/FrameComponent";
import CheckoutForm from "../components/CheckoutForm";
import FooterDesktop from "../components/FooterDesktop";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout-1920">
      <FrameComponent
        checkout="Checkout"
        viewOrEditYourCartBeforeC="View or edit your cart before checkout"
      />
      <CheckoutForm />
      <FooterDesktop />
    </div>
  );
};

export default Checkout;
