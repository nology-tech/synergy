import React, { useState, useEffect } from "react";
import Search from "../../components/Search/Search";
import "./ContactContainer.scss";
import ContactList from "../../components/ContactList/ContactList";
import Button from "../../components/Button/Button";
import UserContacts from "../../components/UserContacts/UserContacts";

const ContactContainer = (props) => {
  const {
    walletOn,
    onClick,
    currencyRecipientCode,
    contact,
    setContact,
    onContactClick,
  } = props;

  // Setting up the search box
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const [contacts, setContacts] = useState([]);

  const getContacts = () => {
    fetch("http://localhost:8080/contacts/1000000")
      .then((res) => res.json())
      .then((json) => setContacts(json))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getContacts();
  }, []);

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

  const onContactDelete = (accountId) => {};

  const addContact = (event) => {};

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
          <Search searchTerm={searchTerm} handleInput={handleInput} />
          {onClick ? (
            <Button
              buttonStyle={"button-transparent contactSearch-AddButton"}
              buttonText={"＋ Add"}
              onClick={onClick}
            />
          ) : (
            <></>
          )}
        </div>
      </div>

      {contacts ? (
        <ContactList
          contactsArray={filteredContactsArray}
          onContactClick={onContactClick}
          onDelete={onContactDelete}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ContactContainer;
