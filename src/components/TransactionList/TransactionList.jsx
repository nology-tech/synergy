
import TransactionRow from "../TransactionsRow/TransactionRow";
import "./TransactionList.scss";



const TransactionList = ({transactionsArray}) => {
// Map each element of the array
  const transactionJSX = transactionsArray.map((transaction) => (
      <TransactionRow transaction={transaction} key={transaction.txnId}/>
)
);

// Transaction table: tr = table row; th = table heading;
  
  return (
    
    <div className="transactionList">
        <table className="transactionTable">
        <thead className="transactionList__head">
          <tr>
            <th scope="col"> </th>
            <th scope="col">Transaction ID</th>
            <th scope="col">Sender Amount</th>
            <th scope="col">Payee Amount</th>
            <th scope="col">Rate</th>
            <th scope="col">Date</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="transactionList__body">
          {transactionJSX}
        </tbody>
      </table>
    </div>
  )  
};

export default TransactionList;
