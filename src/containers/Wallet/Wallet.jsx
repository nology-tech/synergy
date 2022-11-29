import React, {useState} from 'react';
import FundsBox from '../../components/FundsBox/FundsBox';
import userInfo from '../../data/UserInfo.js';
import NavMenu from '../../components/NavMenu/NavMenu';
import ContactContainer from '../ContactContainer/ContactContainer';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import highFive from "../../assets/images/Emojihand.png";
import "../../assets/sass/_dashboard.scss"
import UserContacts from '../../components/UserContacts/UserContacts';
import "./Wallet.scss"

const Wallet = () => {
  const [walletOn, setWalletOn] = useState(true);
  return (
    <div className="dashboardPage wallet-page">
      <NavMenu />
      <div className="dashboardPage__right">
        <DashboardHeader />
        <div className="wallet-page__main">
          <div className="greeting__firstName">
            <h2>
              {"Hey " + userInfo[0].firstName}
              <img className="greetings__wave" src={highFive} alt="highFiveWave" />
            </h2>
          </div>

          <FundsBox
            fundsAmount={userInfo[0].accountBalance}
            fundBoxHeader={"Your Funds:"}
            buttonOn={true}
          />
        </div>
        <div className="wallet-page__contacts">
          {" "}
          <ContactContainer walletOn />
          {/* {walletOn ? <ContactContainer/>:} */}
        </div>
      </div>
    </div>
  );
}

export default Wallet