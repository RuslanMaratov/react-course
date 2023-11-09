import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <header className={s.header}>
      <img alt="logo" src="../logo.png" />
      <div className={s.loginWrapper}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
}
