import React from "react";

import "./section.css";
import WhatsAppButton from "./wspButon";

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="container-titulo">
        <h1 className="titulo">Fierros Motor Detailing</h1>
      </div>

      <div className="container-button-wsp">
        <WhatsAppButton />
      </div>
      <p className="txt-spam">
        Devolvemos el brillo a tu vehículo con profesionalidad y pasión
      </p>
    </section>
  );
};

export default Hero;
