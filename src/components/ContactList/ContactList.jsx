
import ContactRow from "../ContactRow/ContactRow";
import "./ContactList.scss";



const ContactList = ({contactsArray, onContactClick, onDelete}) => {
// Map each element of the array
  const contactJSX = contactsArray.map((contact) => (
      <ContactRow contact={contact} onContactClick={onContactClick} onDelete={onDelete} key={contact.account}/>
)
);

// Contact table: tr = table row; th = table heading;
  
  return (
    
    <div className="contactList">
        <table className="contactTable">
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
    </div>
  )  
};

export default ContactList;
