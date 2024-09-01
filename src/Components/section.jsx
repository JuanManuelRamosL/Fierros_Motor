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
        <strong>Devolvemos</strong> el <strong>brillo</strong> a tu vehículo con{" "}
        <strong>profesionalidad</strong> y <strong>pasión</strong>
      </p>
      <div className="container-arrow">
        <a href="#servicios">
          <svg
            width="30px"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow-down"
          >
            <path
              d="M7 13L12 18L17 13M7 6L12 11L17 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
