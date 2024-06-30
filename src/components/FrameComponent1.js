import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`tab-links-parent ${className}`}>
      <div className="tab-links">
        <div className="tab">
          <div className="link-description">Description</div>
        </div>
        <div className="tab1">
          <div className="link-additional">Additional information</div>
        </div>
        <Button
          className="tab2"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#2b2929",
            fontSize: "16",
            background: "#fcfcfc",
            border: "#cfc8d8 solid 1px",
            borderRadius: "4px 4px 0px 0px",
            "&:hover": { background: "#fcfcfc" },
            width: 142.9,
            height: 43.6,
          }}
        >
          Reviews (113)
        </Button>
        <div className="tab3">
          <div className="link-q">{`Q & A (49)`}</div>
        </div>
      </div>
      <h1 className="heading-29">Description</h1>
      <h3 className="heading-12">eSIM Global Features</h3>
      <div className="customizable-plans-choose-fr-container">
        <ul className="customizable-plans-choose-fr">
          <li className="customizable-plans-choose-fr1">
            Customizable Plans: "Choose from a variety of data plans that suit
            your travel and usage needs. Whether you need a short-term plan for
            a vacation or a long-term plan for frequent travel, we've got you
            covered."
          </li>
          <li className="pay-as-you">Pay As You Go:</li>
          <li>
            "Enjoy the flexibility of pay-as-you-go plans, allowing you to only
            pay for the data you use without long-term commitments."
          </li>
        </ul>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
