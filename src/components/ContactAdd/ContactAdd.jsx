import React from "react";
import "./ContactAdd.scss";
import { useState } from "react";
import { useEffect } from "react";
import TransferAddRecipient from "../TransferAddRecipient/TransferAddRecipient";
import TransferConfirmRecipient from "../TransferConfirmRecipient/TransferConfirmRecipient";
import ContactListPage from "../ContactListPage/ContactListPage";
import apiurl from "../../config/url";

const ContactAdd = (props) => {
  const { username, userID } = props;
  // handle navigation
  const [workflowStage, setWorkflowStage] = useState("contactContainer");


  //Add and Confirm Recepient props
  const [recipientName, setRecipientName] = useState("");
  const [accountTypeRecipient, setAccountTypeRecipient] = useState();
  const [accountNumRecipient, setAccountNumRecipient] = useState();
  const [accountIbanRecipient, setAccountIbanRecipient] = useState();
  const [currencyRecipient, setCurrencyRecipient] = useState();
  const [bankRecipient, setBankRecipient] = useState("");
  const [bankDefaultRecipient, setBankDefaultRecipient] = useState();
  const [sortCodeRecipient, setSortCodeRecipient] = useState("");

  //Contact page to Add button clicked function
  const handleAddContact = (event) => {
    setWorkflowStage("addRecipient");
    setRecipientName("");
    setAccountTypeRecipient("");
    setAccountNumRecipient("");
    setAccountIbanRecipient("");
    setSortCodeRecipient("");
    setBankDefaultRecipient("");
    setBankRecipient("");
    setCurrencyRecipient();
  };

  // const [contactID, setContactID] = useState("");
  const postCreateAccount = () => {
    fetch(`${apiurl}/users/${userID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: "",
        firstName: recipientName.split(" ", 2)[0],
        lastName: recipientName.split(" ", 2)[1],
        contactFlag: 1,
        email: "unknown@test.com",
        sortCode: sortCodeRecipient,
        iban: accountIbanRecipient,
        accountType: accountTypeRecipient,
        currencyID: currencyRecipient.split(" ", 2)[0],
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // setContactID(data.userID); 
        setAccountNumRecipient(data.accountID)//not valid when there is an error
      })
      .catch((err) => console.log(err));
  };
  
  //Navigation between new recipient details and Contact list

  //From Add recipient to Confirm Details press continue
  const handleContinueButton = (event) => {
    setWorkflowStage("addRecipientConfirmed");
  };

  //go back button for Confirm Recipient to Add
  const handleGoBack = (event) => {
    setWorkflowStage("addRecipient");
  };

  // From Submit to go back to the contact page
  const handleSubmit = (event) => {
    setWorkflowStage("contactContainer");
    postCreateAccount(); 
  };

  //Handle black cross
  const handleCloseWindow = (event) => {
    setWorkflowStage("contactContainer");
    setRecipientName("");
    setAccountTypeRecipient("");
    setAccountNumRecipient("");
    setAccountIbanRecipient("");
    setSortCodeRecipient("");
    setBankDefaultRecipient("");
    setBankRecipient("");
    setCurrencyRecipient();
  };

  const [banks, setBanks] = useState([
    {
      bankName: "",
      bankLogo: "",
      sortCode: "",
    },
  ]);

  const getBanks = () => {
    //e.preventDefault();
    fetch(`${apiurl}/banks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setBanks(json))
      .catch((err) => console.log(err));
    //e.target.reset();
  };

  useEffect(() => getBanks(), []);

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

   // Handling the account IBAN input field change
  const handleAccountIbanRecipient = (e) => {
    e.preventDefault();
    setAccountIbanRecipient(e.target.value);
  };

  // Handling the account currency input field change
  const handleCurrencyRecipient = (e) => {
    e.preventDefault();
    setCurrencyRecipient(e.target.value);
  };

  // Handling the bank input field change
  const handleBankRecipient = (value) => {
    setBankRecipient(value.bankName);
    setSortCodeRecipient(value.sortCode);
    setBankDefaultRecipient(value);
  };

  //function to display different stages of adding contact
  const displayCurrentView = () => {
    if (workflowStage === "contactContainer") {
      return (
        <ContactListPage
          handleAddContact={handleAddContact}
          username={username}
          userID={userID}
        />
      );
    } else if (workflowStage === "addRecipient") {
      return (
        <>
          <ContactListPage
            handleAddContact={handleAddContact}
            username={username}
            userID={userID}
          />
          <TransferAddRecipient
            handleCurrencyRecipient={handleCurrencyRecipient}
            handleContinueButton={handleContinueButton}
            handleRecipientName={handleRecipientName}
            handleAccountTypeRecipient={handleAccountTypeRecipient}
            handleAccountNumRecipient={handleAccountNumRecipient}
            handleAccountIbanRecipient={handleAccountIbanRecipient}
            handleBankRecipient={handleBankRecipient}
            handleCloseWindow={handleCloseWindow}
            recipientName={recipientName}
            accountTypeRecipient={accountTypeRecipient}
            accountNumRecipient={accountNumRecipient}
            accountIbanRecipient={accountIbanRecipient}
            currencyRecipient={currencyRecipient}
            bankRecipient={bankRecipient}
            bankDefaultRecipient={bankDefaultRecipient}
            banks={banks}
            sortCodeRecipient={sortCodeRecipient}
          />
        </>
      );
    } else if (workflowStage === "addRecipientConfirmed") {
      return (
        <>
          <ContactListPage
            handleAddContact={handleAddContact}
            username={username}
            userID={userID}
          />
          <TransferConfirmRecipient
            recipientName={recipientName}
            accountTypeRecipient={accountTypeRecipient}
            accountNumRecipient={accountNumRecipient}
            accountIbanRecipient={accountIbanRecipient}
            currencyRecipient={currencyRecipient}
            bankRecipient={bankRecipient}
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
