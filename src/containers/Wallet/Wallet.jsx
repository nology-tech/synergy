import React from 'react';
import FundsBox from '../../components/FundsBox/FundsBox';
import userInfo from '../../data/userInfo.js';
import NavMenu from '../../components/NavMenu/NavMenu';
import ContactContainer from '../ContactContainer/ContactContainer';
import NavBar from "../../assets/images/navbar.png";

const Wallet = () => {
  return (
    <div className='walletPage'>
      <div className='walletPage__placeHolder'>
          <div className="walletPage__placeHolder__Navbar"> <img src={NavBar} alt="NavBar" /> </div>
          <div className="walletPage__placeHolder__NavMenu"> <NavMenu /> </div>     
      </div>    
      <div className='walletPage__details'>
          <h1 className='walletPage__details__title'>Funds box will go here</h1>
          {/* {console.log(userInfo[0].accountBalance)}; */}
          <FundsBox 
          name = {userInfo[0].firstName}
          fundsAmount = {userInfo[0].accountBalance} />
          
          <div className='walletPage__details__contacts'> <ContactContainer /> </div>
      </div>
    </div>
  
  )
}

export default Wallet