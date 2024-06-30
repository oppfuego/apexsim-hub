import Header from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import DefinitionsList from "../components/DefinitionsList";
import FooterDesktop from "../components/FooterDesktop";
import "./TermsConditions.css";

const TermsConditions = () => {
  return (
    <div className="terms-conditions">
      <Header />
      <div className="terms-and-conditions-wrapper">
        <h1 className="terms-and-conditions">Terms and Conditions</h1>
      </div>
      <main className="lilylamb-kids-we-us-or-parent">
        <div className="lilylamb-kids-we-container">
          <p className="welcome-to-your">
            Welcome to [Your Gift Card Website]. These terms and conditions
            outline the rules and regulations for the use of our website and the
            purchase and use of our gift cards.
          </p>
          <p className="by-accessing-this">
            By accessing this website and purchasing our gift cards, you accept
            these terms and conditions in full. Do not continue to use [Your
            Gift Card Website] if you do not accept all of the terms and
            conditions stated on this page.
          </p>
        </div>
        <div className="definitions-list">
          <h1 className="definitions">
            <ol className="definitions1">
              <li>Definitions</li>
            </ol>
          </h1>
          <div className="provisions-list">
            <div className="provisions-items">
              <h3 className="gift-card">1.1 Gift Card</h3>
              <div className="a-gift-card">
                A gift card is a prepaid stored-value money card issued by [Your
                Company] that can be used to purchase goods or services from
                participating merchants. It represents a monetary value
                equivalent to the amount loaded onto it and can be redeemed only
                at the specified merchants.
              </div>
            </div>
            <div className="cards-list">
              <h3 className="website">1.2 Website</h3>
              <div className="the-website-owned">
                The website owned and operated by [Your Company], located at
                [website URL], serves as the platform for purchasing and
                managing gift cards. The website includes all web pages,
                subdomains, and subparts of the site, and provides information,
                services, and functionalities related to our gift cards.
              </div>
            </div>
            <div className="user-terms-list">
              <div className="user">1.3 User</div>
              <div className="any-individual-or">
                Any individual or entity who accesses the website or purchases
                or uses a gift card is considered a user. This includes both
                registered and non-registered users, whether they purchase the
                gift card for themselves or receive it as a gift.
              </div>
            </div>
          </div>
        </div>
        <div className="definitions-list1">
          <h1 className="general-provisions">
            <ol className="general-provisions1">
              <li>General Provisions</li>
            </ol>
          </h1>
          <div className="frame-parent">
            <div className="acceptance-of-terms-parent">
              <h3 className="acceptance-of-terms">2.1 Acceptance of Terms</h3>
              <div className="by-accessing-and">
                By accessing and using our website and purchasing our gift
                cards, you agree to be bound by these terms and conditions, as
                well as any other applicable laws and regulations. This
                agreement constitutes a legally binding contract between you and
                [Your Company].
              </div>
            </div>
            <div className="modifications-to-terms-parent">
              <h3 className="modifications-to-terms">
                2.2 Modifications to Terms
              </h3>
              <div className="your-company-reserves">
                [Your Company] reserves the right to amend these terms and
                conditions at any time without prior notice. Any changes will be
                posted on this page and will take effect immediately upon
                posting. It is your responsibility to review these terms and
                conditions periodically. Continued use of the website or gift
                cards after any such changes shall constitute your consent to
                such changes.
              </div>
            </div>
            <div className="governing-law-parent">
              <h3 className="governing-law">2.3 Governing Law</h3>
              <div className="these-terms-and">
                These terms and conditions are governed by and construed in
                accordance with the laws of [Your Jurisdiction]. Any disputes
                arising out of or relating to these terms and conditions or the
                use of the website or gift cards will be subject to the
                exclusive jurisdiction of the courts of [Your Jurisdiction].
              </div>
            </div>
          </div>
        </div>
        <FrameComponent
          useOfGiftCards=" Use of Gift Cards"
          redemption="3.1 Redemption"
          giftCardsCanBeRedeemedAtP="Gift cards can be redeemed at participating merchants listed on our website. The list of participating merchants may change from time to time without notice. Users should check the website for the most current list of participating merchants before attempting to use their gift cards."
          nonTransferable="3.2 Non-Transferable"
          giftCardsAreNonTransferab="Gift cards are non-transferable and can only be used by the person to whom they were issued or the person who legitimately received them as a gift. They cannot be resold, transferred for value, or exchanged for cash, except where required by law."
          noCashRedemption="3.3 No Cash Redemption"
          giftCardsAreNotRedeemable="Gift cards are not redeemable for cash and cannot be returned for a cash refund, except where required by law. Any attempt to redeem a gift card for cash is strictly prohibited and may result in the deactivation of the gift card."
          expiration="3.4 Expiration"
          giftCardsDoNotExpireHowev="Gift cards do not expire. However, [Your Company] reserves the right to change this policy in the future with reasonable notice to users. Any changes to the expiration policy will be clearly communicated on our website and through other appropriate channels."
        />
        <div className="purchase-of-gift-cards-parent">
          <h1 className="purchase-of-gift-container">
            <ol className="purchase-of-gift-cards">
              <li>Purchase of Gift Cards</li>
            </ol>
          </h1>
          <div className="channels-list-parent">
            <div className="channels-list">
              <h3 className="purchasing-channels">4.1 Purchasing Channels</h3>
              <div className="gift-cards-can">
                Gift cards can be purchased on our website and at authorized
                retailers. When purchasing online, users must follow the
                instructions provided on the website and provide accurate and
                complete information.
              </div>
            </div>
            <div className="channels-list1">
              <h3 className="load-amounts">4.2 Load Amounts</h3>
              <div className="the-minimum-and">
                The minimum and maximum amounts that can be loaded onto a gift
                card are determined by [Your Company] and are subject to change.
                The current load limits are specified on our website. Users must
                ensure that they do not exceed the maximum load limit when
                purchasing or reloading a gift card.
              </div>
            </div>
            <div className="channels-list2">
              <h3 className="payment-methods">4.3 Payment Methods</h3>
              <div className="accepted-payment-methods">
                Accepted payment methods for purchasing gift cards include
                credit cards, debit cards, and other payment options as
                specified on our website. All transactions are subject to
                authorization and fraud checks. [Your Company] reserves the
                right to decline any purchase at its discretion.
              </div>
            </div>
            <div className="channels-list3">
              <h3 className="confirmation">4.4 Confirmation</h3>
              <div className="upon-successful-completion">
                Upon successful completion of a gift card purchase, users will
                receive a confirmation email with the details of the purchase.
                This email serves as proof of purchase and should be retained
                for future reference. In case of any discrepancies, users should
                contact customer support immediately.
              </div>
            </div>
            <div className="channels-list4">
              <h3 className="usage-restrictions">4.5 Usage Restrictions</h3>
              <div className="gift-cards-cannot">
                Gift cards cannot be used for illegal activities, including but
                not limited to the purchase of illegal goods or services. Any
                such use will result in the immediate deactivation of the gift
                card and may be reported to the appropriate authorities.
              </div>
            </div>
          </div>
        </div>
        <DefinitionsList
          lostOrStolenGiftCards="Lost or Stolen Gift Cards"
          responsibility="5.1 Responsibility"
          yourCompanyIsNotResponsib="[Your Company] is not responsible for lost or stolen gift cards. Lost or stolen cards will not be replaced or refunded. Users should treat their gift cards like cash and take appropriate measures to safeguard them."
          safeguarding="5.2 Safeguarding"
          usersShouldKeepTheirGiftC="Users should keep their gift cards in a safe place and not share the card number or security code with anyone. If a gift card is lost or stolen, users should report it immediately to customer support, although replacement or refund cannot be guaranteed."
        />
        <DefinitionsList
          lostOrStolenGiftCards="Refunds and Returns"
          responsibility="6.1 No Cash Refunds"
          yourCompanyIsNotResponsib="Gift cards cannot be returned or exchanged for cash, except as required by law. Once purchased, all sales of gift cards are final. Users should ensure that they understand this policy before making a purchase."
          safeguarding="6.2 Merchant Returns"
          usersShouldKeepTheirGiftC="If a product purchased with a gift card is returned, the return will be processed according to the return policy of the merchant where the purchase was made. Users should contact the merchant directly for any issues related to returns and exchanges."
        />
        <DefinitionsList
          lostOrStolenGiftCards="User Responsibilities"
          responsibility="7.1 Compliance"
          yourCompanyIsNotResponsib="Users must use the gift cards and website in compliance with all applicable laws and regulations. Any use of the gift cards or website that violates these terms and conditions or any applicable law is strictly prohibited."
          safeguarding="7.2 Prohibited Uses"
          usersShouldKeepTheirGiftC="Users must not use the website or gift cards for any unlawful or prohibited purpose. Prohibited uses include, but are not limited to, fraud, money laundering, and the purchase of illegal goods or services. Any such use will result in the immediate deactivation of the gift card and may be reported to the appropriate authorities."
        />
        <DefinitionsList
          lostOrStolenGiftCards="Privacy"
          responsibility="8.1 Data Collection"
          yourCompanyIsNotResponsib="[Your Company] is committed to protecting your privacy. Our [Privacy Policy] outlines how we collect, use, and protect your personal information. By using our website and purchasing our gift cards, you consent to the collection and use of your information as outlined in our [Privacy Policy]."
          safeguarding="8.2 Consent"
          usersShouldKeepTheirGiftC="By using our website and purchasing our gift cards, you consent to the collection and use of your information as outlined in our [Privacy Policy]. If you do not agree with our Privacy Policy, you should not use our website or purchase our gift cards."
        />
        <DefinitionsList
          lostOrStolenGiftCards="Limitation of Liability"
          responsibility="9.1 Indirect Damages"
          yourCompanyIsNotResponsib="[Your Company] is not responsible for any indirect, incidental, or consequential damages arising from the use or inability to use the gift cards or website. This includes, but is not limited to, damages for loss of profits, business interruption, or loss of data."
          safeguarding="9.2 Maximum Liability"
          usersShouldKeepTheirGiftC="[Your Company]'s liability for any claim related to the purchase or use of a gift card is limited to the amount of the gift card. In no event shall [Your Company]'s total liability to you for all damages, losses, and causes of action exceed the amount paid by you for the gift card."
        />
        <DefinitionsList
          lostOrStolenGiftCards="Amendments"
          responsibility="10.1 Right to Amend"
          yourCompanyIsNotResponsib="[Your Company] reserves the right to amend these terms and conditions at any time. Any changes will be posted on this page and will take effect immediately upon posting. Users should review these terms and conditions periodically to ensure that they are aware of any changes."
          safeguarding="10.2 User Responsibility"
          usersShouldKeepTheirGiftC="It is the user's responsibility to review these terms and conditions periodically. Continued use of the website or gift cards after any such changes shall constitute your consent to such changes. If you do not agree with the amended terms and conditions, you should not use the website or purchase gift cards."
        />
        <div className="governing-law-group">
          <h1 className="governing-law1">
            <ol className="governing-law2">
              <li>Governing Law</li>
            </ol>
          </h1>
          <div className="frame-wrapper">
            <div className="jurisdiction-parent">
              <h3 className="jurisdiction">11.1 Jurisdiction</h3>
              <div className="these-terms-and1">
                These terms and conditions are governed by and construed in
                accordance with the laws of [Your Jurisdiction]. Any disputes
                arising out of or relating to these terms and conditions or the
                use of the website or gift cards will be subject to the
                exclusive jurisdiction of the courts of [Your Jurisdiction].
              </div>
            </div>
          </div>
        </div>
        <div className="contact-information-parent">
          <h1 className="contact-information">
            <ol className="contact-information1">
              <li>Contact Information</li>
            </ol>
          </h1>
          <div className="if-you-have-any-questions-abou-wrapper">
            <div className="if-you-have-container">
              <p className="if-you-have">
                If you have any questions about these Terms or our services,
                please contact us at:
              </p>
              <p className="brandname-customer-support">{`BrandName, Customer Support `}</p>
              <p className="email-supportbrandnamecom">{`Email: support@brandname.com `}</p>
              <p className="phone-1-800-123-4567">{`Phone: +1-800-123-4567 `}</p>
              <p className="address-123-main">
                Address: 123 Main Street, Suite 456, City, Country, ZIP Code
              </p>
              <p className="blank-line">&nbsp;</p>
              <p className="by-using-brandnames">
                By using BrandName's services, you acknowledge that you have
                read, understood, and agree to be bound by these Terms and
                Conditions.
              </p>
            </div>
          </div>
        </div>
      </main>
      <FooterDesktop />
    </div>
  );
};

export default TermsConditions;
