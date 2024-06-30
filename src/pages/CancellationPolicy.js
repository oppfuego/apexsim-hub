import Header from "../components/Header";
import DefinitionsList from "../components/DefinitionsList";
import FrameComponent1 from "../components/FrameComponent1";
import FooterDesktop from "../components/FooterDesktop";
import "./CancellationPolicy.css";

const CancellationPolicy = () => {
  return (
    <div className="cancellation-policy">
      <Header />
      <div className="cancellation-policy1">
        <h1 className="cancellation-policy2">Cancellation Policy</h1>
        <div className="please-refer-to">{`Please refer to our Terms and Conditions for further details regarding the use and redemption of the Shoes & Wallet Gift Card.`}</div>
      </div>
      <main className="lilylamb-kids-we-us-or-container">
        <div className="lilylamb-kids-we1">
          This Cancellation Policy outlines the terms and conditions regarding
          the cancellation of gift card purchases from [Your Gift Card Website].
          By purchasing a gift card from our website, you agree to the terms of
          this cancellation policy. Please read it carefully.
        </div>
        <DefinitionsList
          lostOrStolenGiftCards="General Cancellation Policy"
          responsibility="1.1 No Cancellations"
          yourCompanyIsNotResponsib="Once a gift card has been purchased from [Your Gift Card Website], the sale is considered final. Gift card purchases cannot be canceled and are non-refundable, except where required by law. Please ensure that all details are correct before completing your purchase."
          safeguarding="1.2 Exceptions"
          usersShouldKeepTheirGiftC="In certain exceptional circumstances, and at the sole discretion of [Your Company], a cancellation request may be considered. These circumstances include, but are not limited to, technical errors during the purchase process or unauthorized transactions. Any decision to allow a cancellation is made on a case-by-case basis and is final."
        />
        <DefinitionsList
          lostOrStolenGiftCards=" Eligibility for Cancellations"
          responsibility="2.1 Unauthorized Transactions"
          yourCompanyIsNotResponsib="If you believe that a gift card purchase was made without your authorization, you must contact our customer support team immediately. Unauthorized transactions may be eligible for cancellation if reported promptly. You may be required to provide documentation or evidence supporting your claim."
          safeguarding="2.2 Technical Errors"
          usersShouldKeepTheirGiftC="If you experience a technical error during the purchase process that results in an incorrect charge or duplicate charge, you may be eligible for a cancellation. Please contact our customer support team with the details of the error, including any relevant transaction IDs or screenshots."
        />
        <FrameComponent1
          refundRequestProcess="Cancellation Request Process"
          toRequestARefundContactOu="To request a cancellation, contact our customer support team at [Email] or [Phone Number]. Provide the following information:"
          aDetailedExplanationOfThe="A detailed explanation of the reason for the cancellation request"
          reviewAndProcessing="3.2 Review and Processing"
          ourCustomerSupportTeamWil="Our customer support team will review your cancellation request and may ask for additional information or documentation. Cancellation requests are typically processed within [X] business days. You will be notified of the outcome of your request via email."
          approvedRefunds="3.3  Approved Cancellations"
          ifYourRefundRequestIsAppr="If your cancellation request is approved, the cancellation will be processed, and any funds will be returned to the original payment method used for the purchase. The time it takes for the funds to be credited to your account may vary depending on your bank or payment provider."
        />
        <DefinitionsList
          lostOrStolenGiftCards="Special Cases"
          responsibility="4.1 Incorrect Amounts Loaded"
          yourCompanyIsNotResponsib="If an incorrect amount was loaded onto your gift card due to an error, you may be eligible for a cancellation of the incorrect amount or an adjustment to the correct value. Please contact our customer support team with the details of the error."
          safeguarding="4.2 Lost or Stolen Gift Cards"
          usersShouldKeepTheirGiftC="Lost or stolen gift cards are generally not eligible for cancellation. Users are responsible for safeguarding their gift cards and treating them like cash. In certain circumstances, a replacement card may be issued at the discretion of [Your Company], but this does not constitute a cancellation."
        />
        <DefinitionsList
          lostOrStolenGiftCards="Non-Cancellable Items"
          responsibility="5.1 Promotional and Bonus Cards"
          yourCompanyIsNotResponsib="Promotional or bonus gift cards received as part of a promotion or special offer are not eligible for cancellation. These cards have no cash value and cannot be exchanged for cash or other gift cards."
          safeguarding="5.2Partially Used Gift Cards"
          usersShouldKeepTheirGiftC="Gift cards that have been partially used are not eligible for cancellation of the remaining balance. Once a gift card has been used, it cannot be returned or exchanged."
        />
        <DefinitionsList
          lostOrStolenGiftCards="Merchant Cancellations"
          responsibility="6.1 Product Returns"
          yourCompanyIsNotResponsib="If you return a product purchased with a gift card to a participating merchant, the return will be processed according to the merchant’s return policy. The merchant may issue a credit to the gift card or provide a store credit, but this is not managed by [Your Company]."
          safeguarding="6.2 Disputes with Merchants"
          usersShouldKeepTheirGiftC="Any disputes regarding purchases made with a gift card should be resolved directly with the merchant. [Your Company] is not responsible for resolving disputes related to merchant transactions."
        />
        <div className="contact-information-container">
          <h1 className="contact-information4">
            <ol className="contact-information5">
              <li>Contact Information</li>
            </ol>
          </h1>
          <div className="if-you-have-container2">
            <p className="if-you-have2">
              If you have any questions or concerns about this Cancellation
              Policy, please contact us at:
            </p>
            <p className="blank-line2">&nbsp;</p>
            <p className="brandname-customer-support2">
              BrandName Customer Support
            </p>
            <p className="email-supportbrandnamecom2">
              Email: support@brandname.com
            </p>
            <p className="phone-1-800-123-45672">Phone: +1-800-123-4567</p>
            <p className="address-123-main2">
              Address: 123 Main Street, Suite 456, City, Country, ZIP Code
            </p>
          </div>
        </div>
      </main>
      <FooterDesktop />
    </div>
  );
};

export default CancellationPolicy;
