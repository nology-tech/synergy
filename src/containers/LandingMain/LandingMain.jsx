import React from "react";
import Header from "../../components/Header/Header";
import features from "../../data/feature.js";
import FeaturesTile from "../../components/FeaturesTile/FeaturesTile";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import FooterNav from "../../components/FooterNav/FooterNav";
import "./LandingMain.scss";
import Button from "../../components/Button/Button";

const LandingMain = (props) => {
  const {username, setUserName} =props;

  const handleResetName = () => {
    setUserName("");
  };

  handleResetName();

  return (
    <div className="LandingMain">
      <HeaderNav />
      <Header />

      <div className="backgound__image">
        <img
          className="landing__image"
          src={require("../../assets/images/landing-main.png")}
          alt="main page image"
        />
      </div>

    
        <div className="bankClients">
          <h1 className="bankClients__title">
            Trusted by over 3,000 banks worldwide
          </h1>
          <div className="bankLogosImg">
            <img
              className="bankLogosImg__one"
              src={require("../../assets/images/logoipsum.png")}
              alt="main page image"
            />
            <img
              className="bankLogosImg__two"
              src={require("../../assets/images/logoipsum2.png")}
              alt="main page image"
            />
            <img
              className="bankLogosImg__three"
              src={require("../../assets/images/logoipsum3.png")}
              alt="main page image"
            />
          </div>
        </div>

        <div className="features">
          <h2 className="features__title">Our Award-Winning Features</h2>
          <FeaturesTile features={features} />
          <Button
            buttonStyle={"btn button-transparent"}
            buttonText={"Find Out More"}
          />
          {/* <button className="features__button">Find Out More</button> */}
        </div>
     

      <div className="converter">
        <h1 className="converter__title">Make A Conversation </h1>
        <h5 className="converter__subline">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut id
          fringila augue <br /> feugiat. Volutpat tortor ornare lectus praesent
          amet.
        </h5>
        <img
          className="converter__image"
          src={require("../../assets/images/converter.png")}
          alt="FX Convertion"
        />
      </div>
      <div className="currencies">
        <h1 className="currencies__title">View Latest Rates </h1>
        <h5 className="currencies__subline">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut id
          fringila augue <br /> feugiat. Volutpat tortor ornare lectus praesent
          amet.
        </h5>
        <img
          className="currencies__img"
          src={require("../../assets/images/currencies.png")}
          alt="latest FX rates"
        />
      </div>
      <FooterNav />
    </div>
  );
};

export default LandingMain;
