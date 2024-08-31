import React from "react";
import "./btnwsp.css";

const WhatsAppButton = () => {
  const phoneNumber = "5492257411451"; // Reemplaza con el número que desees

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank"); // Abre el enlace en una nueva pestaña
  };

  return (
    <button onClick={openWhatsApp} className="btnwsp">
      Consultanos por WhatsApp
    </button>
  );
};

export default WhatsAppButton;
