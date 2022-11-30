import React from "react";
import "./ContactAdd.scss";
import { useState } from "react";
import TransferAddRecipient from "../TransferAddRecipient/TransferAddRecipient";
import TransferConfirmRecipient from "../TransferConfirmRecipient/TransferConfirmRecipient";
import ContactListPage from "../ContactListPage/ContactListPage";

const ContactAdd = () => {

  // handle navigation
  const [workflowStage, setWorkflowStage] = useState("contactContainer");

  console.log(workflowStage);

  //Contact page to Add button clicked function
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

  // From Submit to go back to the contact page
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

  //function to display different stages of adding contact
  const displayCurrentView = () => {
    if (workflowStage === "contactContainer") {
      return <ContactListPage handleAddContact={handleAddContact} />;
    } else if (workflowStage === "addRecipient") {
      return (
        <>
          <ContactListPage handleAddContact={handleAddContact} />
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
    } else if (workflowStage === "addRecipientConfirmed") {
      return (
        <>
          <ContactListPage handleAddContact={handleAddContact} />
          <TransferConfirmRecipient
            recipientName={recipientName}
            accountTypeRecipient={accountTypeRecipient}
            accountNumRecipient={accountNumRecipient}
            sortCodeRecipient={sortCodeRecipient}
            handleGoBack={handleGoBack}
            handleCloseWindow={handleCloseWindow}
            handleSubmit={handleSubmit}
            workflowStage={workflowStage}
          />
        </>
      );
    }
  };

  return <>{displayCurrentView()};</>;
};

export default ContactAdd;
