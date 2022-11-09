import React from 'react'
import ContactContainer from '../../containers/ContactContainer/ContactContainer';
import NavBar from "../../assets/images/navbar.png";
import SideBar from "../../assets/images/sidebar.jpg";
import  "./ContactListPage.scss";
import { Link } from 'react-router-dom';


const ContactListPage = () => {
  return (
    // <Link to="/contacts">
        <div className="contactPage">
            <div className="placeHolders__left">
                <img src={SideBar} alt="SideBar" />
            </div>
            <div className="placeHolders__right">
                <div className="placeHolders__Navbar">
                    <img src={NavBar} alt="NavBar" />
                </div>
                <ContactContainer />
            </div>
        </div>
    // </Link> 
  )
}

export default ContactListPage