// src/components/HeroSection.jsx
import React from "react";
import BackgroundCarousel from "./BackgroundCarousel";

const HeroSection = () => (
  <div className="relative h-screen flex items-center justify-center text-center text-black">
    <div></div>

    <div className="relative z-10 p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Rama Makeover</h1>
      <p className="text-xl mb-6">Where style meets perfection</p>
    </div>
    <BackgroundCarousel />
  </div>
);

export default HeroSection;
