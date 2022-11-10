import React from 'react'
import ContactContainer from '../../containers/ContactContainer/ContactContainer';
import NavBar from "../../assets/images/navbar.png";
import  "./ContactListPage.scss";
import NavMenu from '../NavMenu/NavMenu';

const ContactListPage = () => {
  return (
        <div className="contactPage">
            <div className="placeHolders__left">
                <NavMenu />
            </div>
            <div className="placeHolders__right">
                <div className="placeHolders__Navbar">
                    <img src={NavBar} alt="NavBar" />
                </div>
                <ContactContainer />
            </div>
        </div>
  )
}

export default ContactListPage