import HomePage from "./components/HomePage";
import LanguageExp from "./components/LanguageExp";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import "./styles/_global.scss";
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
