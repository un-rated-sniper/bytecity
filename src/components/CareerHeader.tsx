// CareerHeader.tsx
import React from 'react';

const CareerHeader: React.FC = () => {
  return (
    <div
      className="hero-container position-relative text-white"
      style={{
        backgroundImage: 'url("career-hero-image.jpg")', // Replace with actual image path
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
        <h1 className="display-4 text-light fw-bold">Join Our Team</h1>
        <p className="lead mb-4">
          At ByteCity Tech Solutions, we’re looking for talented individuals who want to make an impact. Explore career opportunities with us.
        </p>
        <a
          href="#career-openings"
          className="btn btn-primary btn-lg"
        >
          View Open Positions
        </a>
      </div>
    </div>
  );
};

export default CareerHeader;
