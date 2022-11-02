
import ContactRow from "../ContactRow/ContactRow";
import garbage from "./../../assets/images/garbage.png";
import "./ContactList.scss";

// import contacts from "../../assets/data/Contacts"

const ContactList = ({contactsArray, onClick, onDelete}) => {
  console.log("ContactList");
  console.log(contactsArray);
  const contactJSX = contactsArray.map((contact) => (
      <ContactRow contact={contact} onClick={onClick} onDelete={onDelete} key={contact.account}/>
  ) );


  
  return (
    <table className="contactList">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Sort Code</th>
          <th>Account No</th>
          <th>Bank</th>
          <th>IBAN</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {contactJSX}
      </tbody>
    </table>
  )  
};

export default ContactList;
