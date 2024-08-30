import React, { useState } from "react";
import "./nav.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="container-title">
        <h1 className="title">Fierros Motor</h1>
        <img src="/logo.jpeg" alt="logo-auto" className="logo" />
      </div>
      <button className="menu-btn" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`container-links ${isOpen ? "open" : ""}`}>
        <a href="#" className="links-nav">
          Inicio
        </a>
        <a href="#" className="links-nav">
          Servicios
        </a>
        <a href="#" className="links-nav">
          Galería
        </a>
        <a href="#" className="links-nav">
          Contacto
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
