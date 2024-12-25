import { Container, Button, Row, Col, Carousel } from 'react-bootstrap';


// Define the props for the Discover component
interface DiscoverProps {
  onHireUsClick: () => void;  // This will handle the modal opening
}

const Discover: React.FC<DiscoverProps> = ({ onHireUsClick }) => {
  const images = [
    { src: 'image1.png', alt: 'Design 1' }, // Replace with your image paths
    { src: 'image2.png', alt: 'Design 2' },
    { src: 'image3.png', alt: 'Design 3' },
  ];

  return (
    <section
      className="discover-section bg-light d-flex align-items-center"
      id="discover"
      style={{
        height: '70vh', // Matches the height of TrainingHero
        backgroundImage: 'url("discover-bg.png")', // Optional background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <Row className="align-items-center h-100">
          {/* Text Section */}
          <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
            <h2 className="display-6 fw-bold text-warning">
              Looking for the Perfect Design?
            </h2>
            <p className="fs-5 mt-3 text-muted">
              Sit back and relax while we handle everything. From ideation to
              delivery, we'll share a sample for your approval before
              finalizing your world-class design.
            </p>
            <Button
              variant="warning"
              size="lg"
              className="mt-4"
              style={{ fontWeight: 'bold', padding: '10px 20px' }}
              onClick={onHireUsClick}  // Use the passed down prop here
            >
              HIRE US
            </Button>
          </Col>

          {/* Carousel Section */}
          <Col lg={6}>
            <Carousel>
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="d-block w-100 rounded"
                    style={{
                      maxHeight: '400px',
                      objectFit: 'cover',
                      borderRadius: '10px',
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Discover;
