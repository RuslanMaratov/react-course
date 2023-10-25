import React from "react";
import Dialogs from "./Dialogs";
import {
  updateNewMessageBodyActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogs-reducer";

export default function DialogsContainer({ store }) {
  let state = store.getState();

  const onSendMessageClick = () => {
    store.dispatch(sendMessageActionCreator());
  };
  const onNewMessageChange = (body) => {
    store.dispatch(updateNewMessageBodyActionCreator(body));
  };

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsData={state.dialogsPage.dialogsData}
      messageData={state.dialogsData.messageData}
      newMessageBody={state.newMessageBody}
    />
  );
}
