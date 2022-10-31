import React from 'react'
import ContactSearch from '../../components/ContactSearch/ContactSearch'

const ContactContainer = () => {
  return ( 
    <>
      <p className='contactTitle'>Contacts</p>
      <h2 className='contactHeading'>Contact List</h2>
      <ContactSearch />
    </>
  )
}

export default ContactContainer