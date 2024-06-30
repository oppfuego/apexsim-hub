import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./CheckoutDetails.css";

const CheckoutDetails = ({ className = "" }) => {
  return (
    <div className={`checkout-details ${className}`}>
      <div className="footer-separator">
        <TextField
          className="header3"
          placeholder="Checkout Details"
          variant="outlined"
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "54px",
              backgroundColor: "#94c0fb",
              borderRadius: "5px",
              fontSize: "18px",
            },
            "& .MuiInputBase-input": { color: "#1c1c1c" },
          }}
        />
      </div>
      <div className="shipping-details">
        <div className="subtotal-details">
          <div className="cart-subtotal">Cart Subtotal</div>
          <div className="total-separator">$360.00</div>
        </div>
      </div>
      <div className="summary-details">
        <div className="tax-items">
          <div className="shipping-labels">
            <div className="shipping-handling">{`Shipping & Handling`}</div>
            <div className="other-taxes">Other Taxes</div>
          </div>
          <div className="tax-labels">
            <div className="div4">$0.00</div>
            <div className="div5">$0.00</div>
          </div>
        </div>
      </div>
      <div className="tax-divider">
        <div className="summary-divider" />
      </div>
      <div className="checkout-content">
        <div className="grand-total-parent">
          <div className="grand-total">Grand Total</div>
          <div className="div6">$360.00</div>
        </div>
      </div>
    </div>
  );
};

CheckoutDetails.propTypes = {
  className: PropTypes.string,
};

export default CheckoutDetails;
