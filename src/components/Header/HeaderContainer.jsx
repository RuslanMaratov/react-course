import React, { Component } from "react";
import Header from "./Header";
import { getAuthUserData, logout } from "../../redux/auth-reducer";
import { connect } from "react-redux";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuthUserData();
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

export default connect(mapStateToProps, { getAuthUserData, logout })(
  HeaderContainer
);
