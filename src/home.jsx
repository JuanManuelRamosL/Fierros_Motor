import { useState } from "react";
import "./App.css";
import Services from "./Components/services";
import Hero from "./Components/section";
import Contact from "./Components/contact";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Contact></Contact>
    </>
  );
}

export default Home;
