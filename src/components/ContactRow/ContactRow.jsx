import garbage from "./../../assets/images/garbage.png";
import "./ContactRow.scss";

const ContactRow = ({contact, onContactClick, onDelete, contactID, setContactID}) => {

    console.log(contact)
    setContactID(contact.contactUserId);
    console.log(contactID);
   // Table of contacts tr = table row; td = table details
    return (
        <tr className="contactRow" key={contact.account}  
        onClick={() => onContactClick(contact)}
        >
            <td className="contactRow__bankIcon">
                <img
                className="contactRow__bankIcon__img"
                src={contact.bankIcon}
                alt={contact.name}
                />
            </td>
            <td className="contact__name">{contact.firstName + " " + contact.lastName}</td>
            <td className="contact__sortCode">{contact.sortCode}</td>
            <td className="contact__account">{contact.account}</td>
            <td className="contact__account">{contact.account_currency}</td>
            <td className="contact__bankName">{contact.bankName}</td>
            <td className="contact__iban">{contact.iban}</td>
            <td className="contact__delete">
                <img
                className="contactRow__delete__icon"
                src={garbage}
                alt="delete"
                onClick={() => onDelete(contact.account)}
                />
            </td>
        </tr>
  );
};

export default ContactRow;
