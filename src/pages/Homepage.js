import Header from "../components/Header";
import Hero from "../components/Hero";
import RelatedProducts from "../components/RelatedProducts";
import MoreProducts from "../components/MoreProducts";
import Section from "../components/Section";
import Partners from "../components/Partners";
import HowTo from "../components/HowTo";
import ConnectivityImage from "../components/ConnectivityImage";
import Reviews from "../components/Reviews";
import FooterDesktop from "../components/FooterDesktop";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <RelatedProducts />
      <MoreProducts />
      <Section />
      <Partners />
      <HowTo />
      <ConnectivityImage />
      <Reviews />
      <FooterDesktop pHPPesoLogospng="/phppesologospng@2x.png" />
    </div>
  );
};

export default Homepage;
