import React from "react";

import blackCross from "../../assets/images/black-cross.png";
import "./TransferChooseRecipient.scss";
import ContactContainer from "../../containers/ContactContainer/ContactContainer";

const TransferChooseRecipient = (props) => {
  const {
    handleCloseWindow,
    selectContact,
    currencyRecipientCode,
    contactTo,
    setContactTo,
  } = props;

  return (
    <>
      <div className="transfer-choose-recipient"></div>
      <div className="transfer-choose-recipient__main">
        <img
          src={blackCross}
          alt="Close menu"
          className="blackcross"
          onClick={handleCloseWindow}
        />

        <h1>Choose Recipient</h1>

        <ContactContainer
          currencyRecipientCode={currencyRecipientCode}
          onContactClick={selectContact}
          contact={contactTo}
          setContact={setContactTo}
        />
      </div>
    </>
  );
};

export default TransferChooseRecipient;
