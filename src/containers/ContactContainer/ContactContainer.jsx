import React, { useState } from "react";
import Search from "../../components/Search/Search";
import "./ContactContainer.scss";
import ContactList from "../../components/ContactList/ContactList";
import contacts from "../../data/Contacts";
import Button from "../../components/Button/Button";


const ContactContainer = () => {
  // Setting up the search box
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput=event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };
  
  // Filter contact using search
  const filteredContactsArray = contacts.filter((contact) => {
    console.log(`SearchTerm = ${searchTerm}`);
    const contactfirstName = contact.firstName.toLowerCase();
    const contactLastName = contact.lastName.toLowerCase();
    const contactBank = contact.bankName.toLowerCase();
    return (
      contactfirstName.includes(searchTerm) ||
      contactLastName.includes(searchTerm) ||
      contactBank.includes(searchTerm)
    );
  });

  // these items are place holders for future work; currently not in use for onclick on contact details
  const onContactClick = (accountId) => {
    console.log("Contact clicked for " + accountId);
  };

  const onContactDelete = (accountId) => {
    console.log("delete clicked for " + accountId);
  };

  const addContact = (event) => {
    console.log("Add Contact button clicked");
  };
  // see above statement

  return (
    <div className="contact">
      <h2 className="contact__Title">Contacts</h2>
      <h1 className="contact__Heading">Contact List</h1>
      <div className="contact__Search">
        <div className="contact__Search-Text">
          All your friends and family financial details in one place. Easily
          transfer currency internationally at the best possible rates.
        </div>
        <div className="contact__Search-bar">
          <Search
            searchTerm={searchTerm}
            handleInput={handleInput}
            // onSearchClick={onSearchClick}
          />
            <Button
            buttonStyle={"button-transparent contactSearch-AddButton"}
            buttonText={"＋ Add"}
            onClick={addContact}
            value="Add"
            type="submit"
          />
        </div>
      </div>
      <ContactList
        contactsArray={filteredContactsArray}
        onClick={onContactClick}
        onDelete={onContactDelete}
      />
    </div>
  );
};

export default ContactContainer;
