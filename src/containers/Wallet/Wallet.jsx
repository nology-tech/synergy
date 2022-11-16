import React from 'react';
import FundsBox from '../../components/FundsBox/FundsBox';
import userInfo from '../../data/userInfo.js';
import NavMenu from '../../components/NavMenu/NavMenu';
import ContactContainer from '../ContactContainer/ContactContainer';
import NavBar from "../../assets/images/navbar.png";
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import ContactList from '../../components/ContactList/ContactList';
import "../../assets/sass/_dashboard.scss"

const Wallet = (props) => {
  const {searchTerm, handleInput} = props;

  return (
    <div className="dashboardPage">
        <NavMenu />
      <div className="dashboardPage__right">
        <DashboardHeader searchTerm= {searchTerm} handleInput={handleInput} />
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