import React from "react";
import "./ContactAdd.scss";
import { useState } from "react";
import { useEffect } from "react";
import TransferAddRecipient from "../TransferAddRecipient/TransferAddRecipient";
import TransferConfirmRecipient from "../TransferConfirmRecipient/TransferConfirmRecipient";
import ContactListPage from "../ContactListPage/ContactListPage";
import apiurl from "../../config/url";

const ContactAdd = (props) => {
  const {username,userID} = props; 
  // handle navigation
  const [workflowStage, setWorkflowStage] = useState("contactContainer");
  console.log (username);
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
    postCreateAccount();
  };

  const [contactID, setContactID] = useState("");
    const postCreateAccount=()=>{

      fetch(`${apiurl}/users/${userID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userID: "",
          firstName:recipientName.split(" ",2)[0],
          lastName:recipientName.split(" ",2)[1],
          contactFlag: 1,
          email: "unknown@test.com",
          sortCode: bankRecipient.sortCode,
          accountType: accountTypeRecipient,
          currencyID:currencyRecipient.split(" ",2)[0]
        })
      })
      .then((res) => {return res.json()})
      .then((data => {
        console.log(data.userID)
        setContactID(data.userID)
      }))
      .catch(err => console.log(err))
  }


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
    const [currencyRecipient, setCurrencyRecipient] = useState();
    const [bankRecipient, setBankRecipient] = useState();
    const [sortCodeRecipient, setSortCodeRecipient] = useState("");

    const [banks, setBanks] = useState(
      [
      {
        bankName: "",
        bankLogo: "",
        sortCode: "",
      },
    ]
    );
  
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
  
   useEffect (() => getBanks(),[]);

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

   // Handling the account currency input field change
   const handleCurrencyRecipient = (e) => {
    e.preventDefault();
    setCurrencyRecipient(e.target.value);
  };

   // Handling the bank input field change
   const handleBankRecipient = (value) => {
    console.log(value);
    setBankRecipient(value);
    
  };

  //function to display different stages of adding contact
  const displayCurrentView = () => {
    if (workflowStage === "contactContainer") {
      return <ContactListPage handleAddContact={handleAddContact} username={username} userID={userID}/>;
    } else if (workflowStage === "addRecipient") {
      return (
        <>
          <ContactListPage handleAddContact={handleAddContact} username={username} userID={userID}/>
          <TransferAddRecipient
          recipientName={recipientName}
          accountTypeRecipient={accountTypeRecipient}
          accountNumRecipient={accountNumRecipient}
          sortCodeRecipient={sortCodeRecipient}
          currencyRecipient={currencyRecipient}
          bankRecipient={bankRecipient}
          banks={banks}
          handleCurrencyRecipient={handleCurrencyRecipient}
          handleBankRecipient={handleBankRecipient}         
            handleContinueButton={handleContinueButton}
            handleGoBack={handleGoBack}
            handleRecipientName={handleRecipientName}
            handleAccountTypeRecipient={handleAccountTypeRecipient}
            handleAccountNumRecipient={handleAccountNumRecipient}
            handleSortCodeRecipient={handleSortCodeRecipient}
            handleCloseWindow={handleCloseWindow}
            
            
            
            
          />
        </>
      );
    } else if (workflowStage === "addRecipientConfirmed") {
      return (
        <>
          <ContactListPage handleAddContact={handleAddContact} username={username} userID={userID}/>
          <TransferConfirmRecipient
            recipientName={recipientName}
            accountTypeRecipient={accountTypeRecipient}
            accountNumRecipient={accountNumRecipient}
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
