import Header from "../components/Header";
import Tablist from "../components/Tablist";
import FooterDesktop from "../components/FooterDesktop";
import "./SupportedCountries.css";

const SupportedCountries = () => {
  return (
    <div className="supported-countries">
      <Header />
      <main className="tablist-parent">
        <Tablist />
        <h1 className="link-global-container">
          <span className="link-global-container1">
            <span>Global Plan SIM2Fly</span>
            <span className="supported-countries1"> Supported Countries</span>
          </span>
        </h1>
        <section className="frame-group">
          <div className="asia-region-parent">
            <div className="asia-region">
              <h3 className="heading-3">Asia</h3>
              <div className="asia-countries">
                <div className="afghanistan-new">Afghanistan (New) </div>
                <div className="item-bangladesh">Bangladesh</div>
                <div className="bhutan-new">Bhutan (New)</div>
                <div className="bahrain-5g">Bahrain 5G</div>
                <div className="item-brunei">Brunei</div>
                <div className="item-brunei1">Cambodia</div>
                <div className="china-incl-tibet">China (incl Tibet) 5G</div>
                <div className="hong-kong-5g">Hong Kong 5G</div>
                <div className="item-india">India</div>
                <div className="indonesia-5g">Indonesia 5G</div>
                <div className="israel-5g">Israel 5G</div>
                <div className="japan-5g">Japan 5G</div>
                <div className="item-jordan">Jordan</div>
                <div className="kuwait-5g">Kuwait 5G</div>
                <div className="item-kyrgyzstan">Kyrgyzstan</div>
                <div className="laos">Laos</div>
                <div className="macau">Macau</div>
                <div className="malaysia">Malaysia</div>
                <div className="mongolia-new">Mongolia (New)</div>
                <div className="myanmar-currently-blocked">
                  Myanmar (Currently Blocked)
                </div>
                <div className="item-nepal">Nepal</div>
                <div className="oman-5g">Oman 5G</div>
                <div className="item-papua">Papua New Guinea</div>
                <div className="pakistan">Pakistan</div>
                <div className="philippines-5g">Philippines 5G</div>
                <div className="qatar-5g">Qatar 5G</div>
                <div className="saudi-arabia-5g">Saudi Arabia 5G</div>
                <div className="singapore-5g">Singapore 5G</div>
                <div className="south-korea-5g">South Korea 5G</div>
                <div className="item-sri">Sri Lanka</div>
                <div className="tajikistan-new">Tajikistan (New)</div>
                <div className="taiwan-5g">Taiwan 5G</div>
                <div className="united-arab-emirates">
                  United Arab Emirates (UAE) – Dubai, Abu Dhabi 5G
                </div>
                <div className="item-uzbekistan">Uzbekistan</div>
                <div className="vietnam-5g">Vietnam 5G</div>
              </div>
            </div>
            <div className="africa-region">
              <h3 className="heading-31">Africa</h3>
              <div className="africa-countries">
                <div className="item-chad">Chad</div>
                <div className="mauritius-new">Mauritius (New)</div>
                <div className="congo-democratic-republic">
                  Congo (Democratic Republic Of)
                </div>
                <div className="congo-republic-egypt">Congo Republic Egypt</div>
                <div className="gabon">Gabon</div>
                <div className="ghana">Ghana</div>
                <div className="kenya">Kenya</div>
                <div className="madagascar-republic">Madagascar Republic</div>
                <div className="item-malawi">Malawi</div>
                <div className="nigeria">Nigeria</div>
                <div className="reunion">Reunion</div>
                <div className="south-africa">South Africa</div>
                <div className="senegal-new">Senegal (New)</div>
                <div className="seychelles-new">Seychelles (New)</div>
                <div className="swaziland-new">Swaziland (New)</div>
                <div className="item-tanzania">Tanzania</div>
                <div className="uganda">Uganda</div>
                <div className="tunisia">Tunisia</div>
              </div>
            </div>
            <div className="europe-region">
              <h3 className="heading-32">Europe</h3>
              <div className="europe-countries">
                <div className="item-land">Åland Islands</div>
                <div className="albania">Albania</div>
                <div className="armenia">Armenia</div>
                <div className="austria-5g">Austria 5G</div>
                <div className="item-azerbaijan">Azerbaijan</div>
                <div className="belgium-5g">Belgium 5G</div>
                <div className="item-belarus">Belarus</div>
                <div className="bosnia-herzegovina">{`Bosnia & Herzegovina (New)`}</div>
                <div className="bulgaria-5g">Bulgaria 5G</div>
                <div className="croatia-5g">Croatia 5G</div>
                <div className="cyprus-5g-new">Cyprus  5G (New)</div>
                <div className="item-cyprus">Cyprus (Northern)</div>
                <div className="czech-republic-5g">Czech Republic 5G </div>
                <div className="denmark-5g">Denmark 5G</div>
                <div className="estonia-5g">Estonia 5G</div>
                <div className="item-faroe">Faroe Islands</div>
                <div className="finland-5g">Finland 5G</div>
                <div className="france-5g">France 5G</div>
                <div className="item-georgia">Georgia</div>
                <div className="germany-5g">Germany 5G</div>
                <div className="gibraltar-new">Gibraltar (New)</div>
                <div className="greenland-new">Greenland (New)</div>
                <div className="guernsey-new">Guernsey (New)</div>
                <div className="greece-5g">Greece 5G</div>
                <div className="hungary-5g">Hungary 5G</div>
                <div className="iceland-5g">Iceland 5G</div>
                <div className="isle-of-man-new">Isle of Man (New)</div>
                <div className="item-ireland">Ireland</div>
                <div className="italy-5g">Italy 5G</div>
                <div className="item-kazakhstan">Kazakhstan</div>
                <div className="latvia-5g">Latvia  5G</div>
                <div className="item-liechtenstein">Liechtenstein</div>
                <div className="lithuania">Lithuania</div>
                <div className="luxembourg-5g">Luxembourg 5G</div>
                <div className="malta-5g">Malta 5G</div>
                <div className="item-macedonia">Macedonia</div>
                <div className="monaco-new">Monaco (New)</div>
                <div className="item-moldova">Moldova</div>
                <div className="montenegro">Montenegro</div>
                <div className="north-ireland-5g">North Ireland 5G (New)</div>
                <div className="northern-cyprus-new">Northern Cyprus (New)</div>
                <div className="netherlands-5g">Netherlands 5G</div>
                <div className="norway-5g">Norway 5G</div>
                <div className="poland-5g">Poland 5G</div>
                <div className="portugal-5g">Portugal 5G</div>
                <div className="russia-5g">Russia 5G</div>
                <div className="san-marino-5g">San Marino 5G</div>
                <div className="item-serbia">Serbia</div>
                <div className="scotland-5g-new">Scotland 5G (New)</div>
                <div className="slovakia-5g">Slovakia 5G</div>
                <div className="slovak-republic-5g">
                  Slovak Republic 5G (New) 
                </div>
                <div className="spain-5g">Spain  5G</div>
                <div className="sweden-5g">Sweden  5G</div>
                <div className="switzerland-5g">Switzerland 5G</div>
                <div className="item-svalbard">Svalbard and Jan Mayen</div>
                <div className="turkey-5g">Turkey 5G</div>
                <div className="item-ukraine">Ukraine</div>
                <div className="united-kingdom-uk">United Kingdom UK 5G</div>
                <div className="vatican-city-5g">Vatican City 5G</div>
                <div className="wales-5g-new">Wales 5G (New)</div>
              </div>
            </div>
            <div className="north-america-region">
              <h2 className="heading-33">North America</h2>
              <div className="north-america-countries">
                <div className="canada-5g">Canada  5G</div>
                <div className="item-costa">Costa Rica</div>
                <div className="dominican-new">Dominican (New)</div>
                <div className="item-el">El Salvador</div>
                <div className="guatemala">Guatemala</div>
                <div className="honduras">Honduras</div>
                <div className="mexico">Mexico</div>
                <div className="nicaragua">Nicaragua</div>
                <div className="panama">Panama</div>
                <div className="puerto-rico-5g">Puerto Rico 5G </div>
                <div className="usa-incl-hawaii">USA (incl Hawaii) 5G</div>
                <div className="united-states-virgin">
                  United States Virgin Islands (New)
                </div>
              </div>
            </div>
            <div className="region-headings">
              <h2 className="heading-34">Oceania and Pacific Islands</h2>
              <div className="region-countries">
                <div className="australia-5g">Australia 5G</div>
                <div className="fiji-5g">Fiji 5G</div>
                <div className="item-guam">Guam</div>
                <div className="nauru">Nauru</div>
                <div className="new-zealand-5g">New Zealand 5G</div>
                <div className="item-tonga">Tonga</div>
                <div className="solomon-islands-new">Solomon Islands (New)</div>
                <div className="vanuatu-new">Vanuatu (New)</div>
                <div className="western-samoa-new">Western Samoa (New)</div>
              </div>
            </div>
            <div className="region-headings1">
              <h2 className="heading-35">South America</h2>
              <div className="item-argentina-parent">
                <div className="item-argentina">Argentina</div>
                <div className="brazil">Brazil</div>
                <div className="bolivia-new">Bolivia (New)</div>
                <div className="chile">Chile</div>
                <div className="colombia">Colombia</div>
                <div className="ecuador">Ecuador</div>
                <div className="paraguay">Paraguay</div>
                <div className="peru">Peru</div>
                <div className="uruguay">Uruguay</div>
              </div>
            </div>
          </div>
          <img
            className="container-icon"
            loading="lazy"
            alt=""
            src="/container1.svg"
          />
        </section>
      </main>
      <FooterDesktop pHPPesoLogospng="/phppesologospng@2x.png" />
    </div>
  );
};

export default SupportedCountries;
