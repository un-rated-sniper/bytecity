// OurServicesHeader.tsx
import React from 'react';

const OurServicesHeader: React.FC = () => {
  return (
    <div
      className="hero-container position-relative text-white"
      style={{
        backgroundImage: 'url("services-hero-image.jpg")', // Replace with actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-60"></div>

      <div className="container position-relative z-index-1">
        <h1 className="display-4 text-light fw-bold">Our Services</h1>
        <p className="lead mb-4">
          Explore a range of services that will elevate your business, enhance your brand, and drive success.
        </p>
        <a
          href="#services"
          className="btn btn-primary btn-lg"
        >
          Explore Services
        </a>
      </div>
    </div>
  );
};

export default OurServicesHeader;
