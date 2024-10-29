import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="hero bg-dark text-white d-flex align-items-center"
      style={{
        height: '60vh',
        backgroundImage: 'url("/hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <h1 className="text-left" style={{ fontSize: '2.5rem' }}>
          ByteCity Tech Solutions
        </h1>
        <p className="text-left" style={{ fontSize: '1.2rem' }}>
          Your One-Stop IT Solutions Partner
          <button className="btn btn-warning ml-3" style={{ fontSize: '1rem', marginLeft: '10px' }}>
            Hire Us
          </button>
        </p>
      </div>
    </section>
  );
};

export default Hero;
