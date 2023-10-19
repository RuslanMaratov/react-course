import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export default function Dialogs({ dialogsState }) {
  let dialogs = dialogsState.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messages = dialogsState.messagesData.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogs}</div>
      <div className={s.messages}>{messages}</div>
    </div>
  );
}
