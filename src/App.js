import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/news" element={<button />} />
          <Route path="/music" element={<button />} />
          <Route path="/settings" element={<button />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
