import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./PageBody.css";

const PageBody = ({ className = "" }) => {
  return (
    <section className={`page-body ${className}`}>
      <div className="sign-in-container">
        <div className="sign-in2">
          <div className="sign-in-content1">
            <h1 className="sign-up">Sign up</h1>
            <div className="sign-up-to">
              Sign up to get rewards, and many more
            </div>
          </div>
          <form className="form-fields">
            <div className="name-address-username">
              <TextField
                className="name-address-fields"
                placeholder="Your Name"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d1d1d1" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    backgroundColor: "#fff",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <TextField
                className="email-country-password"
                placeholder="Email"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d1d1d1" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    backgroundColor: "#fff",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
            </div>
            <div className="name-address-username1">
              <TextField
                className="name-address-username-child"
                placeholder="Address"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d1d1d1" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    backgroundColor: "#fff",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <div className="country-parent">
                <div className="country1">Country</div>
                <img
                  className="email-country-input"
                  alt=""
                  src="/email-country-input.svg"
                />
              </div>
            </div>
            <div className="name-address-username2">
              <TextField
                className="name-address-username-item"
                placeholder="Username"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="16px" height="16px" src="/frame-153-1.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#d1d1d1" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    backgroundColor: "#fff",
                    paddingRight: "11px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <div className="password-parent">
                <div className="password1">Password</div>
                <img className="frame-item" alt="" src="/frame-153-1.svg" />
              </div>
            </div>
            <Button
              className="button4"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#022555",
                borderRadius: "4px",
                "&:hover": { background: "#022555" },
                height: 54,
              }}
            >
              Sign Up
            </Button>
          </form>
          <div className="or-sign-up">or, sign up with</div>
          <div className="social-sign-up">
            <img
              className="social-buttons-icon"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
            <img
              className="social-buttons-icon1"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
            <img
              className="social-buttons-icon2"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="background-icon1"
        loading="lazy"
        alt=""
        src="/rectangle-491@2x.png"
      />
    </section>
  );
};

PageBody.propTypes = {
  className: PropTypes.string,
};

export default PageBody;
