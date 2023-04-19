import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./TransactionDetails.css"

const API = process.env.REACT_APP_API_URL;

export default function TransactionDetails() {

  const [transaction, setTransaction] = useState({});
  let navigate = useNavigate();
  let {index} = useParams();

  useEffect(() => {
    axios
    .get(`${API}/transactions/${index}`)
    .then((res) => {
      setTransaction(res.data.transactions);
    })
    .catch((e) => navigate("/notfound"));
  },[]);

  function positiveOrNegative () {
    return (transaction.amount < 0) ?
      {color: "red"}:
      {color: "green"}
  }

  function getDate() {
    const date = new Date(transaction.date);
    const options = { timeZone: "UTC", month: "short", day: "numeric", year: "numeric"}
    return (date.toLocaleDateString("en-US", options ));
  }

  function deleteTransaction() {
    axios
    .delete(`${API}/transactions/${index}`)
    .then(() => {
      navigate("/transactions");
    })
    .catch((e) => console.error("catch", e));
  }

  return(<div className="TransactionDetails">
    <article>
      <h3>{transaction.itemName}</h3>
      <p>From: {transaction.from}</p>
      <p>Date: {getDate()}</p>
      <p>Amount: <b style={positiveOrNegative()}>{transaction.amount}</b></p>
      <p>Category: {transaction.category}</p>
    </article>

    <Link to={`/transactions/${index}/edit`}>
      <button>Edit</button>
    </Link>

    <button onClick={deleteTransaction}>Delete</button>
  </div>);
}