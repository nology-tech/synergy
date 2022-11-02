import React from "react";
import ContactRow from "../ContactRow/ContactRow";

// import contacts from "../../assets/data/Contacts"

const ContactList = ({contactsArray, onClick, onDelete}) => {
  console.log("ContactList");
  console.log(contactsArray);
  const contactJSX = contactsArray.map((contact) => (
    <div key={contact.account}>
      <ContactRow contact={contact} onClick={onClick} onDelete={onDelete} />
    </div>

  ) );

  return <div className="contact__allDetails">{contactJSX}</div>;
};

export default ContactList;
