import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./form.css"
const API = process.env.REACT_APP_API_URL;

export default function TransactionNew() {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    itemName: "",
    amount: 0,
    date: "",
    from: "",
    category: ""
  });

  function handleTextChange(event){
    setTransaction({...transaction, [event.target.id]: event.target.value});
  }

  function handleNumberChange(event) {
    setTransaction({...transaction, [event.target.id]: Number(event.target.value)});
  }

  function addTransaction(newTransaction) {
    axios
    .post(`${API}/transactions`, newTransaction)
    .then(() => {
      navigate("/transactions");
    })
    .catch((e) => console.error("catch", e))
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTransaction(transaction);
  }

  return(<div className="TransactionNew">
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input 
        type="date" 
        id="date" 
        name="date"
        pattern="\d{4}-\d{2}-\d{2}"
        value={transaction.date}
        onChange={handleTextChange}
        required/>

      <label htmlFor="itemName">Name:</label>
      <input 
        type="text"
        id="itemName"
        name="name"
        placeholder="name"
        value={transaction.itemName}
        onChange={handleTextChange} 
        required/>

      <label htmlFor="amount">Amount:</label>
      <input 
        type="number"
        id="amount"
        name="amount"
        placeholder={0}
        value={transaction.amount}
        onChange={handleNumberChange} 
        required/>

      <label htmlFor="from">From:</label>
      <input 
        type="text"
        id="from"
        name="from"
        placeholder="from"
        value={transaction.from}
        onChange={handleTextChange} 
        required/>

      <label htmlFor="category">Select a Category:</label>
      <select 
        name="category" 
        id="category"
        value={transaction.category}
        onChange={handleTextChange}  
        required>
        <option></option>
        <option value="Clothing">Clothing</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Food">Food</option>
        <option value="Gas">Gas</option>
        <option value="Gifts">Gifts</option>
        <option value="Income">Income</option>
        <option value="Loan Payment">Loan Payment</option>
        <option value="Miscellaneous">Miscellaneous</option>
        <option value="Utilities">Utilities</option>
      </select>

      <button type="submit">Create New item</button>
    </form>
  </div>);
}