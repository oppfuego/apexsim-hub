import Header from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import DefinitionsList from "../components/DefinitionsList";
import FooterDesktop from "../components/FooterDesktop";
import "./CookiePolicy.css";

const CookiePolicy = () => {
  return (
    <div className="cookie-policy">
      <Header />
      <div className="policy-banner">
        <h1 className="cookie-policy1">Cookie Policy</h1>
      </div>
      <main className="policy-content">
        <div className="lilylamb-kids-we2">
          This Cookie Policy explains how [Your Company] ("we," "us," or "our")
          uses cookies and similar technologies on our website ([Your Website
          URL]). By using our website, you agree to the use of cookies as
          outlined in this policy. Please read this policy carefully to
          understand what cookies are, how we use them, and how you can manage
          your cookie preferences.
        </div>
        <div className="policy-headings">
          <h1 className="what-are-cookies-container">
            <ol className="what-are-cookies">
              <li>What Are Cookies?</li>
            </ol>
          </h1>
          <div className="frame-group">
            <div className="definition-of-cookies-parent">
              <h3 className="definition-of-cookies">
                1.1 Definition of Cookies
              </h3>
              <div className="cookies-are-small">
                Cookies are small text files that are placed on your device
                (computer, smartphone, or other electronic device) when you
                visit a website. Cookies are widely used by website owners to
                make their websites work, or to work more efficiently, as well
                as to provide reporting information.
              </div>
            </div>
            <div className="types-of-cookies-parent">
              <h3 className="types-of-cookies">1.2 Types of Cookies</h3>
              <div className="there-are-several-container">
                <p className="there-are-several">
                  There are several types of cookies, including:
                </p>
                <p className="blank-line3">&nbsp;</p>
                <ul className="first-party-cookies-these-are">
                  <li className="first-party-cookies-these">
                    First-Party Cookies: These are cookies set by the website
                    you are visiting.
                  </li>
                  <li className="third-party-cookies-these">
                    Third-Party Cookies: These are cookies set by a third party
                    other than the website you are visiting.
                  </li>
                  <li className="session-cookies-these">
                    Session Cookies: These cookies expire when you close your
                    web browser.
                  </li>
                  <li>
                    Persistent Cookies: These cookies remain on your device for
                    a set period or until you delete them.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent
          useOfGiftCards="How We Use Cookies"
          redemption="2.1 Essential Cookies"
          giftCardsCanBeRedeemedAtP="Essential cookies are necessary for the proper functioning of our website. These cookies enable core functionalities such as security, network management, and accessibility. Without these cookies, the website may not function properly."
          nonTransferable="2.2 Performance and Analytics Cookies"
          giftCardsAreNonTransferab="Performance and analytics cookies collect information about how users interact with our website. This information is used to improve the performance of our website and provide a better user experience. These cookies help us understand which pages are visited most often and any errors encountered by users."
          noCashRedemption="2.3 Functionality Cookies"
          giftCardsAreNotRedeemable="Functionality cookies allow our website to remember choices you make and provide enhanced, more personal features. For example, these cookies can remember your language preferences or region. The information these cookies collect may be anonymized, and they cannot track your browsing activity on other websites."
          expiration="2.4 Advertising and Targeting Cookies"
          giftCardsDoNotExpireHowev="Advertising and targeting cookies are used to deliver relevant advertisements to users. These cookies track your browsing habits and activity on our website and other websites to provide you with advertising that is more relevant to your interests. They also help us measure the effectiveness of advertising campaigns."
        />
        <DefinitionsList
          lostOrStolenGiftCards="Cookies Used on Our Website"
          responsibility="3.1 First-Party Cookies"
          yourCompanyIsNotResponsib="Our website uses first-party cookies for essential functionalities, such as user authentication and session management. These cookies are crucial for the operation of our website and cannot be disabled."
          safeguarding="3.2 Third-Party Cookies"
          usersShouldKeepTheirGiftC="We use third-party cookies provided by trusted partners for analytics, advertising, and other purposes. These third-party cookies are subject to the respective privacy policies of these external services."
        />
        <div className="cookie-management">
          <h1 className="managing-cookies">
            <ol className="managing-cookies1">
              <li>Managing Cookies</li>
            </ol>
          </h1>
          <div className="management-options">
            <div className="option-headings">
              <h3 className="browser-settings">4.1Browser Settings</h3>
              <div className="most-web-browsers">
                Most web browsers allow you to control cookies through their
                settings preferences. You can set your browser to accept or
                reject cookies, delete cookies, or notify you when a cookie is
                being set. Please refer to your browser's help section for
                instructions on how to manage cookies.
              </div>
            </div>
            <div className="option-headings1">
              <h3 className="opt-out-options">4.2 Opt-Out Options</h3>
              <div className="you-can-opt-container">
                <a
                  className="your-online-choices"
                  href="https://www.youronlinechoices.com/"
                  target="_blank"
                >
                  Your Online Choices
                </a>
              </div>
            </div>
            <div className="option-headings2">
              <h3 className="consequences-of-disabling">
                4.3 Consequences of Disabling Cookies
              </h3>
              <div className="if-you-choose">
                If you choose to disable cookies, some features of our website
                may not function properly or may become unavailable. Essential
                cookies are necessary for the website's operation, and disabling
                them may affect your ability to use certain parts of our
                website.
              </div>
            </div>
          </div>
        </div>
        <DefinitionsList
          lostOrStolenGiftCards="Changes to This Cookie Policy"
          responsibility="5.1 Policy Updates"
          yourCompanyIsNotResponsib="We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page, and the date of the latest revision will be indicated at the top of the policy."
          safeguarding="5.2 Continued Use"
          usersShouldKeepTheirGiftC="By continuing to use our website after any changes to this Cookie Policy, you accept the updated policy. We encourage you to review this policy periodically to stay informed about how we use cookies."
        />
        <div className="frame-div">
          <h1 className="contact-information6">
            <ol className="contact-information7">
              <li>Contact Information</li>
            </ol>
          </h1>
          <div className="if-you-have-container3">
            <p className="if-you-have3">
              If you have any questions or concerns about this Cookie Policy,
              please contact us at:
            </p>
            <p className="brandname-customer-support3">
              BrandName Customer Support
            </p>
            <p className="email-supportbrandnamecom3">{`Email: support@brandname.com `}</p>
            <p className="phone-1-800-123-45673">{`Phone: +1-800-123-4567 `}</p>
            <p className="address-123-main3">
              Address: 123 Main Street, Suite 456, City, Country, ZIP Code
            </p>
          </div>
        </div>
      </main>
      <FooterDesktop />
    </div>
  );
};

export default CookiePolicy;
