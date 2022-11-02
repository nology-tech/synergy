import React from 'react';
import './NavMenu.scss';
import wallet from '../../assets/images/clarity_wallet-line.png';
import liverates from '../../assets/images/bi_graph-up-arrow.png';
import convert from '../../assets/images/ep_refresh.svg';
import contacts from '../../assets/images/fluent_people-16-regular.png';
import signout from '../../assets/images/Group 66.png';
import transfer from '../../assets/images/carbon_send-alt.png';

const NavMenu = (props) => {
  const {handleLogin}=props;

  const walletImg = wallet;
  const ratesImg = liverates;
  const convertImg = convert;
  const contactsImg = contacts;
  const transferImg = transfer;
  const signoutImg = signout;
  return (
    <div className="sidemenu wrapper" id="slide">
      <div className="sidemenu__items">Menu
        <div className="sidemenu__item">
          <img className="sidemenu__icon" src={walletImg} alt="Wallet" />
          <a className="sidemenu__a" href="#">Wallet</a>
        </div>
        <div className="sidemenu__item">
          <img className="sidemenu__icon" src={ratesImg} alt="Live Rates" />
          <a className="sidemenu__a" href="#">Live Rates</a>
        </div>
        <div className="sidemenu__item">
          <img className="sidemenu__icon" src={convertImg} alt="Convert" />
          <a className="sidemenu__a" href="#">Convert</a>
        </div>
        <div className="sidemenu__item">
          <img className="sidemenu__icon" src={transferImg} alt="Transfer" />
          <a className="sidemenu__a" href="#">Transfer</a>
        </div>

        <div className="sidemenu__item">
          <img className="sidemenu__icon" src={contactsImg} alt="Contacts" />
          <a className="sidemenu__a" href="#">Contacts</a>
        </div>
        
      </div>
      <div className="sidemenu__signout">
        <img className="sidemenu__logout" src={signoutImg} alt="Contacts" onClick={handleLogin}/>
      </div>
    </div>
    
    
  )
}

export default NavMenu