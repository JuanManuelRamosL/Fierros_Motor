import React from "react";
import "./Galery.css";
import Contact from "../Components/contact";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2>Pulido de Ópticas</h2>
      <div className="gallery-section">
        <img
          src="/images/pulido-opticas/optica1.jpg"
          alt="Pulido de Óptica 1"
        />
        <img
          src="/images/pulido-opticas/optica2.jpg"
          alt="Pulido de Óptica 2"
        />
        <img
          src="/images/pulido-opticas/optica3.jpg"
          alt="Pulido de Óptica 3"
        />
      </div>

      <h2>Pulido de Chapa</h2>
      <div className="gallery-section">
        <img src="/images/pulido-chapa/chapa1.jpg" alt="Pulido de Chapa 1" />
        <img src="/images/pulido-chapa/chapa2.jpg" alt="Pulido de Chapa 2" />
        <img src="/images/pulido-chapa/chapa3.jpg" alt="Pulido de Chapa 3" />
      </div>

      <h2>Lavados</h2>
      <div className="gallery-section">
        <img src="/images/lavados/lavado1.jpg" alt="Lavado 1" />
        <img src="/images/lavados/lavado2.jpg" alt="Lavado 2" />
        <img src="/images/lavados/lavado3.jpg" alt="Lavado 3" />
      </div>
      <Contact></Contact>
    </div>
  );
};

export default Gallery;
