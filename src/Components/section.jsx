import React from "react";

const Hero = () => {
  return (
    <section style={styles.hero} id="inicio">
      <h1>Expertos en Chapa y Pintura</h1>
      <p>Devolvemos el brillo a tu vehículo con profesionalidad y pasión</p>
      <button style={styles.button}>Solicitar Presupuesto</button>
    </section>
  );
};

const styles = {
  hero: {
    textAlign: "center",
    padding: "3rem",
    backgroundColor: "#eee",
    borderRadius: "10px",
    fontFamily: "'Roboto', sans-serif",
  },
  button: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontFamily: "'Roboto', sans-serif",
  },
};

export default Hero;
