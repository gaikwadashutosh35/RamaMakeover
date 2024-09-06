// src/components/Footer.jsx
import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 Hair Parlour. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="text-yellow-500">Facebook</a>
        <a href="#" className="text-yellow-500">Instagram</a>
        <a href="#" className="text-yellow-500">Twitter</a>
      </div>
    </div>
  </footer>
);

export default Footer;
