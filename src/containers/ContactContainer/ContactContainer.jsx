import React from 'react'
import ContactSearch from '../../components/ContactSearch/ContactSearch'
import "./ContactContainer.scss"
import  Contacts from "../../assets/data/Contacts" 
import ContactList from '../../components/ContactList/ContactList'

const ContactContainer = () => {
  return ( 
    <>
    <div className='contact'>
      <div className='contact__Title'>Contacts</div>
      <h2 className='contact__Heading'>Contact List</h2>
      <ContactSearch />
      <ContactList />
      
      </div>
    </>
  )
}

export default ContactContainer