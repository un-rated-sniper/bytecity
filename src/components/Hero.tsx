import { Container, Button } from "react-bootstrap";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      className="hero bg-dark text-white d-flex align-items-center position-relative"
      style={{
        backgroundImage: "url(/hero-image-04.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Full viewport height
      }}
    >
      <Container className="text-center text-lg-start">
        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="display-4 fw-bold mb-3">
            Transforming Ideas into Innovative Solutions
          </h1>
          <p className="fs-5 mb-4">
            At ByteCity Tech, we empower businesses by providing cutting-edge IT
            solutions that drive growth, efficiency, and innovation. Let's create
            the future, together.
          </p>

            <Button
            variant="warning"
            size="lg"
            className="px-5 py-3 fs-5 fw-bold rounded-3 shadow-sm"
            onClick={() => (window.location.href = "/our-services")}
            >
            Discover Our Services
            </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
