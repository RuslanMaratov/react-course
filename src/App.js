import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="app">
      <HeaderContainer />
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/profile/:userId?" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
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

export default App;
