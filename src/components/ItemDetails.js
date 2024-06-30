import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import ItemInfo from "./ItemInfo";
import PropTypes from "prop-types";
import "./ItemDetails.css";

const ItemDetails = ({ className = "" }) => {
  return (
    <div className={`item-details1 ${className}`}>
      <div className="cart-footer">
        <div className="header2">
          <div className="header-child" />
          <div className="summary-titles">
            <div className="product">Product</div>
          </div>
          <div className="header-labels">
            <div className="price">Price</div>
          </div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        <div className="cart-item">
          <div className="wrapper-product-thumbnail">
            <img
              className="product-thumbnail-icon"
              loading="lazy"
              alt=""
              src="/rectangle-4554@2x.png"
            />
          </div>
          <div className="fenty-beauty-50-off-gift-card-parent">
            <div className="fenty-beauty-50">
              Fenty Beauty 50% OFF Gift Card
            </div>
            <div className="discount-20-off">Discount: 20% OFF</div>
          </div>
          <div className="product-price">
            <div className="item-price">
              <div className="price-value">$120.00</div>
              <div className="credits1">12 Credits</div>
            </div>
            <div className="quantity-adjust">
              <div className="adjust-buttons">
                <div className="quantity-buttons-container">
                  <img
                    className="icon-plus1"
                    loading="lazy"
                    alt=""
                    src="/iconplus.svg"
                  />
                </div>
                <div className="icon-separator">3</div>
                <input className="price-buttons" type="checkbox" />
              </div>
              <FormControl
                className="item-time"
                variant="standard"
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  backgroundColor: "#022555",
                  borderRadius: "8px",
                  width: "100%",
                  height: "38px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "38px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "38px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "38px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "38px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#fff",
                    fontSize: 18,
                    fontWeight: "Regular",
                    fontFamily: "Avenir Next LT Pro",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "16px",
                  },
                }}
              >
                <InputLabel color="success" />
                <Select
                  color="success"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="16px"
                      height="16px"
                      src="/time-input.svg"
                      style={{ marginRight: "16px" }}
                    />
                  )}
                >
                  <MenuItem>Hourly</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
          </div>
          <div className="separator5">$120.00</div>
        </div>
      </div>
      <ItemInfo shoppingSpreeGiftCard="Shopping Spree Gift Card" />
      <ItemInfo shoppingSpreeGiftCard="Travel GiftCard" />
      <div className="cart-actions">
        <div className="action-divider" />
        <div className="action-buttons">
          <Button
            className="button1"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "18",
              borderColor: "#000",
              borderRadius: "4px",
              "&:hover": { borderColor: "#000" },
              width: 127,
              height: 54,
            }}
          >
            Go Back
          </Button>
          <Button
            className="button2"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#022555",
              borderRadius: "4px",
              "&:hover": { background: "#022555" },
              width: 136,
              height: 54,
            }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

ItemDetails.propTypes = {
  className: PropTypes.string,
};

export default ItemDetails;
