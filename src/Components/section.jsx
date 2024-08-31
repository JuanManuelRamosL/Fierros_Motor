import React from "react";

import "./section.css";
import WhatsAppButton from "./wspButon";

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <h1 className="tituloP">Fierros Motor Detailing</h1>
      <p>Devolvemos el brillo a tu vehículo con profesionalidad y pasión</p>

      <WhatsAppButton />
    </section>
  );
};

export default Hero;
