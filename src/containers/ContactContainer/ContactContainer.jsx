import React, { useState, useEffect } from "react";
import Search from "../../components/Search/Search";
import "./ContactContainer.scss";
import ContactList from "../../components/ContactList/ContactList";
import Button from "../../components/Button/Button";
import apiurl from "../../config/url";


const ContactContainer = (props) => {
  const {walletOn, onClick, currencyRecipientCode, contact, setContact, onContactClick, userID} = props;
  
  // Setting up the search box
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput=event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  // Contacts of the current user
  const [contacts, setContacts] = useState([]);
  
  const getContacts = () => {
      console.log("UserID: " + userID)
      if (userID) {
        fetch(`${apiurl}/contacts/${userID}`)
        .then(res => res.json())
        .then(json => setContacts(json))
        .catch(err => console.log(err))
      }
    }
  useEffect(() => {getContacts();}, [userID]);

  
  // All Contacts
  const getAllContacts = () => {
      fetch(`${apiurl}/contacts`)
        .then(res => res.json())
        .then(json => setAllContacts(json))
        .catch(err => console.log(err))
    }
  useEffect(() => {getAllContacts();}, [currencyRecipientCode]);

  const setAllContacts = (json) => {
    console.log("WalletOn = " + walletOn)
    if (!walletOn) setContacts(json);
    console.log(json);
  }

  const [contactID, setContactID] = useState("");

  
  // Filter contact using search
  const filteredContactsArray = contacts.filter((contact) => {
    const contactfirstName = contact.firstName.toLowerCase();
    const contactLastName = contact.lastName ;
    const contactBank = contact.bankName.toLowerCase();
    const currencyTo = currencyRecipientCode || "";
    const userFilter = currencyRecipientCode?userID:"";

    return (
      contact.account_currency.includes(currencyTo) &&
      // contact.contactUserId.includes(userFilter) &&
      (contactfirstName.includes(searchTerm) ||
      contactLastName.includes(searchTerm) ||
      contactBank.includes(searchTerm))
    );
  });

  const deleteUserContact=()=>{
    fetch(`${apiurl}/users/${userID}/${contactID}` , {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(json => setContacts(json))
    .catch(err => console.log(err))
  };

  // // these items are place holders for future work; currently not in use for onclick on contact details
  // const onContactClick = (contact) => {
  //   console.log("Contact clicked for " + contact.account);
  //   setContact(contact);
  // };

  const onContactDelete = (contactUserId) => {
    setContactID(contactUserId);
    deleteUserContact()
    console.log("delete clicked for " + contactID);
  };

  // const addContact = (event) => {
  //   console.log("Add Contact button clicked");
  // };
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
        {contacts 
          ? <ContactList contactsArray={filteredContactsArray} onContactClick={onContactClick} onDelete={onContactDelete} contactID={contactID} setContactID={setContactID} walletOn={walletOn}/> : ""}
    </div>
  );
};

export default ContactContainer;
