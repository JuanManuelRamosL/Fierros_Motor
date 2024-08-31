import React from "react";

import "./section.css";
import WhatsAppButton from "./wspButon";

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="container-titulo">
        <h1 className="tituloP">Fierros Motor Detailing</h1>
      </div>
      <p className="txt-spam">
        Devolvemos el brillo a tu vehículo con profesionalidad y pasión
      </p>

      <div className="container-button-wsp">
        <WhatsAppButton />
      </div>
    </section>
  );
};

export default Hero;
