import React, { useEffect, useState } from "react";
import ContactSearch from "../../components/ContactSearch/ContactSearch";
import "./ContactContainer.scss";
import ContactList from "../../components/ContactList/ContactList";
import contacts from "../../assets/data/Contacts";

const ContactContainer = () => {
  // Setting up the search box
  const [searchQuery, setSearchQuery] = useState("");
  const handleInput = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const onClick = () => {
    console.log("Search button clicked")
  };

  const onDelete = (accountId) => {
    console.log("delete clicked for " + accountId);
  };

  // Filter contact using search
  const filteredContactsArray = contacts.filter((contact) => {
    console.log(`SearchQuery = ${searchQuery}`)
    const contactfirstName = contact.firstName.toLowerCase();
    const contactLastName = contact.lastName.toLowerCase();
    const contactAccount = contact.account;
    const contactBank = contact.bankName.toLowerCase();
    return (
      contactfirstName.includes(searchQuery) ||
      contactLastName.includes(searchQuery) ||
      isNaN(searchQuery)?true:contactAccount.includes(searchQuery) ||
      contactBank.includes(searchQuery)
    );
  });

  // useEffect(() => filteredContactsArray(), [onClick])

    return (
      <>
        <div className="contact">
          <div className="contact__Title">Contacts</div>
          <h2 className="contact__Heading">Contact List</h2>
          <ContactSearch
            searchTerm={searchQuery}
            handleInput={handleInput}
          />
          <ContactList
            contactsArray={filteredContactsArray}
            onCLick={onClick}
            onDelete={onDelete}
          />
        </div>
      </>
    );
  };


export default ContactContainer;
