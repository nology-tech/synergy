import garbage from "./../../assets/images/garbage.png";
import "./ContactRow.scss";

const ContactRow = ({contact, onClick, onDelete}) => {
  return (
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
  );
};

export default ContactRow;