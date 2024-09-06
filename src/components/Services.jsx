// src/components/Services.jsx
import React from "react";
import "../ComponentsCSS/Services.css";
import hairImage from "../Assets/Hair.jpeg";
import nailsImage from "../Assets/Nails.png";
import makeupImage from "../Assets/Makeup.png";

const servicesData = [
  {
    name: "Hair",
    description: "Precision haircuts, coloring, and styling.",
    image: hairImage,
  },
  {
    name: "Nails",
    description: "Manicure, pedicure, and nail art.",
    image: nailsImage,
  },
  {
    name: "Makeup",
    description: "Professional makeup services.",
    image: makeupImage,
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-inner">
        <div className="services-content">
          <h2>Our Collection</h2>
          <div className="collection-grid">
            {servicesData.map((service, index) => (
              <div key={index} className="grid-item">
                <div className="flip-card">
                  {/* Front side with image */}
                  <div className="flip-card-front">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="picture-image"
                    />
                  </div>

                  {/* Back side with description */}
                  <div className="flip-card-back">
                    <div className="service-title">{service.name}</div>
                    <div className="service-description">
                      {service.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
