import React from 'react'
import "./LandingNav.scss";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import FooterNav from "../../components/FooterNav/FooterNav";
import {Link} from 'react-router-dom';

const LandingNav = (props) => {
    const {handleLogin, handleSelection} = props;
  return (
    <div>
        <HeaderNav handleLogin ={handleLogin} handleSelection={handleSelection}/>
        <FooterNav handleLogin ={handleLogin} handleSelection={handleSelection}/>
    </div>
  )
}

export default LandingNav