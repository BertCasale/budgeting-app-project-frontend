import { NavLink } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
  return(<div className="Navbar">
    <NavLink to="/transactions"><h1>Budget App</h1></NavLink>
    <NavLink to="/transactions/new"><button>New Transaction</button></NavLink>
  </div>);
}