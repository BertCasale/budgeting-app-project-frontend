import { Link } from "react-router-dom";

export default function Transaction({transaction, index}) {

  //convert the date to the correct format
  function getDate() {
    const date = new Date(transaction.date);
    const options = {month: "short", day: "numeric", year: "numeric"}
    return (date.toLocaleString("en-US", options));
  }

  return(<tr className="Transaction">
    <td>{getDate()}</td>
    <td><Link to={`/transactions/${index}`}>{transaction.itemName}</Link></td>
    <td>{transaction.amount}</td>
  </tr>);
}