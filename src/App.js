import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import globalStyles from "./GlobalStyles";
import ModelS from "./components/ModelS.js";
import Model3 from "./components/Model3.js";
import ModelX from "./components/ModelX.js";
import ModelY from "./components/ModelY.js";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header />
        <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Model S" element={<ModelS />} />
          <Route path="/model 3" element={<Model3 />} />
          <Route path="/model x" element={<ModelX />} />
          <Route path="/model y" element={<ModelY />} />
        </Routes>
        <globalStyles />
      </div>
    </BrowserRouter>
  );
}

export default App;
