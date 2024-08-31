import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contacto">
      <div className="contact-info">
        <h3>Información de Contacto</h3>
        <p>📞 +54 9 2257411451</p>
        <p>📧 pablyramos@gmail.com</p>
        <p>📍 Tupungato 1784, Quilmes</p>
        <p>📍 Rio Cuarto 4467, Pompeya</p>
        <p>📍instagram:detailing_fmp</p>
        <a href="https://www.instagram.com/detailing_fmp/">
          instagram: Fierros Motor Detailing
        </a>
      </div>
      <div className="contact-form">
        <h3>Sobre Nosotros</h3>
        <p class="detailing-text">
          🚗 <strong>En Fierros Motor Detailing</strong>, nos apasiona el
          cuidado y la estética de los automóviles. Ofrecemos servicios de
          detailing de alta calidad para asegurar que tu vehículo se vea
          impecable.
          <span class="detailing-span">
            ✨ Desde el pulido de ópticas hasta el tratamiento completo de chapa
            y pintura, nuestro equipo de expertos utiliza los mejores productos
            y técnicas del mercado para garantizar resultados excepcionales.
          </span>
          <span class="detailing-span">
            🔧 Estamos comprometidos con la satisfacción de nuestros clientes y
            trabajamos con dedicación en cada proyecto.
          </span>
        </p>

        <p class="detailing-text">
          ❤️ <strong>Nos enorgullece ofrecer un servicio personalizado</strong>{" "}
          y adaptado a las necesidades de cada cliente. Tu auto es nuestra
          prioridad, y nos aseguramos de que cada detalle sea atendido con el
          mayor cuidado y precisión.
        </p>
      </div>
    </section>
  );
};

export default Contact;
