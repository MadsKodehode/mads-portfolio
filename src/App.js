import HomePage from "./components/HomePage";
import LanguageExp from "./components/LanguagePage/LanguageExp";
import Projects from "./components/ProjectsPage/Projects";
import About from "./components/AboutPage/About";
import Footer from "./components/Footer/Footer";
import "./styles/main.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/språk" element={<LanguageExp />}></Route>
        <Route path="/projekter" element={<Projects></Projects>}></Route>
        <Route path="/om" element={<About />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
