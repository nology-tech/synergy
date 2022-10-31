import React from 'react';
import './NavMenu.scss';

const NavMenu = () => {
  return (
    <div className="sidemenu">
      <div className="sidemenu__items">Menu
        <a href="#">Wallet</a>
        <a href="#">Live Rates</a>
        <a href="#">Convert</a>
        <a href="#">Contacts</a>
      </div>
      <div className="sidemenu__signout">
        <a href="#">Sign Out</a>
      </div>
    </div>
    
    
  )
}

export default NavMenu