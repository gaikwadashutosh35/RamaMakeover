// src/components/Testimonials.jsx
import React from 'react';

const testimonials = [
  { name: 'Jane Doe', comment: 'Fantastic service and friendly staff!' },
  { name: 'John Smith', comment: 'My hair has never looked better.' },
  { name: 'Emily Johnson', comment: 'Highly recommend this salon.' },
];

const Testimonials = () => (
  <section id="testimonials" className="py-12 bg-gray-200">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 m-4 rounded-lg shadow-lg max-w-xs">
            <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
            <span className="font-bold">- {testimonial.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
