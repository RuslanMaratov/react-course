import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const setActive = ({ isActive }) => (isActive ? s.active : "");

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink className={setActive} to="/profile">
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={setActive} to="/dialogs">
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={setActive} to="/users">
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={setActive} to="/news">
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={setActive} to="/music">
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={setActive} to="/settings">
          Settings
        </NavLink>
      </div>
    </nav>
  );
}
