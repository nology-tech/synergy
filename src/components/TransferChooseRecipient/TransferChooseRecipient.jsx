import React from "react";
import { useState } from "react";
import Search from "../Search/Search";
import blackCross from "../../assets/images/black-cross.png";
import "./TransferChooseRecipient.scss";
import ContactContainer from "../../containers/ContactContainer/ContactContainer";

const TransferChooseRecipient = (props) => {

  const {handleCloseWindow, 
  selectContact, searchTerm, handleInput, currencyRecipientCode, contactTo, setContactTo} = props;

  return (
    <>
    <div className="transfer-choose-recipient"></div>
      <div className="transfer-choose-recipient__main">
        <img src={blackCross} alt="Close menu" className="blackcross" onClick={handleCloseWindow}/>
      
      <h1>Choose Recipient</h1>
      {/* <p>Search</p> */}
      {/* ///contact search needs to be changed to remove the message "all
      frineds..." */}
      {/* <Search searchTerm={searchTerm} handleInput={handleInput}/> */}
      {/* //the contact list & contact Row need to be duplicated to handel less data
      columns 
      the OnClick shall be applied to the name of the contact or contact row
      */}
      {/* Commented out ContactList and went to ContactContainer instead. Functional props will need to be defined in ContactContainer */}
      {/* <ContactList contactsArray={filteredContactsArray} onClick={selectContact}/>  */}
      <ContactContainer currencyRecipientCode={currencyRecipientCode} onContactClick={selectContact} contact={contactTo} setContact={setContactTo}/> 
      </div>
      </>
  );
};

export default TransferChooseRecipient;
