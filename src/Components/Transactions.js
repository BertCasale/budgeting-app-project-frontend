import { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Transactions( {setTotal} ) {
  const [transactions, setTransactions] = useState([]);

  //get all the transactions when the page loads
  useEffect(() => {
    axios
    .get(`${API}/transactions`)
    .then((res)=> {
      setTransactions(res.data.transactions);
    })
    .catch((e) => console.error("catch", e));
  }, []);

  return(<div className="Transactions">
    Transactions
  </div>);
}