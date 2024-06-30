import Content from "../components/Content";
import ItemDetails from "../components/ItemDetails";
import CheckoutDetails from "../components/CheckoutDetails";
import FooterDesktop from "../components/FooterDesktop";
import "./CartDetails.css";

const CartDetails = () => {
  return (
    <div className="cart-details-1920">
      <Content />
      <section className="cart-items">
        <div className="items-container">
          <ItemDetails />
          <CheckoutDetails />
        </div>
      </section>
      <FooterDesktop pHPPesoLogospng="/phppesologospng@2x.png" />
    </div>
  );
};

export default CartDetails;
