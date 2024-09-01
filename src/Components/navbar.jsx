import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="container-title">
        <h1 className="title-nav">Fierros Motor</h1>
        <img src="/logo.jpeg" alt="logo-auto" className="logo" />
      </div>
      <button className="menu-btn" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`container-links ${isOpen ? "open" : ""}`}>
        <a href="/" className="links-nav">
          Inicio
        </a>
        <a href="#servicios" className="links-nav">
          Servicios
        </a>
        <a className="links-nav">
          <Link to="/galery" className="links-nav">Galery</Link>
        </a>
        <a href="#contacto" className="links-nav">
          Contacto
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
