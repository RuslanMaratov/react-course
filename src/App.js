import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App({ store }) {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/profile" element={<Profile store={store} />} />
            <Route
              path="/dialogs/*"
              element={<DialogsContainer store={store} />}
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
