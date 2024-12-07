import { Container, Button, Row, Col, Carousel } from 'react-bootstrap';

const Discover = () => {
  const images = [
    { src: 'image1.png', alt: 'Design 1' }, // Replace with your image paths
    { src: 'image2.png', alt: 'Design 2' },
    { src: 'image3.png', alt: 'Design 3' },
  ];

  return (
    <section className="discover-section py-5 bg-light" id="discover">
      <Container>
        <Row className="align-items-center h-100">
          {/* Text Section */}
          <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
            <h2 className="text-dark mb-3">Looking for the perfect design?</h2>
            <p className="text-muted fs-5">
              Sit back and relax while we handle everything.
              We'll share a sample for your approval before proceeding with the final print and delivery.
            </p>
            <Button
              variant="warning"
              className="mt-3"
              style={{ fontWeight: 'bold', padding: '10px 20px' }}
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
                      maxHeight: '400px', // Ensures a taller height
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


