// import logo from "./logo.svg";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WhyUs from "./components/WhyUs";
import BC from "./components/BC";
import AB from "./components/AB";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/britishcolumbia" element={<BC />} />
        <Route path="/alberta" element={<AB />} />
      </Routes>
    </div>
  );
}

export default App;
