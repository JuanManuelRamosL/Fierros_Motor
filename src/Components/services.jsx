import React from "react";
import "./services.css";

const services = [
  {
    title: "Reparación de Chapa",
    description: "Lorem ipsum dolor sit amet...",
    img: "https://images.squarespace-cdn.com/content/v1/642f21b67bb8e371bba4ce18/8b5ccb34-b592-40df-aefd-f2918489e6d2/m4res.jpg",
  },
  {
    title: "Pintura Profesional",
    description: "Lorem ipsum dolor sit amet...",
    img: "https://i.ytimg.com/vi/GMMAPvkfhL4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA5t-jnTdm-tEHSh3DKUbupBKkf2w",
  },
  {
    title: "Pulido y Encerado",
    description: "Lorem ipsum dolor sit amet...",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6VLkJwMOCtLyIBeiuXPmMykn_ZldV-bn_A&s",
  },
];

const Services = () => {
  return (
    <section id="servicios">
      <h2 className="services-title">Nuestros Servicios</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="card">
            <div className="card-image">
              {service.img && (
                <img src={service.img} alt={service.title} className="image" />
              )}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
