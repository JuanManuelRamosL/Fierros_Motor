import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contacto">
      <div className="contact-info">
        <h3>Información de Contacto</h3>
        <p>📞 +34 123 456 789</p>
        <p>📧 info@autostylepro.com</p>
        <p>📍 Tupungato 1784, Quilmes</p>
        <a href="https://www.instagram.com/detailing_fmp/">
          instagram: Fierros Motor Detailing
        </a>
      </div>
      <div className="contact-form">
        <h3>Envíanos un Mensaje</h3>
        <form>
          <input type="text" placeholder="Nombre" className="input" />
          <input type="email" placeholder="Email" className="input" />
          <textarea placeholder="Mensaje" className="textarea"></textarea>
          <button type="submit" className="button">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
