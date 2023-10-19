import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({ id, name }) => {
  let path = "/dialogs/" + id;
  const setActive = ({ isActive }) =>
    isActive ? s.dialog + " " + s.active : "";
  return (
    <div className={s.dialog}>
      <NavLink className={setActive} to={path}>
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
