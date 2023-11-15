import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

function LoginForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
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
      <div>
        <button>Login</button>
      </div>
    </form>
  );
}

export function Login(props) {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth === true) return <Navigate to="/profile" />;

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
