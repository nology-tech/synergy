import React, { useState } from "react";
import "./UserContacts.scss";

import ContactList from "../ContactList/ContactList";
import UserContactList from "../../data/UserContactList";

const UserContacts = ({ contactsArray, onContactClick, onDelete }) => {
  // take userId from user credential's user ID
  const loginID = "1234560";
  const [userId, setUserId] = useState(loginID);

  // identify matching user id and contact account/s
  const filterUCLByUserId = UserContactList.filter(
    (user) => user.uid == userId
  );
  const getUId = filterUCLByUserId[0].uid;
  const getAccountsByUId = filterUCLByUserId[0].contacts;

  // user linked contacts mapped to contact details
  let filteredContactsArr = [];
  getAccountsByUId.forEach((userContactAcc) => {
    contactsArray.forEach((masterContact) => {
      if (masterContact.account == userContactAcc) {
        filteredContactsArr.push(masterContact);
      }
    });
  });

  return (
    <>
      <ContactList
        contactsArray={filteredContactsArr}
        onContactClick={onContactClick}
        onDelete={onDelete}
      />
    </>
  );
};

export default UserContacts;
