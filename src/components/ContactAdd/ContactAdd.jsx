import React from "react";
import "./ContactAdd.scss";
import { useState } from "react";
import { useEffect } from "react";
import TransferAddRecipient from "../TransferAddRecipient/TransferAddRecipient";
import TransferConfirmRecipient from "../TransferConfirmRecipient/TransferConfirmRecipient";
import ContactListPage from "../ContactListPage/ContactListPage";

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
    // postCreateUserContactLink();
  };

  const [contactID, setContactID] = useState("");
  const postCreateAccount=()=>{
    fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userID: "",
        firstName:recipientName.split(" ",2)[0],
        lastName:recipientName.split(" ",2)[1],
        contactFlag: 1,
        sortCode: sortCodeRecipient,
        accountType: accountTypeRecipient,
        currencyID:currencyRecipient
      })
    })
    .then((res) => {return res.json()})
    .then((data => {
      console.log(userID)
      console.log(data.userID)
      setContactID(data.userID)
    }))
    .catch(err => console.log(err))

  }
  //   const postCreateAccount=()=>{

  //     fetch(`http://localhost:8080/users/${userID}`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         userID: "",
  //         firstName:recipientName.split(" ",2)[0],
  //         lastName:recipientName.split(" ",2)[1],
  //         contactFlag: 1,
  //         sortCode: sortCodeRecipient,
  //         accountType: accountTypeRecipient,
  //         currencyID:currencyRecipient
  //       })
  //     })
  //     .then((res) => {return res.json()})
  //     .then((data => {
  //       console.log(data.userID)
  //       setContactID(data.userID)
  //     }))
  //     .catch(err => console.log(err))

  // }

//   const [accUser, setAccUser] = useState({
//     userID:"",
//       firstName:"",
//       lastName:"",
//       email:"",
//       address_houseNum:"",
//       address_streetName:"",
//       address_city:"",
//       address_state:"",
//       address_postCode:"",
//       contactFlag: 0,

//   })
//   const [contactUser, setContactUser] = useState({
//     userID:"",
//       firstName:"",
//       lastName:"",
//       email:"",
//       address_houseNum:"",
//       address_streetName:"",
//       address_city:"",
//       address_state:"",
//       address_postCode:"",
//       contactFlag: 0,

//   })
//   const postCreateUserContactLink=()=>{
//     console.log(contactID);
//     console.log(userID);
//     fetch(`http://localhost:8080/users?uid=${userID}`)
//       .then(res => res.json())
//       .then(json => setAccUser(json))
//       .catch(err => console.log(err))
  
//   fetch(`http://localhost:8080/users?uid=${contactID}`)
//       .then(res => res.json())
//       .then(json => setContactUser(json))
//       .catch(err => console.log(err))

//       console.log(accUser)
//       console.log(contactUser)

//     fetch(`http://localhost:8080/addUserContact`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         user: accUser,
//         user2: contactUser
//       })
//     })
//     .then((res) => {return res.json()})
//     .then((data=>console.log(data)))
//     .catch(err => console.log(err))
  
// }



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
      },
    ]
    );
  
    const getBanks = () => {
      
      //e.preventDefault();
      fetch("http://localhost:8080/banks", {
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
   const handleBankRecipient = (e) => {
    e.preventDefault();
    setBankRecipient(e.target.value);
  };

  //function to display different stages of adding contact
  const displayCurrentView = () => {
    if (workflowStage === "contactContainer") {
      return <ContactListPage handleAddContact={handleAddContact} username={username}/>;
    } else if (workflowStage === "addRecipient") {
      return (
        <>
          <ContactListPage handleAddContact={handleAddContact} username={username}/>
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
          <ContactListPage handleAddContact={handleAddContact} username={username}/>
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
