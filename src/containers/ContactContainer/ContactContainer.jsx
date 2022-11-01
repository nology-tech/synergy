import React from 'react'
import ContactSearch from '../../components/ContactSearch/ContactSearch'

const ContactContainer = () => {
  return ( 
    <>
    <div className='contact'>
      <div className='contact__Title'>Contacts</div>
      <h2 className='contact__Heading'>Contact List</h2>
      <ContactSearch />
      </div>
    </>
  )
}

export default ContactContainer