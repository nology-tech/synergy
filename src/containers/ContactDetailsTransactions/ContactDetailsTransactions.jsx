import React, { useState } from "react";
import FundsBox from "../../components/FundsBox/FundsBox";
import userInfo from "../../data/UserInfo.js";
import NavMenu from "../../components/NavMenu/NavMenu";
import ContactContainer from "../ContactContainer/ContactContainer";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";

import "../../assets/sass/_dashboard.scss";
import "./ContactDetailsTransactions.scss";

import ContactDetails from "../../components/ContactDetails/ContactDetails";

const ContactDetailsTransactions = (props) => {
  const { username, transactionsArray } = props;
  const [walletOn, setWalletOn] = useState(true);
  const firstname = username.split(" ", 2)[0];

  // From Choose Recipient from existing contact
  const [contact, setContact] = useState({
    account: "",
    firstName: "",
    lastName: "",
    accountType: "",
    sortCode: "",
    bankName: "",
    accountCurrency: "",
  });
  console.log(
    `Contact to: ${contact.account} ${contact.firstName} ${contact.lastName} ${contact.accountType} ${contact.sortCode}`
  );

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
        <div className="contact-details-page__main">
         <ContactDetails transactionsArray={transactionsArray}/>
        </div>
        <div className="contact-details-page__contacts">
          <ContactContainer
            walletOn={walletOn}
            onContactClick={onContactClick}
            contact={contact}
            setContact={setContact}
          />
         
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsTransactions;
