import { useState, useEffect } from "react";
import axios from "axios";
import Transaction from "./Transaction.js";
const API = process.env.REACT_APP_API_URL;

export default function Transactions( {setTotal, total} ) {
  const [transactions, setTransactions] = useState([]);
  let currentTotal = 0;
  //get all the transactions when the page loads
  useEffect(() => {
    axios
    .get(`${API}/transactions`)
    .then((res)=> {
      setTransactions(res.data.transactions);
    })
    .catch((e) => console.error("catch", e));
  }, []);

  //set the total
  useEffect(() => {
    setTotal(currentTotal);
  });

  return(<div className="Transactions">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Transaction Name</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index)=> {
          //add to the total amount
          currentTotal+=transaction.amount;

          return (<Transaction key={index} transaction={transaction} index={index} setTotal={setTotal} total={total}/>);
        })}
      </tbody>
    </table>
  </div>);
}