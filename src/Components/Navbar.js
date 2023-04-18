import { NavLink } from "react-router-dom";

export default function Navbar() {
  return(<div className="Navbar">
    <NavLink to="/transactions"><h2>Budget App</h2></NavLink>
    <NavLink to="/transactions/new"><button>New Transaction</button></NavLink>
  </div>);
}