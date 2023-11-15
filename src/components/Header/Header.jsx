import React from "react";
import s from "./Header.module.css";
import { NavLink, Navigate } from "react-router-dom";

export default function Header(props) {
  return (
    <header className={s.header}>
      <img alt="logo" src="../logo.png" />
      <div className={s.loginWrapper}>
        {props.isAuth ? (
          <div className={s.logoutWrapper}>
            <p>{props.login}</p>
            <button onClick={props.logout}>Logout</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
          // <Navigate to={}/>
        )}
      </div>
    </header>
  );
}
