import React from "react";
import "./NavMenu.scss";
import wallet from "../../assets/images/clarity_wallet-line.png";
import liverates from "../../assets/images/bi_graph-up-arrow.png";
import convert from "../../assets/images/ep_refresh.png";
import contacts from "../../assets/images/fluent_people-16-regular.png";
import signout from "../../assets/images/Group 66.png";
import transfer from "../../assets/images/transfer-icon.png";
import mainLogo from "../../assets/images/synergy_main_logo.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import {FiLogOut} from "react-icons/fi";

const NavMenu = () => {
  const walletImg = wallet;
  const ratesImg = liverates;
  const convertImg = convert;
  const contactsImg = contacts;
  const transferImg = transfer;
  const signoutImg = signout;
  const buttonSignOut = <FiLogOut />; 

  return (
    <div className="sidemenu-wrapper" id="slide">
      <div className="sidemenu">
        <img className="sidemenu__logo" src={mainLogo} alt="Synergy-icon" />
        <div className="sidemenu__items">
          Menu
          <div className="sidemenu__item">
            <img className="sidemenu__icon" src={walletImg} alt="Wallet" />
            <Link className="sidemenu__a" to="/wallet">
              Wallet
            </Link>
          </div>
          <div className="sidemenu__item">
            <img className="sidemenu__icon" src={ratesImg} alt="Live Rates" />
            <Link className="sidemenu__a" to="/liveRates">
              Live Rates
            </Link>
          </div>
          <div className="sidemenu__item">
            <img className="sidemenu__icon" src={convertImg} alt="Convert" />
            <Link className="sidemenu__a" to="/currencyconverter">
              Convert
            </Link>
          </div>
          <div className="sidemenu__item">
            <img className="sidemenu__icon" src={transferImg} alt="Transfer" />
            <Link className="sidemenu__a" to="/liveRates">
              Transfer
            </Link>
          </div>
          <div className="sidemenu__item">
            <img className="sidemenu__icon" src={contactsImg} alt="Contacts" />
            <Link className="sidemenu__a" to="/contacts">
              Contacts
            </Link>
          </div>
        </div>
      </div>
      <div className="sidemenu__signout">
        <Link to="/home">
          {/* <img className="sidemenu__logout" src={signoutImg} alt="Sign Out" /> */}
          <Button 
            buttonStyle={"btn button-blue sidemenu__logout"}
            buttonText={"Sign Out"} 
            buttonImg={buttonSignOut}
          />
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
