import garbage from "./../../assets/images/garbage.png";

const ContactRow = (contact, onClick, onDelete) => {
  return (
    <div className="contact" key={contact.account}>
      <div className="contact__bankIcon">
        <img
          className="contact__bankIcon__img"
          src={contact.bankIcon}
          alt={contact.name}
          onClick={onClick}
        />
      </div>
      <div className="contact__name">
        {contact.firstName + " " + contact.lastName}
      </div>
      <div className="contact__sortCode">{contact.sortCode}</div>
      <div className="contact__account">{contact.account}</div>
      <div className="contact__bankName">{contact.bankName}</div>
      <div className="contact__iban">{contact.iban}</div>
      <div>
        <img
          className="contact__deleteIcon"
          src={garbage}
          alt="delete"
          onClick={onDelete(contact.account)}
        />
      </div>
    </div>
  );
};

export default ContactRow;
