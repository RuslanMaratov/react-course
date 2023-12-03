import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import s from "../common/FormsControls/FormsControl.module.css";

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

function LoginForm({ handleSubmit, error, captchaUrl }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          validate={[required]}
          name="email"
          component={Input}
          placeholder="Login"
        />
      </div>
      <div>
        <Field
          name="password"
          component={Input}
          placeholder="Password"
          validate={[required]}
          type="password"
        />
      </div>
      <div>
        <Field name="rememberMe" component={Input} type="checkbox" /> remember
        me
      </div>
      {captchaUrl && <img src={captchaUrl} alt="captcha" />}
      {captchaUrl && (
        <Field
          name="captcha"
          component={Input}
          placeholder="Symbols from image"
          validate={[required]}
        />
      )}

      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
}

export function Login({ login, isAuth, captchaUrl }) {
  const onSubmit = (formData) => {
    login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (isAuth === true) return <Navigate to="/profile" />;

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
