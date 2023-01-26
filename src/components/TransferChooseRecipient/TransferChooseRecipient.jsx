import React from "react";
import { useState } from "react";
import blackCross from "../../assets/images/black-cross.png";
import "./TransferChooseRecipient.scss";
import ContactContainer from "../../containers/ContactContainer/ContactContainer";

const TransferChooseRecipient = (props) => {

  const {handleCloseWindow, 
  selectContact, currencyRecipientCode, contactTo, setContactTo, userID, accountIbanRecipient} = props;
  const [walletOn, setWalletOn] = useState(true);
  
  return (
    <>
    <div className="transfer-choose-recipient"></div>
      <div className="transfer-choose-recipient__main">
        <img src={blackCross} alt="Close menu" className="blackcross" onClick={handleCloseWindow}/>
      
      <h1>Choose Recipient</h1>
      <ContactContainer walletOn={walletOn} currencyRecipientCode={currencyRecipientCode} onContactClick={selectContact} contact={contactTo} setContact={setContactTo} userID={userID} accountIbanRecipient={accountIbanRecipient}/> 
      </div>
      </>
  );
};

export default TransferChooseRecipient;
