import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <footer className="contact-section" id="contacto">
      <div className="contact-info">
        <h3>Información de Contacto</h3>
        <p className="txt-contacts">📞 +54 9 2257411451</p>
        <p className="txt-contacts">📧 pablyramos@gmail.com</p>
        <p className="txt-contacts">📍 Tupungato 1784, Quilmes</p>
        <p className="txt-contacts">📍 Rio Cuarto 4467, Pompeya</p>
        <p className="txt-contacts txt-ig">
          <img src="/logo-ig.png" alt="" className="logo-ig" />
          <a
            href="https://www.instagram.com/detailing_fmp/"
            target="_blank"
            className="link"
          >
            instagram:detailing_fmp
          </a>
        </p>
      </div>
      <div className="contact-form">
        <h3>Sobre Nosotros</h3>
        <p className="detailing-text">
          🚗 En <strong>Fierros Motor Detailing</strong>, nos apasiona el
          <strong> cuidado</strong> y la <strong>estética</strong> de los
          automóviles. Ofrecemos servicios de detailing de{" "}
          <strong>alta calidad</strong> para asegurar que tu vehículo se vea
          <strong> impecable.</strong>
          <span className="detailing-span">
            ✨ Desde el pulido de ópticas hasta el tratamiento completo de chapa
            y pintura, nuestro equipo de expertos utiliza{" "}
            <strong>los mejores productos y técnicas del mercado</strong> para
            garantizar resultados <strong>excepcionales.</strong>
          </span>
          <span className="detailing-span">
            🔧 Estamos <strong>comprometidos</strong> con la satisfacción de
            nuestros clientes y trabajamos con dedicación en cada proyecto.
          </span>
        </p>

        <p className="detailing-text">
          ❤️ <strong>Nos enorgullece ofrecer un servicio personalizado</strong>{" "}
          y adaptado a las necesidades de cada cliente.{" "}
          <strong>Tu auto es nuestra prioridad</strong>, y nos aseguramos de que
          cada detalle sea atendido con el
          <strong>mayor cuidado y precisión.</strong>
        </p>
      </div>
    </footer>
  );
};

export default Contact;
