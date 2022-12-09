import React from 'react'
import ContactContainer from '../../containers/ContactContainer/ContactContainer';
import NavBar from "../../assets/images/navbar.png";
import "../../assets/sass/_dashboard.scss"
import NavMenu from '../NavMenu/NavMenu';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

const ContactListPage = (props) => {

  const { handleAddContact,username } = props;

  return (
        <div className="dashboardPage">
                <NavMenu />
            <div className='dashboardPage__right'>
                <DashboardHeader username={username} />
                <ContactContainer 
                  onClick = {handleAddContact}
                />
            </div>
        </div>
  )
}
export default ContactListPage