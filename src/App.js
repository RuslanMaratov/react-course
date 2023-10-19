import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App({ state }) {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route
              path="/profile"
              element={<Profile profileState={state.profilePage} />}
            />
            <Route
              path="/dialogs/*"
              element={<Dialogs dialogsState={state.dialogsPage} />}
            />
            <Route path="/news" element={<button />} />
            <Route path="/music" element={<button />} />
            <Route path="/settings" element={<button />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
