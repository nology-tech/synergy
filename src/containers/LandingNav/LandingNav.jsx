import React from "react";
import "./LandingNav.scss";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import FooterNav from "../../components/FooterNav/FooterNav";

const LandingNav = () => {
  return (
    <div>
      <HeaderNav />
      <div className = "signin__container">Landing Nav</div>
      <FooterNav />
    </div>
  );
};

export default LandingNav;
