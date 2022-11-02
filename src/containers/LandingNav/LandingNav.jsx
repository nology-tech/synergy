import React from 'react'
import "./LandingNav.scss";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import FooterNav from "../../components/FooterNav/FooterNav";

const LandingNav = (props) => {
    const {handleLogin} = props;
  return (
    <div>
        <HeaderNav handleLogin ={handleLogin}/>
        <FooterNav />
    </div>
  )
}

export default LandingNav