import React from "react";
import "./TransferConfirmRecipient.scss";
import Button from "../Button/Button";
import blackcross from "../../assets/images/black-cross.png";

const TransferConfirmRecepient = (props) => {
  const {
    recipientName,
    accountTypeRecipient,
    accountNumRecipient,
    currencyRecipient,
    bankRecipient,
    sortCodeRecipient,
    handleGoBackToChooseContact,
    handleCloseWindow,
    handleGoBack,
    workflowStage,
    handleSubmit,
  } = props;

  const displayConfirmRecipient = () => {
    if (workflowStage === "addRecipientConfirmed") {
      return (
        <a
          className="transfer-confirm-recepient__main__options__cancel"
          onClick={handleGoBack}
        >
          Go Back
        </a>
      );
    } else if (workflowStage === "selectContactConfirmed") {
      return (
        <a
          className="transfer-confirm-recepient__main__options__cancel"
          onClick={handleGoBackToChooseContact}
        >
          Go Back
        </a>
      );
    }
  };

  return (
    <>
      <div className="transfer-confirm-recepient"></div>
      <div className="transfer-confirm-recepient__main">
        <img
          src={blackcross}
          alt="Close menu"
          className="blackcross"
          onClick={handleCloseWindow}
        />
        <h1>Confirm Details</h1>
        <div className="transfer-confirm-recepient__main__details">
          <h3>Recipient Name</h3>
          <p>{recipientName} </p>
          <h3>Account Type</h3>
          <p>{accountTypeRecipient}</p>
          <h3>Account Number</h3>
          <p>{accountNumRecipient}</p>
          <h3>Account Currency</h3>
          <p>{currencyRecipient}</p>
          <h3>Bank</h3>
          <p>{bankRecipient}</p>
          <h3>Sort Code</h3>
          <p>{sortCodeRecipient}</p>
        </div>
        <div className="transfer-confirm-recepient__main__options">
          {displayConfirmRecipient()}
          <Button
            buttonStyle={"btn button-blue"}
            buttonText={"Submit"}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default TransferConfirmRecepient;
