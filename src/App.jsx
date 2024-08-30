import { useState } from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import Services from "./Components/services";
import Hero from "./Components/section";
import Contact from "./Components/contact";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <Services />
      <Contact></Contact>
    </>
  );
}

export default App;
