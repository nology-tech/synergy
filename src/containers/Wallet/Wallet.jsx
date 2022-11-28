import React, {useState} from 'react';
import FundsBox from '../../components/FundsBox/FundsBox';
import userInfo from '../../data/UserInfo.js';
import NavMenu from '../../components/NavMenu/NavMenu';
import ContactContainer from '../ContactContainer/ContactContainer';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import "../../assets/sass/_dashboard.scss"
import UserContacts from '../../components/UserContacts/UserContacts';

const Wallet = () => {
  const [walletOn, setWalletOn] = useState(true);
  return (
    <div className="dashboardPage wallet-page">
      <NavMenu />
      <div className="dashboardPage__right">
        <DashboardHeader />
        <div className="wallet-page__main">
          <FundsBox
            name={userInfo[0].firstName}
            fundsAmount={userInfo[0].accountBalance}
          />
        </div>
        <div className="wallet-page__contacts">
          {" "}
          {/* <ContactContainer walletOn /> */}
          walletOn ? <ContactContainer/>:
        </div>
      </div>
    </div>
  );
}

export default Wallet