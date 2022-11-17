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
    <form>
        <h2>Add Recipient</h2>
        <table>
        <tr>Recipient Name</tr>
        <tr>
        <input
        type = "text">
        
        </input>
        </tr>
        <tr>Account Type</tr>
        <input></input>
        <label>Account Number</label>
        <input></input>
        <label>Sort Code</label>
        <input></input>
        </table>
        <button>Cancel</button> 

    </form>
  )
}

export default ContactAdd