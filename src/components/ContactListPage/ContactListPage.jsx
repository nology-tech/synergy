import React, { useState } from "react";
import ContactContainer from '../../containers/ContactContainer/ContactContainer';
import NavBar from "../../assets/images/navbar.png";
import "../../assets/sass/_dashboard.scss"
import NavMenu from '../NavMenu/NavMenu';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

const ContactListPage = (props) => {

  const { handleAddContact,username } = props;
  console.log (username);

    // From Choose Recipient from existing contact
    const [contact, setContact] = useState({account:"", firstName:"", lastName:"", accountType:"", sortCode:"", bankName:"", accountCurrency:""});
    console.log(`Contact to: ${contact.account} ${contact.firstName} ${contact.lastName} ${contact.accountType} ${contact.sortCode}`);
  
   // these items are place holders for future work; currently not in use for onclick on contact details
   const onContactClick = (contact) => {
    console.log("Contact clicked for " + contact.account);
    setContact(contact);
  };
  return (
        <div className="dashboardPage">
                <NavMenu />
            <div className='dashboardPage__right'>
                <DashboardHeader username={username} />
                <ContactContainer 
                  onClick = {handleAddContact}
                  onContactClick = {onContactClick}
                  contact = {contact}
                  setContact = {setContact}
                />
            </div>
        </div>
  )
}
export default ContactListPage