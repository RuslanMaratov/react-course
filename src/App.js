import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import React, { Component, lazy, Suspense } from "react";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    const DialogsContainer = lazy(() =>
      import("./components/Dialogs/DialogsContainer")
    );
    const ProfileContainer = lazy(() =>
      import("./components/Profile/ProfileContainer")
    );

    return (
      <div className="app">
        <HeaderContainer />
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Preloader />}>
                  <ProfileContainer />
                </Suspense>
              }
            />
            <Route
              path="/profile/:userId?"
              element={
                <Suspense fallback={<Preloader />}>
                  <ProfileContainer />
                </Suspense>
              }
            />
            <Route
              path="/dialogs/*"
              element={
                <Suspense fallback={<Preloader />}>
                  <DialogsContainer />
                </Suspense>
              }
            />
            <Route path="/news" element={<button />} />
            <Route path="/music" element={<button />} />
            <Route path="/settings" element={<button />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
