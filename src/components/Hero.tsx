import { Container, Button } from 'react-bootstrap';

interface HeroProps {
  onHireUsClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onHireUsClick }) => {
  return (
    <section className="hero bg-dark text-white d-flex align-items-center" style={{ backgroundImage: 'url(/hero-image-03.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container>
        <h1>ByteCity Tech Solutions</h1>
        <p>Your One-Stop IT Solutions Partner</p>
        <Button onClick={onHireUsClick} className="btn btn-warning">Hire Us</Button>
      </Container>
    </section>
  );
};

export default Hero;
