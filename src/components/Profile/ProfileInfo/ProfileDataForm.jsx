import React from "react";
import { Input, TextArea } from "../../common/FormsControls/FormsControls";
import { reduxForm, Field } from "redux-form";
import s from "../../common/FormsControls/FormsControl.module.css";

const ProfileDataFormReduxForm = reduxForm({
  form: "edit-form",
  destroyOnUnmount: false,
})(ProfileDataForm);

function ProfileDataForm({ handleSubmit, profile, error }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>{error && <div className={s.formSummaryError}>{error}</div>}</div>
      <div>
        <button>Save</button>
      </div>
      <div>
        <b>Full name: </b>
        <Field name="fullName" component={Input} placeholder="Full Name" />
      </div>
      <div>
        <b>Looking for a job: </b>
        <Field name="lookingForAJob" component={Input} type="checkbox" />
      </div>
      <div>
        <b>My skills: </b>
        <Field name="lookingForAJobDescription" component={TextArea} />
      </div>
      <div>
        <b>About me: </b>
        <Field name="aboutMe" component={TextArea} />
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div>
              <div>
                <b>{key}: </b>
                <Field name={`contacts.${key}`} component={Input} />
              </div>
            </div>
          );
        })}
      </div>
    </form>
  );
}

export default ProfileDataFormReduxForm;
