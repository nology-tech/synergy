import garbage from "./../../assets/images/garbage.png";
import "./ContactRow.scss";

const ContactRow = ({contact, onContactClick, onDelete}) => {
   // Table of contacts tr = table row; td = table details
    return (
        <tr className="contactRow" key={contact.account}>
        {/* <div className="contactRow__trcontent"> */}
            <td className="contactRow__bankIcon" onClick={() => onContactClick(contact.account)}>
                <img
                className="contactRow__bankIcon__img"
                src={contact.bankIcon}
                alt={contact.name}
                />
            </td>
            <td className="contact__name" onClick={() => onContactClick(contact.account)}>{contact.firstName + " " + contact.lastName}</td>
            <td className="contact__sortCode" onClick={() => onContactClick(contact.account)}>{contact.sortCode}</td>
            <td className="contact__account" onClick={() => onContactClick(contact.account)}>{contact.account}</td>
            <td className="contact__bankName" onClick={() => onContactClick(contact.account)}>{contact.bankName}</td>
            <td className="contact__iban" onClick={() => onContactClick(contact.account)}>{contact.IBAN}</td>
        {/* </div> */}
        {/* <div className="contactRow__delete"> */}
            <td className="contact__delete">
                <img
                className="contactRow__delete__icon"
                src={garbage}
                alt="delete"
                onClick={() => onDelete(contact.account)}
                />
            </td>
        {/* </div> */}
        </tr>
  );
};

export default ContactRow;
