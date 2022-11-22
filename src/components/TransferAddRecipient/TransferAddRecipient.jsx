import React from "react";
import "./TransferAddRecipient.scss";
import blackcross from "../../assets/images/black-cross.png";
import Button from "../Button/Button";

const TransferAddRecipient = (props) => {
  const {
    recipientName,
    accountTypeRecipient,
    accountNumRecipient,
    sortCodeRecipient,
    handleContinueButton,
    handleCloseWindow,
    handleRecipientName,
    handleAccountTypeRecipient,
    handleAccountNumRecipient,
    handleSortCodeRecipient,
  } = props;


  return (
    <>
      <div className="transfer-add-recipient"></div>
      <div className="transfer-add-recipient__main">
          <img src={blackcross} alt="Close menu" className="blackcross" onClick={handleCloseWindow} />
        <h1>Add Recipient</h1>
        <div className="transfer-add-recipient__main__details">
          <h3>Recipient Name</h3>
          <input
            onChange={handleRecipientName}
            className="input"
            value={recipientName}
            type="text"
          />
          <h3>Account Type</h3>
          <input
            onInput={handleAccountTypeRecipient}
            className="input"
            value={accountTypeRecipient}
          />
          <h3>Account Number</h3>
          <input
            onInput={handleAccountNumRecipient}
            className="input"
            value={accountNumRecipient}
          />
          <h3>Sort Code</h3>
          <input onChange={handleSortCodeRecipient} className="input" 
          value={sortCodeRecipient}
           />
        </div>
        <div className="transfer-add-recipient__main__options">
          <a
            className="transfer-add-recipient__main__options__cancel"
            onClick={handleCloseWindow}
          >
            Cancel
          </a>
          <Button
            buttonStyle={"btn button-blue"}
            buttonText={`Continue ▶`}
            onClick={handleContinueButton}
          />
        </div>
      </div>
    </>
  );
};

export default TransferAddRecipient;
