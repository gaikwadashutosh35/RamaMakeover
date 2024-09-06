import React from "react";
import Slider from "react-slick";
import "../ComponentsCSS/ServicesForCustomers.css"; // Ensure you create and import your CSS file
import hairDesigning from "../Assets/Hair Designing.png";
import MakeupService from "../Assets/MakeupServices.png";
import Manicure from "../Assets/Manicure.png";
import Pedicure from "../Assets/Pedicure.png";
import HairColouring from "../Assets/HairColouring.png";
import BodyPolishing from "../Assets/Body Polish.jpg";
import SkinCare from "../Assets/Skin Care.avif";
// Sample services data
const servicesForCustomersData = [
  {
    name: "Hair Designing",
    description: "Personalized consultations to understand your needs.",
    image: hairDesigning,
  },
  {
    name: "Makeup",
    description: "Exclusive rewards and discounts for regular customers.",
    image: MakeupService,
  },
  {
    name: "Manicure",
    description: "Seasonal and special offers on various services.",
    image: Manicure,
  },
  {
    name: "Pedicure",
    description: "Participate in our events and workshops for more insights.",
    image: Pedicure,
  },
  {
    name: "Hair Colouring",
    description: "Advanced hair care and treatments.",
    image: HairColouring,
  },
  {
    name: "Skin Care",
    description: "Specialized skin treatments and care.",
    image: SkinCare,
  },
  {
    name: "Personal Grooming",
    description: "Complete personal grooming services.",
    image: "path/to/image7.jpg",
  },
  {
    name: "Body Treatments",
    description: "Relaxing and rejuvenating body treatments.",
    image: BodyPolishing,
  },
];

const ServicesForCustomers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="services-for-customers">
      <div className="services-inner">
        <div className="services-content">
          <h2>Services for Customers</h2>
          <Slider {...settings}>
            {servicesForCustomersData.map((service, index) => (
              <div key={index} className="services-item">
                <img
                  src={service.image}
                  alt={service.name}
                  className="services-image"
                />
                <div className="services-text">
                  <h3 className="services-title">{service.name}</h3>
                  <p className="services-description">{service.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ServicesForCustomers;
