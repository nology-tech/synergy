
import ContactRow from "../ContactRow/ContactRow";
import garbage from "./../../assets/images/garbage.png";
import "./ContactList.scss";

// import contacts from "../../assets/data/Contacts"

const ContactList = ({contactsArray, onClick, onDelete}) => {
  console.log("ContactList");
  console.log(contactsArray);
  const contactJSX = contactsArray.map((contact) => (
      // <ContactRow contact={contact} onClick={onClick} onDelete={onDelete} key={contact.account}/>
      <tr className="contact" key={contact.account} >
        <td className="contact__bankIcon">
            <img
            className="contact__bankIcon__img"
            src={contact.bankIcon}
            alt={contact.name}
            onClick={onClick}
            />
        </td>
        <td className="contact__name">{contact.firstName + " " + contact.lastName}</td>
        <td className="contact__sortCode">{contact.sortCode}</td>
        <td className="contact__account">{contact.account}</td>
        <td className="contact__bankName">{contact.bankName}</td>
        <td className="contact__iban">{contact.IBAN}</td>
        <td>
            <img
            className="contact__deleteIcon"
            src={garbage}
            alt="delete"
            onClick={() => onDelete(contact.account)}
            />
        </td>
  </tr>
)
);


  
  return (
    <table className="contactList">
      <thead className="contactList__head">
        <tr>
          <th scope="col"> </th>
          <th scope="col">Name</th>
          <th scope="col">Sort Code</th>
          <th scope="col">Account No</th>
          <th scope="col">Bank</th>
          <th scope="col">IBAN</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody className="contactList__body">
        {contactJSX}
      </tbody>
    </table>
  )  
};

export default ContactList;
