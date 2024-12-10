import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Message: React.FC = () => {
  return (
    <section
      className="py-5 d-flex justify-content-center align-items-center text-center bg-warning"
      style={{
        height: '60vh', // Maintain the compact impactful height
        backgroundImage: 'url("message-bg.png")', // Optional background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#1a1a1a',
      }}
    >
      <Container>
        <h2 className="fw-bold text-dark mb-3">
          Work Smarter with Innovative IT Business Solutions
        </h2>
        <p className="fs-5 text-muted">
          Transform your business with cutting-edge technology, creative strategies, and tailored solutions to meet your needs.
        </p>
        <Button
          variant="dark"
          size="lg"
          className="mt-3 fw-bold px-4"
          style={{ backgroundColor: '#000', borderColor: '#000' }}
        >
          ➞ WORK WITH US
        </Button>
      </Container>
    </section>
  );
};

export default Message;
