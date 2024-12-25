
import { Container, Row, Col, Button } from 'react-bootstrap';

const TrainingHero = () => {
  const heroStyle = {
    backgroundImage: `url('training-hero-bg.png')`, // Replace with your background image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '70vh',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <section style={heroStyle} className="training-hero-section">
      <Container>
        <Row className="align-items-center text-center text-lg-start">
          <Col lg={8} className="mx-auto">
            <h1 className="display-4 fw-bold text-warning">
              Upgrade Your Skills with Our Expert Training
            </h1>
            <p className="fs-5 mt-3 text-black">
              Learn Web Development, Graphic Design, and Python Data Analysis 
              to boost your career and achieve your goals. Join ByteCity's training 
              programs and unlock your potential today!
            </p>
            <Button
              variant="warning"
              className="mt-4"
              size="lg"
              style={{ fontWeight: 'bold', padding: '10px 20px' }}
              onClick={() => window.location.href = '/training'}
            >
              Explore Courses
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TrainingHero;
