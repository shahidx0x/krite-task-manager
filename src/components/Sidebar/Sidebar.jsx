import React from "react";
import "./Style.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/auth.slices";

const Sidebar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <main class="main">
        <aside class="sidebar">
          <nav class="nav">
            <ul>
              <li class="active">
                <a href="#">Task Manager</a>
              </li>
              <li>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </aside>
      </main>
    </>
  );
};

export default Sidebar;
