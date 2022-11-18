import React, { useState } from "react";
import "./UserContacts.scss";
import userContacts from '../../data/UserContactList';
import users from '../../data/Users';
import contacts from '../../data/Contacts';
import ContactRow from "../ContactRow/ContactRow";    
import UserContactList from "../../data/UserContactList";

const UserContacts = ({contactsArray}) => {
  const item = 0;
  const index = 0;
  // take userId from user credential's user ID
  const loginID = "1234560"; // modify later so user ID is picked up from Login event
  const [userId, setUserId] = useState(loginID);
  console.log (`userId to match: ${userId}`);

  const accNum = 13264514864;
  const [accountNo, setAccountNo] = useState(accNum);
  console.log (`accountNo to match: ${accountNo}`);

  // filter UserContactList.js data file's uid matching loginId 
  // identified uid is key linking user to contacts (account number is unique)
  const filterUCLByUserId = UserContactList.filter(user => user.uid==userId);
  const getUId = filterUCLByUserId[0].uid;
  const getAccountsByUId = filterUCLByUserId[0].contacts;
        console.log (`uid matched: ${getUId}`);
        console.log (`contact accounts for uid: ${getAccountsByUId}`);
  
  const iterate = (item, index) => { 
        console.log(`${item} has index ${index}`);
        console.log (item);
        console.log (contactsArray[0].account);
        }

  getAccountsByUId.forEach(iterate);
///////
  let filteredContactsArr =[]; 
  getAccountsByUId.forEach(userContactAcc => {
    contactsArray.forEach((masterContact) => {
      if (masterContact.account == userContactAcc) {
        filteredContactsArr.push(masterContact);
      }
  })
})
  console.log (filteredContactsArr);
  // console.log (contactsArray);

  // const filteredContactsArr = contactsArray.map(contact => contact);
          
  const contactJSX = filteredContactsArr.map((contact) => (
    <ContactRow contact={contact} key={contact.account}/>
  ))

  return (
    <>
    <h1>UserContacts.jsx testing here - inserted component in ContactContainer</h1>
    <div className="contactList">
        <table className="contactTable">
        <thead className="contactList__head">
          <tr>
            <th scope="col"> </th>
            <th scope="col">Name</th>
            <th scope="col">Sort Code</th>
            <th scope="col">Account No</th>
            <th scope="col">Bank</th>
            <th scope="col">IBAN</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="contactList__body">
          {contactJSX}
        </tbody>
      </table>
    </div>
    </>
  )  
};

export default UserContacts;