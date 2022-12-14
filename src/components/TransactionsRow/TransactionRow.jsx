import garbage from "./../../assets/images/garbage.png";
import "./TransactionRow.scss";

const TransactionRow = ({ transaction }) => {
  // Table of transaction tr = table row; td = table details
  return (
    <tr className="transactionRow" key={transaction.txnId}>
      
      <td className="transaction__txnId">
        {transaction.txnId}
      </td>
      <td className="contact__senderAmount">{transaction.recipientAmount}</td>
      <td className="contact__payeeAmount">{transaction.payeeamount}</td>
      <td className="contact__fxRate">{transaction.exchangeRate}</td>
      <td className="contact__date">{transaction.dateCreated}</td>
      
    
    </tr>
  );
};

export default TransactionRow;
