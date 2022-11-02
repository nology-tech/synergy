import React, { useEffect, useState, useCallback } from "react";
import ContactSearch from "../../components/ContactSearch/ContactSearch";
import "./ContactContainer.scss";
import ContactList from "../../components/ContactList/ContactList";
import contacts from "../../assets/data/Contacts";

const ContactContainer = () => {
  // Setting up the search box
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const handleInput = (event) => {
    setSearchQuery(event.target.value);
    console.log(`Search Query = ${searchQuery}`)    
  };

  const onSearchClick = (event) => {
    console.log("Search button clicked")
    event.preventDefault();
    setSearchTerm(searchQuery.toLowerCase());
    console.log(`Search Term = ${searchTerm}`)
  };

  const onContactClick = (accountId) => {
    console.log("Contact clicked for " + accountId);
  };

  const onContactDelete = (accountId) => {
    console.log("delete clicked for " + accountId);
  };


  // Filter contact using search
  const filteredContactsArray = contacts.filter((contact) => {
    console.log(`SearchTerm = ${searchTerm}`)
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

  // useEffect(() => filteredContactsArray(), [searchTerm]);
    

    return (
        <div className="contact">
          <div className="contact__Title">Contacts</div>
          <h2 className="contact__Heading">Contact List</h2>
          <ContactSearch
            searchTerm={searchQuery}
            handleInput={handleInput}
            onSearchClick={onSearchClick}
          />
          <ContactList
            contactsArray={filteredContactsArray}
            onClick={onContactClick}
            onDelete={onContactDelete}
          />
        </div>
    );
  };


export default ContactContainer;
