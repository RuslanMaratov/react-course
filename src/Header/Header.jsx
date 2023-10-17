import React from "react";
import s from "./Header.module.css";

export default function Header() {
  return (
    <header className={s.header}>
      <img alt="logo" src="../logo.png" />
    </header>
  );
}
