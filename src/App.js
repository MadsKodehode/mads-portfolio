import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import LanguageExp from "./components/LanguageExp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/språk" element={<LanguageExp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
