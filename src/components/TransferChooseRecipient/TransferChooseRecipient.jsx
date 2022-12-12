import React from "react";
import { useState } from "react";
import Search from "../Search/Search";
import blackCross from "../../assets/images/black-cross.png";
// import ContactList from "../ContactList/ContactList";
import "./TransferChooseRecipient.scss";
// import contacts from "../../data/Contacts.js";
import ContactContainer from "../../containers/ContactContainer/ContactContainer";

const TransferChooseRecipient = (props) => {

  const {handleCloseWindow, 
  selectContact, searchTerm, handleInput} = props;

  // Filter contact using search
  // const filteredContactsArray = contacts.filter((contact) => {
  //   const contactfirstName = contact.firstName.toLowerCase();
  //   const contactLastName = contact.lastName.toLowerCase();
  //   const contactBank = contact.bankName.toLowerCase();
  //   return (
  //     contactfirstName.includes(searchTerm) ||
  //     contactLastName.includes(searchTerm) ||
  //     contactBank.includes(searchTerm)
  //   );
  // });

  return (
    <>
    <div className="transfer-choose-recipient"></div>
      <div className="transfer-choose-recipient__main">
        <img src={blackCross} alt="Close menu" className="blackcross" onClick={handleCloseWindow}/>
      
      <h1>Choose Recipient</h1>
      <p>Search</p>
      {/* ///contact search needs to be changed to remove the message "all
      frineds..." */}
      <Search searchTerm={searchTerm} handleInput={handleInput}/>
      {/* //the contact list & contact Row need to be duplicated to handel less data
      columns 
      the OnClick shall be applied to the name of the contact or contact row
      */}
      {/* Commented out ContactList and went to ContactContainer instead. Functional props will need to be defined in ContactContainer */}
      {/* <ContactList contactsArray={filteredContactsArray} onClick={selectContact}/>  */}
      <ContactContainer/> 
      </div>
      </>
  );
};

export default TransferChooseRecipient;
