import React from "react";
import "./services.css";

const services = [
  {
    title: "Lavado Interior y Exterior",
    description: "Lorem ipsum dolor sit amet...",
    img: "/galery3.jpeg",
  },
  {
    title: "Nuestros Trabajos",
    description: "Lorem ipsum dolor sit amet...",
    img: "/galery2.jpeg",
  },
  {
    title: "Pulido y Encerado",
    description: "Lorem ipsum dolor sit amet...",
    img: "/galery3.jpeg",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="services-section">
      <h2 className="services-title">Nuestros Servicios</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="card-image">
              {service.img && (
                <img src={service.img} alt={service.title} className="image" />
              )}
            </div>
            <div className="service-info">
              <h3 className="title-services-card">{service.title}</h3>
              <p className="txt-cards-services">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
