import { Container, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="hero bg-dark text-white d-flex align-items-center">
      <Container>
        <h1>ByteCity Tech Solutions</h1>
        <p>Your One-Stop IT Solutions Partner</p>
        <Button variant="warning">Hire Us</Button>
      </Container>
    </section>
  );
};

export default Hero;
