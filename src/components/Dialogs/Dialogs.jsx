import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { TextArea } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";

export default function Dialogs({ sendMessage, dialogsPage }) {
  let dialogs = dialogsPage.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  let messages = dialogsPage.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  const addMessage = (values) => {
    sendMessage(values.newMessageBody);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogs}</div>
      <div className={s.messages}>
        <div>{messages}</div>
      </div>
      <div>
        <AddMessageFormRedux onSubmit={addMessage} />
      </div>
    </div>
  );
}

const AddMessageFormRedux = reduxForm({ form: "dialogsMessage" })(
  AddMessageForm
);

const maxLength50 = maxLengthCreator(50);

function AddMessageForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={TextArea}
          name="newMessageBody"
          placeholder="Enter your message"
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
}
