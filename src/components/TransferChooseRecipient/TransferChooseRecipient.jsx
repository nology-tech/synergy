import React from "react";
import { useState } from "react";
// import ContactSearch from "../ContactSearch/ContactSearch";
import blackCross from "../../assets/images/black-cross.png";
import ContactList from "../ContactList/ContactList";
import "./TransferChooseRecipient.scss";
import contacts from "../../data/Contacts.js";

const TransferChooseRecipient = (props) => {

  const {handleCloseWindow, 
  selectContact, searchTerm } = props;

  // // Setting up the search box
  // const [searchQuery, setSearchQuery] = useState("");
  // const [searchTerm, setSearchTerm] = useState("");
  // // this handle reads the search text
  // const handleInput = (event) => {
  //   setSearchQuery(event.target.value);
  // };
  // // for the spyglass when clicked
  // const onSearchClick = (event) => {
  //   event.preventDefault();
  //   setSearchTerm(searchQuery.toLowerCase());
  // };

  // Filter contact using search
  const filteredContactsArray = contacts.filter((contact) => {
    const contactfirstName = contact.firstName.toLowerCase();
    const contactLastName = contact.lastName.toLowerCase();
    // const contactAccount = contact.account;
    const contactBank = contact.bankName.toLowerCase();
    return (
      contactfirstName.includes(searchTerm) ||
      contactLastName.includes(searchTerm) ||
      // isNaN(searchQuery)?true:contactAccount.includes(searchQuery) ||
      contactBank.includes(searchTerm)
    );
  });

  return (
    <>
    <div className="transfer-choose-recipient"></div>
      <div className="transfer-choose-recipient__main">
      
        <img src={blackCross} alt="Close menu" className="blackcross" onClick={handleCloseWindow}/>
      
      <h1>Choose Recipient</h1>
      <p>Search</p>
      {/* ///contact search needs to be changed to remove the message "all
      frineds..." */}
      {/* <ContactSearch
        searchTerm={searchQuery}
        handleInput={handleInput}
        onSearchClick={onSearchClick}
      /> */}
      {/* //the contact list & contact Row need to be duplicated to handel less data
      columns 
      the OnClick shall be applied to the name of the contact or contact row
      */}
      <ContactList contactsArray={filteredContactsArray} onClick={selectContact}/> 
      </div>
      </>
  );
};

export default TransferChooseRecipient;
