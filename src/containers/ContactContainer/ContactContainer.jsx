import React, { useState } from "react";
import Search from "../../components/Search/Search";
import "./ContactContainer.scss";
import ContactList from "../../components/ContactList/ContactList";
import contacts from "../../data/Contacts";
import Button from "../../components/Button/Button";


const ContactContainer = () => {
  // Setting up the search box
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  // this handle reads the search text
  const handleInput = (event) => {
    setSearchQuery(event.target.value);
  };
  // for the spyglass when clicked
  const onSearchClick = (event) => {
    event.preventDefault();
    setSearchTerm(searchQuery.toLowerCase());
  };

  // Filter contact using search
  const filteredContactsArray = contacts.filter((contact) => {
    console.log(`SearchTerm = ${searchTerm}`);
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
      <div className="contactSearch">
        <div className="contactSearch__text">
          All your friends and family financial details in one place. Easily
          transfer currency internationally at the best possible rates.
        </div>
        <Search
          searchTerm={searchQuery}
          handleInput={handleInput}
          onSearchClick={onSearchClick}
        />
          <Button
          buttonStyle={"button-transparent contactSearch__area__addButton"}
          buttonText={"Add"}
          onClick={addContact}
          value="Add"
          type="submit"
        />
        {/* <input type="submit" className="contactSearch__area__addButton" onClick={addContact} value="Add"></input> */}
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
