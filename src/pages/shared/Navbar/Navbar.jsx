import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>
        <div style={{ borderBottom: "1px solid black" }}>
          <h2 style={{ fontSize: "2rem" }}>Task Manager</h2>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
