import React from "react";
import preloader from "../../assets/preloader.gif";
import s from "./Preloader.module.css";

export default function Preloader() {
  return (
    <div className={s.preloader}>
      <img src={preloader} alt="preloader" />
    </div>
  );
}
