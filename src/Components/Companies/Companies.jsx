import React from 'react';
import './Companies.css';

const Companies = () => {
  const logos = Array.from({ length: 24 }, (_, i) => `/p${i + 1}.webp`);

  return (
    <div className="companies-container">
      {logos.map((logo, index) => (
        <div key={index} className="logo-card">
          <img src={logo} alt={`Logo ${index + 1}`} className="logo-image" loading="lazy"/>
        </div>
      ))}
    </div>
  );
}

export default Companies;
