import React from "react";
import "./style.css";

const LoginPage = () => {
  return (
    <div className="flex">
      <div className="login-left-side">
        <div className="flex lls-header-group">
          <img className="lls-icon" src="./task-icon.svg" alt="" srcset="" />
          <h2 className="lls-header">Task Manager</h2>
        </div>
        <div className="lls-quote-container"></div>
        <div className="lls-quote">
          <h2>
            " Productivity is never an accident. It is always the result of a
            commitment to excellence, intelligent planning, and focused effort "
          </h2>
          <p> - Paul J. Meyer</p>
        </div>
      </div>
      <div className="login-right-side"></div>
    </div>
  );
};

export default LoginPage;
