import { useState } from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import Services from "./Components/services";
import Hero from "./Components/section";
import Contact from "./Components/contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import Galery from "./pages/galery";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galery" element={<Galery />} />
      </Routes>
    </Router>
  );
}

export default App;
