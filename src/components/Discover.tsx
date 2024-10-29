import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Discover: React.FC = () => {
  return (
    <section className="py-5 bg-light" id="discover">
      <Container className="text-center">
        <h2 className="text-warning mb-3">WHO WE ARE</h2>
        <hr style={{ width: '60px', margin: '0 auto', borderTop: '3px solid #007bff' }} />
        <p className="mt-4">
          ByteCity Tech Solutions is a comprehensive IT service provider specializing in web and graphic design, as well as social media management.
        </p>
      
        <ul className="list-unstyled">
          <li> Stunning visual identities</li>
          <li> Engaging, user-friendly websites</li>
          <li>Tailored social media strategies</li>
        </ul>
        <p>
          These elements work together to elevate your brand and ensure a compelling online presence.
        </p>
        <Button variant=" bg-warning" className="mt-3">
          ➞ LEARN MORE
        </Button>
      </Container>
    </section>
  );
};

export default Discover;
