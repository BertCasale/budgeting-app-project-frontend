export default function Edit() {
  return(<div className="Edit">
    <h2>Edit item</h2>

    <form>
      <label htmlFor="date">Date:</label>
      <input 
        type="date" 
        id="date" 
        name="date"
        required/>

      <label htmlFor="name">Name:</label>
      <input 
        type="text"
        id="name"
        name="name"
        placeholder="name" 
        required/>

      <label htmlFor="amount">Amount:</label>
      <input 
        type="number"
        id="amount"
        name="amount"
        placeholder={0} 
        required/>

      <label htmlFor="from">From:</label>
      <input 
        type="text"
        id="from"
        name="from"
        placeholder="from" 
        required/>

      <label htmlFor="category">Select a Category:</label>
      <select 
        name="category" 
        id="category" 
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