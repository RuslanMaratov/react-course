import React from "react";
import s from "./FormsControl.module.css";

export function TextArea({ input, meta: { touched, error }, ...props }) {
  let hasError = touched && error;

  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>
        <textarea {...input} meta {...props} />
      </div>
      {hasError && <span>{error}</span>}
    </div>
  );
}

export function Input({ input, meta: { touched, error }, ...props }) {
  let hasError = touched && error;

  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>
        <input {...input} meta {...props} />
      </div>
      {hasError && <span>{error}</span>}
    </div>
  );
}
