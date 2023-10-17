import "./App.css";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<Dialogs />} />
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
