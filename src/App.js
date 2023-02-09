import HomePage from "./components/HomePage";
import LanguageExp from "./components/LanguagePage/LanguageExp";
import Projects from "./components/ProjectsPage/Projects";
import About from "./components/AboutPage/About";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import "./styles/main.scss";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

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
