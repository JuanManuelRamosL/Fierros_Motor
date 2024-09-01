import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    const textToCopy = "+54 9 2257411451";
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        alert("Número de teléfono copiado al portapapeles");
        setTimeout(() => setIsCopied(false), 2000); // Cambia el ícono de vuelta después de 2 segundos
      })
      .catch((err) => {
        console.error("Error al copiar el texto: ", err);
      });
  };

  return (
    <footer className="contact-section" id="contacto">
      <div className="contact-info">
        <h3>Información de Contacto</h3>
        <p className="txt-contacts num" onClick={handleCopyClick} style={{ cursor: 'pointer' }}>
          📞 +54 9 2257411451{" "}
          {isCopied ? (
            <svg
              width="20px"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 15L8 17L12.5 12.5M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="20px"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </p>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBptRDbMXBHmKfCJSljRxHWDWXPtRZwgKkGJqXLTkRFHkzcpnFDqZcMPGkVGFQmgltnXNfm"
          target="_blank"
          className="txt-contacts"
        >
          📧 <u>PablyRamos@gmail.com</u>
        </a>
        <a
          href="https://maps.app.goo.gl/xKCcZAQkydx5CN2r9"
          target="_blank"
          className="txt-contacts"
        >
          📍 <u>Tupungato 1784, Quilmes</u>
        </a>
        <a
          href="https://maps.app.goo.gl/aEczj2uBUay6Nx2F6"
          target="_blank"
          className="txt-contacts"
        >
          📍 <u>Rio Cuarto 4467, Pompeya</u>
        </a>
        <p className="txt-contacts txt-ig">
          <img src="/logo-ig.png" alt="" className="logo-ig" />
          <a
            href="https://www.instagram.com/detailing_fmp/"
            target="_blank"
            className="link"
          >
            <u>instagram:detailing_fmp</u>
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
