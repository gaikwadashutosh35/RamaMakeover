// src/App.jsx
import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Services from "./components/Services";
import ServicesForCustomers from "./components/ServicesForCustomers";
import WhatsAppButton from "./components/WhatsAppButton"; // Import the WhatsApp button component
import "./ComponentsCSS/ContactSection.css"; // Import CSS for styling
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Header />
      <HeroSection />
      <Services />
      <ServicesForCustomers />
      <Testimonials />
      {/* <ContactSection /> */}

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default App;
