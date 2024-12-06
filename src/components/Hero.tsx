import { Container, Button } from 'react-bootstrap';

interface HeroProps {
  onHireUsClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ }) => {
  return (
    <section className="hero bg-dark text-white d-flex align-items-center" style={{ backgroundImage: 'url(/hero-image-03.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container>
        <h1>ByteCity Tech Solutions</h1>
        <p>Your One-Stop IT Solutions Partner</p>
        <Button variant=" bg-warning" className="mt-3" style={{ fontWeight: 'bold' }}>
          ➞ WORK WITH US
        </Button>
      </Container>
    </section>
  );
};

export default Hero;
