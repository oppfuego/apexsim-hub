import PropTypes from "prop-types";
import "./DefinitionsList.css";

const DefinitionsList = ({
  className = "",
  lostOrStolenGiftCards,
  responsibility,
  yourCompanyIsNotResponsib,
  safeguarding,
  usersShouldKeepTheirGiftC,
}) => {
  return (
    <div className={`definitions-list2 ${className}`}>
      <h1 className="lost-or-stolen-container">
        <ol className="lost-or-stolen-gift-cards">
          <li>{lostOrStolenGiftCards}</li>
        </ol>
      </h1>
      <div className="frame-container">
        <div className="responsibility-parent">
          <h3 className="responsibility">{responsibility}</h3>
          <div className="your-company-is">{yourCompanyIsNotResponsib}</div>
        </div>
        <div className="safeguarding-parent">
          <h3 className="safeguarding">{safeguarding}</h3>
          <div className="users-should-keep">{usersShouldKeepTheirGiftC}</div>
        </div>
      </div>
    </div>
  );
};

DefinitionsList.propTypes = {
  className: PropTypes.string,
  lostOrStolenGiftCards: PropTypes.string,
  responsibility: PropTypes.string,
  yourCompanyIsNotResponsib: PropTypes.string,
  safeguarding: PropTypes.string,
  usersShouldKeepTheirGiftC: PropTypes.string,
};

export default DefinitionsList;
