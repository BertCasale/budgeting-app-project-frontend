import Transactions from "../Components/Transactions.js";
import { useState } from "react";

export default function BudgetIndex() {
  const [total, setTotal] = useState(0);
  //total should equal 2634 to start

  function balanceCheck () {
    if (total <= 0) {
      return {backgroundColor: "red", color: "white"}
    } else if (total <= 100){
      return {backgroundColor: "yellow", color: "black"}
    } else {
      return {backgroundColor: "green", color: "white"}
    }
  }

  return(<div className="BudgetIndex">
    <h2>Bank Account Total: <span style={balanceCheck()}>{total}</span></h2>

    <Transactions setTotal={setTotal} total={total}/>
  </div>);
}