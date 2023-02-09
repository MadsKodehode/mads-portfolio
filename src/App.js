import HomePage from "./components/HomePage";

import Contact from "./components/Contact/Contact";

import "./styles/main.scss";
import { useEffect } from "react";
import { Route, Routes, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="kontakt" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
