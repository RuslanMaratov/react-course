import React, { Component } from "react";
import Header from "./Header";
import { me } from "../../redux/auth-reducer";
import { connect } from "react-redux";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.me();
    // authApi.getAuthApi().then((response) => {
    //   if (response.data.resultCode === 0) {
    //     let { id, email, login } = response.data.data;
    //     this.props.setAuthUserData(id, email, login);
    //   }
    // });
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return { isAuth: state.auth.isAuth, login: state.auth.login };
};

export default connect(mapStateToProps, { me })(HeaderContainer);
