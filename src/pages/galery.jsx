import React from "react";
import "./Galery.css";
import Contact from "../Components/contact";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2>Pulido de Ópticas</h2>
      <div className="gallery-section">
        <img
          src="https://http2.mlstatic.com/D_NQ_NP_865704-MLA52414685812_112022-O.webp"
          alt="Pulido de Óptica 1"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT548b1vSfeo3Pb02eVe-HH7r9vVLMSCJ1CARi9uV9lUyG90XgTJYYqpQg45Cj7AG2fTsw&usqp=CAU"
          alt="Pulido de Óptica 2"
        />
        <img src="/galery1.jpeg" alt="Pulido de Óptica 3" />
      </div>

      <h2>Pulido de Chapa</h2>
      <div className="gallery-section">
        <img src="/galery2.jpeg" alt="Pulido de Chapa 1" />
        <img src="/galery3.jpeg" alt="Pulido de Chapa 2" />
        <img src="https://blog.pinturasmirobriga.com/wp-content/uploads/2018/06/como-pulir-un-coche-forma-casera.jpg" alt="Pulido de Chapa 3" />
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
