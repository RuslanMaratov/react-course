import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export default function Dialogs({
  updateNewMessageBody,
  sendMessage,
  dialogsPage,
}) {
  let dialogs = dialogsPage.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  let messages = dialogsPage.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  const onSendMessageClick = () => {
    sendMessage();
  };
  const onNewMessageChange = (event) => {
    let body = event.target.value;
    updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogs}</div>
      <div className={s.messages}>
        <div>{messages}</div>
        <div>
          <textarea
            value={dialogsPage.newMessageBody}
            onChange={onNewMessageChange}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
}
