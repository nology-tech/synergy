import React, { useState } from 'react'
import ContactSearch from '../../components/ContactSearch/ContactSearch'
import "./ContactContainer.scss"
import ContactList from '../../components/ContactList/ContactList'
import contacts from '../../assets/data/Contacts'


// Setting up the search box
const [searchQuery, setSearchQuery] = useState("");
const handleInput = (event) => {
  setSearchQuery(event.target.value);
}
// Filter contact using search
  const contactSearch = contactsArray.filter(contact => {
  const contactfirstName = contacts.firstName.toLowerCase();
  const contactLastName = contacts.lastName.toLowerCase();
  const contactAccount = contacts.account.toLowerCase();
  const contactBank = contacts.bankName.toLowerCase();

 
    return (contactfirstName.includes(searchQuery) || contactLastName.includes(searchQuery) || contactAccount.includes(searchQuery)) || contactBank.includes(searchQuery) ;
  });

const ContactContainer = () => {
  return ( 
    <>
    <div className='contact'>
      <div className='contact__Title'>Contacts</div>
      <h2 className='contact__Heading'>Contact List</h2>
      <ContactSearch Title="Search" 
         searchQuery={searchQuery}
         handleInput={handleInput}/>
      <ContactList title="Contacts" contactsArrayr={contactSearch}/>
      
      </div>
    </>
  )
}

export default ContactContainer