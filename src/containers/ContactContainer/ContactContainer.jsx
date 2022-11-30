import React, { useState } from "react";
import Search from "../../components/Search/Search";
import "./ContactContainer.scss";
import ContactList from "../../components/ContactList/ContactList";
import contacts from "../../data/Contacts";
import Button from "../../components/Button/Button";
import UserContacts from "../../components/UserContacts/UserContacts";


const ContactContainer = (props) => {
  const {walletOn} = props;
  
  // Setting up the search box
  const [searchTerm, setSearchTerm] = useState("");

  const { handleAddContact, onContactClick } = props;

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

  const onContactDelete = (accountId) => {
    console.log("delete clicked for " + accountId);
  };

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
          />
            <Button
            buttonStyle={"button-transparent contactSearch-AddButton"}
            buttonText={"＋ Add"}
            onClick={handleAddContact}
          />
        </div>
      </div>
      {walletOn
        ? <UserContacts contactsArray={filteredContactsArray} onContactClick={onContactClick} onDelete={onContactDelete}/>
        : <ContactList contactsArray={filteredContactsArray} onContactClick={onContactClick} onDelete={onContactDelete} />
      }
    </div>
  );
};

export default ContactContainer;
