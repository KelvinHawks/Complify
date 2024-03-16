import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navlinks.module.css";
function Navlinks() {
  return (
    <React.Fragment>
      <ul className={styles.nav_links}>
        <li className={styles.active}>
          <Link to="/" exact>
            Dashboard
          </Link>
        </li>
        <li>
          <select>
            <option value="team-management">Team Management</option>
            <option value="finance">Finance</option>
            <option value="marketing">Marketing</option>
          </select>
        </li>
        <li>
          <select id="month-dropdown">
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </li>
        <li>
          <Link to="/reports" exact>
            Reports
          </Link>
        </li>
        <li className={styles.sign_up}>
          <Link to="/signup">Sign up</Link>
        </li>
        <li className={styles.login}>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Navlinks;
