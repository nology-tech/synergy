import React from 'react'
import garbage from "./../../assets/images/garbage.png";
import contacts from "../../assets/data/Contacts"

const ContactList = (props) => {
    const {contactsArray} = props
    const contactJSX = contactsArray.map (contact >= 
        (
      <div>
        <div className='contact__bankIcon'>
        <img
                className="contact__bankIcon__img"
                src={contacts.bankIcon}
                alt={contacts.name}
                            />
        </div>
        <div className='Contact__name'>{contacts.firstName + " " + contacts.lastName}</div>
        <div className='Contact__sortCode'>{contacts.sortCode}</div>
        <div className='Contact__account'>{contacts.account}</div>
        <div className='Contact__bankName'>{contacts.bankName}</div>
        <div className='contact__iban'>{contacts.iban}</div>
        <div>
            <img 
                className="contact__deleteIcon"
                src={garbage}
                alt={deleteIcon}
                onClick={deleteFunction}
             />
        </div>
      </div>
  
     )
      );
    return (
        <div className="contact__allDetails">
            {contactJSX}
        </div>
  )
}

export default ContactList;