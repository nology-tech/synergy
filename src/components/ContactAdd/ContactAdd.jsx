// on click from <add> button for contact -- open screen that enables user to manually Add Receipient
// Receipient Name: FirstName LastName
// Account Type: Business or Personal
// Account Number: Number of the account
// Sort Code: six digit code that identifies banks in UK -- in US would be ABA/routing number
// Button to cancel and clear all fields
// Button to continue to review

import React from 'react'

const ContactAdd = () => {
  return (
    <div className='add-contacts'>
    <h2>Add Recipient</h2>
    <form>
        <label for="fname">Recipient Name</label><br></br>
        <input type="text" id="fname" name="fname"></input><br></br>
        <label for="actype">Account Type</label><br></br>
        <input type="text" id="actype" name="actype"></input><br></br>
        <label for="acnum">Account Number</label><br></br>
        <input type="text" id="acnum" name="acnum"></input><br></br>
        <label for="sort">Sort Code</label><br></br>
        <input type="text" id="sort" name="sort"></input><br></br>
    </form>
     <button>Cancel</button>
     <button>Continue</button>
     </div>
  )
}

export default ContactAdd