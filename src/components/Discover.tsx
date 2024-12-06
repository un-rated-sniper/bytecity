import { Container, Button } from 'react-bootstrap';

const Discover = () => {
  return (
    <section className="py-5 bg-light" id="discover">
      <Container className="text-center">
        <h2 className="text-warning mb-3">WHO WE ARE</h2>
        <hr 
          style={{ width: '60px', margin: '0 auto', borderTop: '3px solid orange' }} 
          aria-hidden="true" 
        />
        <p className="mt-5 fs-3">
          ByteCity Tech Solutions is a comprehensive IT service provider specializing in web and graphic design, as well as social media management.
        </p>
        <ul className="list-unstyled fs-4 text-start text-md-center mt-4">
          <li>Stunning visual identities</li>
          <li>Engaging, user-friendly websites</li>
          <li>Tailored social media strategies</li>
        </ul>
        <Button variant="warning" className="mt-4" aria-label="Learn more about ByteCity Tech Solutions" style={{ fontWeight: 'bold' }}>
          LEARN MORE
        </Button>
      </Container>
    </section>
  );
};

export default Discover;
