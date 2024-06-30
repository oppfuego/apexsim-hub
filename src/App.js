import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductDescription from "./pages/ProductDescription";
import SupportedCountries from "./pages/SupportedCountries";
import HowItWorks from "./pages/HowItWorks";
import CartDetails from "./pages/CartDetails";
import TermsConditions from "./pages/TermsConditions";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/product-description":
        title = "";
        metaDescription = "";
        break;
      case "/supported-countries":
        title = "";
        metaDescription = "";
        break;
      case "/how-it-works":
        title = "";
        metaDescription = "";
        break;
      case "/cart-details-1920":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product-description" element={<ProductDescription />} />
      <Route path="/supported-countries" element={<SupportedCountries />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/cart-details-1920" element={<CartDetails />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/" element={<TermsConditions />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
    </Routes>
  );
}
export default App;
