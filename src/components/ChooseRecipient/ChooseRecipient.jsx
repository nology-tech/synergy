import React from 'react'
import ContactSearch from '../ContactSearch/ContactSearch';
import blackCross from '../../assets/images/black-cross.png'
import ContactList from '../ContactList/ContactList';

const ChooseRecipient = () => {

// Setting up the search box
const [searchQuery, setSearchQuery] = useState("");
const [searchTerm, setSearchTerm] = useState("");
// this handle reads the search text
const handleInput = (event) => {
  setSearchQuery(event.target.value);
};
// for the spyglass when clicked
const onSearchClick = (event) => {
  event.preventDefault();
  setSearchTerm(searchQuery.toLowerCase());
};

// Filter contact using search
const filteredContactsArray = contacts.filter((contact) => {
  console.log(`SearchTerm = ${searchTerm}`);
  const contactfirstName = contact.firstName.toLowerCase();
  const contactLastName = contact.lastName.toLowerCase();
  // const contactAccount = contact.account;
  const contactBank = contact.bankName.toLowerCase();
  return (
    contactfirstName.includes(searchTerm) ||
    contactLastName.includes(searchTerm) ||
    // isNaN(searchQuery)?true:contactAccount.includes(searchQuery) ||
    contactBank.includes(searchTerm)
  );
});



  return (
    <div>
      <img
          src={blackCross}
          alt="Close menu"
          onClick={toggleNav}
        />
      <h2>Choose Recipient</h2>
      <p>Search</p>

      ///contact search needs to be changed to remove the message "all frineds..."
    <ContactSearch
        searchTerm={searchQuery}
        handleInput={handleInput}
        onSearchClick={onSearchClick}
        addContact={addContact}
      />
      //the contact list & contact Row need to be duplicated to handel less data columns
       <ContactList
        contactsArray={filteredContactsArray}
        onClick={onContactClick}
        onDelete={onContactDelete}
      />
      </div>
  )
}

export default ChooseRecipient