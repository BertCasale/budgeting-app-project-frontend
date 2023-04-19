import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function Show() {
  const [transaction, setTransaction] = useState({});
  let navigate = useNavigate();
  let {index} = useParams();

  useEffect(() => {
    axios
    .get(`${API}/transactions/${index}`)
    .then((res) => {
      setTransaction(res.data.transactions)
      console.log(res.data.transactions)
    })
    .catch((e) => navigate("/notfound"));
  },[]);

  //check if the amount is positive or negative, and apply a color 
  function positiveOrNegative () {
    return (transaction.amount < 0) ?
      {color: "red"}:
      {color: "green"}
  }

  function deleteTransaction() {
    axios
    .delete(`${API}/transactions/${index}`)
    .then(() => {
      navigate("/transactions");
    })
    .catch((e) => console.error("catch", e));
  }

  return(<div className="Show">
    <h2>Item details</h2>
    
    <article>
      <h3>{transaction.itemName}</h3>
      <h4>From: {transaction.from}</h4>
      <p>Amount: <b style={positiveOrNegative()}>{transaction.amount}</b></p>
      <p>Category: {transaction.category}</p>
    </article>

    <Link to={`/transactions/${index}/edit`}>
      <button>Edit</button>
    </Link>

    <button onClick={deleteTransaction}>Delete</button>
  </div>);
}