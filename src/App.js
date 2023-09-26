import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="h-[200vh] bg-[#1a1]"></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
