import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
const Main = () => {
  return (
    <div className="container">
      <p className="heading">Main Menu</p>
      <div className="pages">
        <Link to="/billing">
          <p>Billing</p>
        </Link>
        <Link to="/Inventory">
          <p>Inventory</p>
        </Link>
        <Link to="/itemrequest">
          <p>Item Request</p>
        </Link>
        <Link to="/salesreport">
          <p>Sales Report</p>
        </Link>
      </div>
    </div>
  );
};

export default Main;
