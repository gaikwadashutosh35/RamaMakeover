// src/components/BackgroundCarousel.jsx
import React from "react";
import Slider from "react-slick";
import "../ComponentsCSS/BackgroundCarousel.css";

const images = require.context(
  "../Assets/BackgroundCarousel",
  false,
  /\.(png|jpe?g|svg)$/
);

const carouselImages = images.keys().map((image) => images(image));
const carouselImages2 = images.keys().map((image) => images(image));

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const BackgroundCarousel = () => (
  <>
    <div className="carousel-container">
      <Slider {...settings} className="carousel">
        {carouselImages.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
    <div className="carousel-container2">
      <Slider {...settings} className="carousel">
        {carouselImages2.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  </>
);


export default BackgroundCarousel;
