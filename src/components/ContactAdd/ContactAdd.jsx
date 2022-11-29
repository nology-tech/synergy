// on click from <add> button for contact -- open screen that enables user to manually Add Receipient
// Receipient Name: FirstName LastName
// Account Type: Business or Personal
// Account Number: Number of the account
// Sort Code: six digit code that identifies banks in UK -- in US would be ABA/routing number
// Button to cancel and clear all fields
// Button to continue to review

import React from "react";
import "./ContactAdd.scss";
import { useState } from "react";
import TransferAddRecipient from "../TransferAddRecipient/TransferAddRecipient";
import TransferConfirmRecipient from "../TransferConfirmRecipient/TransferConfirmRecipient";
import TransferTransactionSend from "../TransferTransactionSend/TransferTransactionSend";
import ContactContainer from "../../containers/ContactContainer/ContactContainer";

const ContactAdd = (props) => {
  const {
    transferWorkflowStage,
    currencyBaseCode,
    currencyRecipientCode,
    amountBase,
    amountReceived,
    fxRate,
    fee,
    username,
    accountBalance,
    accountNum,
    sortCode,
    searchTerm,
    handleInput
  } = props;

  const accountFormTypes = true;

  // handle navigation
  const [workflowStage, setWorkflowStage] = useState("contactContainer");
  console.log(workflowStage);

  // //From Send Form Select Recipient
  // const handleSelectRecipient = (event) => {
  //   setWorkflowStage("chooseContact");
  // };

  // //From Choose recipient to Confirmed
  // const selectContact = (event) => {
  //   setWorkflowStage("selectContactConfirmed");
  // };

  // const handleGoBackToChooseContact = (event) => {
  //   setWorkflowStage("chooseContact");
  // };

  //From Contact page to Add button clicked 
  const handleAddContact = (event) => {
    setWorkflowStage("addRecipient");
    setRecipientName("");
    setAccountTypeRecipient("");
    setAccountNumRecipient("");
    setSortCodeRecipient("");
  };

  console.log(setWorkflowStage);
  
  //From Add recipient to Confirm Details press continue
  const handleContinueButton = (event) => {
    setWorkflowStage("addRecipientConfirmed");
  };

  //go back button 
  const handleGoBack = (event) => {
    setWorkflowStage("addRecipient");
  };

  // From Submit to go back to contact page
  const handleSubmit = (event) => {
    setWorkflowStage("contactContainer");
  };

  const handleCancel = (event) => {
    setWorkflowStage("contactContainer");
  };

    //Handle black cross
    const handleCloseWindow = (event) => {
      setWorkflowStage("contactContainer");
      setRecipientName("");
      setAccountTypeRecipient("");
      setAccountNumRecipient("");
      setSortCodeRecipient("");
    };

    //Add Recepient
  const [recipientName, setRecipientName] = useState("");
  const [accountTypeRecipient, setAccountTypeRecipient] = useState();
  const [accountNumRecipient, setAccountNumRecipient] = useState();
  const [sortCodeRecipient, setSortCodeRecipient] = useState("");

  // Handling the recipeint name input field change
  const handleRecipientName = (e) => {
    e.preventDefault();
    setRecipientName(e.target.value.toString());
  };

  // Handling the account type input field change
  const handleAccountTypeRecipient = (e) => {
    e.preventDefault();
    setAccountTypeRecipient(e.target.value);
  };

  // Handling the account number input field change
  const handleAccountNumRecipient = (e) => {
    e.preventDefault();
    setAccountNumRecipient(e.target.value);
  };

  // Handling the sort code input field change
  const handleSortCodeRecipient = (e) => {
    e.preventDefault();
    setSortCodeRecipient(e.target.value.toString());
  };

  const displayCurrentView = () => {

    if (workflowStage === "contactContainer") {
      return (
        <ContactContainer
          onClick = {handleAddContact}
        />
      );
    }

  else if (workflowStage === "addRecipient") {
    return (
      <>
    
        <ContactContainer
          handleAddContact={handleAddContact}
        />
        <TransferAddRecipient
          handleContinueButton={handleContinueButton}
          handleGoBack={handleGoBack}
          handleRecipientName={handleRecipientName}
          handleAccountTypeRecipient={handleAccountTypeRecipient}
          handleAccountNumRecipient={handleAccountNumRecipient}
          handleSortCodeRecipient={handleSortCodeRecipient}
          handleCloseWindow={handleCloseWindow}
          recipientName={recipientName}
          accountTypeRecipient={accountTypeRecipient}
          accountNumRecipient={accountNumRecipient}
          sortCodeRecipient={sortCodeRecipient}
        />
      </>
    );
  }else if (workflowStage === "addRecipientConfirmed") {
    return (
      <>
        <TransferConfirmRecipient
          recipientName={recipientName}
          accountTypeRecipient={accountTypeRecipient}
          accountNumRecipient={accountNumRecipient}
          sortCodeRecipient={sortCodeRecipient}
          handleGoBack={handleGoBack}
          handleCloseWindow={handleCloseWindow}
          handleSubmit= {handleSubmit}
          workflowStage={workflowStage}
        />
      </>
    );
  }  
};

  return (
    <>
     {/* Display the screen with Add recipient or Choose Recipient overlapping Send From transaction details */}
     {transferWorkflowStage === "transferSendFrom" ? (
          displayCurrentView()
        ) : (
          <></>
        )}
    </>
  );
};

export default ContactAdd;
