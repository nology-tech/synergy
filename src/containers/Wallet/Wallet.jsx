import React from 'react';
import FundsBox from '../../components/FundsBox/FundsBox';
import userInfo from '../../data/userInfo.js';
import NavMenu from '../../components/NavMenu/NavMenu';
import ContactContainer from '../ContactContainer/ContactContainer';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import "../../assets/sass/_dashboard.scss"

const Wallet = (props) => {
  const {searchTerm, handleInput} = props;

  return (
    <div className="dashboardPage wallet-page">
      <NavMenu />
      <div className="dashboardPage__right">
        <DashboardHeader searchTerm={searchTerm} handleInput={handleInput} />
        <div className="wallet-page__main">
          <FundsBox
            name={userInfo[0].firstName}
            fundsAmount={userInfo[0].accountBalance}
          />
        </div>
        <div className="wallet-page__contacts">
          {" "}
          <ContactContainer />
        </div>
      </div>
    </div>
  );
}

export default Wallet