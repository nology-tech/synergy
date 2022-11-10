import React from 'react'
import ContactContainer from '../../containers/ContactContainer/ContactContainer';
import NavBar from "../../assets/images/navbar.png";
import SideBar from "../../assets/images/sidebar.jpg";
import  "./ContactListPage.scss";
import SignInNav from '../SignInNav/SignInNav';
import NavMenu from '../NavMenu/NavMenu';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
const ContactListPage = (props) => {
    const {searchTerm, handleInput} = props;
  return (
        <div className="contactPage">
            <div className="placeHolders__left">
                <NavMenu />
            </div>
            <div className="placeHolders__right">
                <div className="placeHolders__Navbar">
                    <DashboardHeader searchTerm= {searchTerm} handleInput={handleInput} />
                </div>
                <ContactContainer />
            </div>
        </div>
  )
}
export default ContactListPage