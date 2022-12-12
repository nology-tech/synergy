import React, { useState, useEffect } from "react";
import Search from "../../components/Search/Search";
import "./ContactContainer.scss";
import ContactList from "../../components/ContactList/ContactList";
// import contacts from "../../data/Contacts";
import Button from "../../components/Button/Button";
import UserContacts from "../../components/UserContacts/UserContacts";


const ContactContainer = (props) => {
  const {walletOn, onClick, currencyRecipientCode} = props;
  
  // Setting up the search box
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput=event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };
  
  const [contacts, setContacts] = useState([]);
  
  const getContacts = () => {
      fetch("http://localhost:8080/contacts/1000000")
        .then(res => res.json())
        .then(json => setContacts(json))
        .catch(err => console.log(err))
    }
  useEffect(() => {getContacts();}, []);

  
  // Filter contact using search
  const filteredContactsArray = contacts.filter((contact) => {
    const contactfirstName = contact.firstName.toLowerCase();
    const contactLastName = contact.lastName.toLowerCase();
    const contactBank = contact.bankName.toLowerCase();
    const currencyTo = currencyRecipientCode || "";
    return (
      contact.account_currency.includes(currencyTo) &&
      (contactfirstName.includes(searchTerm) ||
      contactLastName.includes(searchTerm) ||
      contactBank.includes(searchTerm))
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
          {onClick ? (
            <Button
            buttonStyle={"button-transparent contactSearch-AddButton"}
            buttonText={"＋ Add"}
            onClick={onClick}
            // value="Add"
            // type="submit"
          />
          ) :<></>
          }

        </div>
      </div>
        {/* {walletOn
          ? <UserContacts contactsArray={filteredContactsArray} onContactClick={onContactClick} onDelete={onContactDelete}/>
          : <ContactList contactsArray={filteredContactsArray} onContactClick={onContactClick} onDelete={onContactDelete} />
        } */}
        {contacts ? <ContactList contactsArray={filteredContactsArray} onContactClick={onContactClick} onDelete={onContactDelete} /> : ""}
    </div>
  );
};

export default ContactContainer;
