import React from "react";
import s from "./FormsControl.module.css";

export function TextArea({ input, meta, ...props }) {
  let hasError = meta.touched && meta.error;

  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>
        <textarea {...input} {...meta} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
}

export function Input({ input, meta, ...props }) {
  let hasError = meta.touched && meta.error;

  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>
        <input {...input} {...meta} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
}
