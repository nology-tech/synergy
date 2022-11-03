import React from "react";
import "./LandingNav.scss";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import FooterNav from "../../components/FooterNav/FooterNav";

const LandingNav = (props) => {
  const { handleSelection } = props;
  return (
    <div>
      <HeaderNav handleSelection={handleSelection} />
      <FooterNav handleSelection={handleSelection} />
    </div>
  );
};

export default LandingNav;
