import { Link } from "react-router-dom";

export default function Transaction({transaction, index}) {

  function getDate() {
    const date = new Date(transaction.date);
    const options = { timeZone: "UTC", month: "short", day: "numeric", year: "numeric"}
    return (date.toLocaleDateString("en-US", options ));
  }

  return(<tr className="Transaction">
    <td>{getDate()}</td>
    <td><Link to={`/transactions/${index}`}>{transaction.itemName}</Link></td>
    <td>{transaction.amount}{transaction.amount >= 0? `🟢`: `🔴`}</td>
  </tr>);
}