import React from 'react';
import FundsBox from '../../components/FundsBox/FundsBox';
import userInfo from '../../data/userInfo.js';
import NavMenu from '../../components/NavMenu/NavMenu';
import ContactContainer from '../ContactContainer/ContactContainer';
import NavBar from "../../assets/images/navbar.png";
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';

const Wallet = () => {
  return (
    <div className="wallet-page">
      <div className="wallet-page__menu">
        <NavMenu />
      </div>
      <div className="wallet-page__header">
        <DashboardHeader />
      </div>
      {/* <div className='walletPage__details'>
          <h1 className='walletPage__details__title'>Funds box will go here</h1>
          {/* {console.log(userInfo[0].accountBalance)}; */}
      <div className="wallet-page__main">
        <FundsBox
          name={userInfo[0].firstName}
          fundsAmount={userInfo[0].accountBalance}
        />
      </div>
      <div className='wallet-page__contacts'> <ContactContainer /></div>
    </div>
  );
}

export default Wallet