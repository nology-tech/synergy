import React, {useState} from 'react';
import FundsBox from '../../components/FundsBox/FundsBox';
import userInfo from '../../data/UserInfo.js';
import NavMenu from '../../components/NavMenu/NavMenu';
import ContactContainer from '../ContactContainer/ContactContainer';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import highFive from "../../assets/images/Emojihand.png";
import "../../assets/sass/_dashboard.scss"
// import UserContacts from '../../components/UserContacts/UserContacts';
import "./Wallet.scss"

const Wallet = (props) => {

  const {username, userID}=props;
  const [walletOn, setWalletOn] = useState(true);
  const firstname=(username.split(" ",2))[0];

  // From Choose Recipient from existing contact
  const [contact, setContact] = useState({account:"", firstName:"", lastName:"", accountType:"", sortCode:"", bankName:"", accountCurrency:""});
  console.log(`Contact to: ${contact.account} ${contact.firstName} ${contact.lastName} ${contact.accountType} ${contact.sortCode}`);

  // these items are place holders for future work; currently not in use for onclick on contact details
  const onContactClick = (contact) => {
  console.log("Contact clicked for " + contact.account);
  setContact(contact);
  };
  return (
    <div className="dashboardPage wallet-page">
      <NavMenu />
      <div className="dashboardPage__right">
        <DashboardHeader username={username} />
        <div className="wallet-page__main">
          <div className="greeting__firstName">
            <h2>
              {/* {"Hey " + userInfo[0].firstName} */}
              {"Hey " + firstname}
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
          <ContactContainer walletOn={walletOn}
                  onContactClick = {onContactClick}
                  contact = {contact}
                  setContact = {setContact}
                  userID = {userID}
          />
          {/* {walletOn ? <ContactContainer/>:} */}
        </div>
      </div>
    </div>
  );
}

export default Wallet