import { Container, Row, Col } from 'react-bootstrap';

const WhyChooseUs = () => {
  return (
    <section
      className="py-5 bg-light text-center d-flex align-items-center"
      style={{
        height: '60vh', // Consistent height with other sections
      }}
    >
      <Container>
        <h2 className="text-warning mb-3">Why US ?</h2>
        <hr style={{ width: '60px', margin: '0 auto', borderTop: '2px solid orange' }} />

        <Row className="mt-5">
          <Col md={3} sm={6} xs={12} className="my-3">
            <div className="icon-container">
              <i className="fas fa-user-hard-hat fa-3x text-info"></i>
              <h5 className="mt-3 text-secondary">Experienced Professionals</h5>
              <p className="text-muted">
                With years of expertise, we bring proven skills to every project.
              </p>
            </div>
          </Col>

          <Col md={3} sm={6} xs={12} className="my-3">
            <div className="icon-container">
              <i className="fas fa-clock fa-3x text-secondary"></i>
              <h5 className="mt-3 text-secondary">Quick Turnaround Time</h5>
              <p className="text-muted">
                We value your time and are committed to delivering promptly without compromising
                quality.
              </p>
            </div>
          </Col>

          <Col md={3} sm={6} xs={12} className="my-3">
            <div className="icon-container">
              <i className="fas fa-medal fa-3x text-dark"></i>
              <h5 className="mt-3 text-secondary">Quality Assurance</h5>
              <p className="text-muted">
                Our work meets the highest standards, ensuring you get exceptional results every
                time.
              </p>
            </div>
          </Col>

          <Col md={3} sm={6} xs={12} className="my-3">
            <div className="icon-container">
              <i className="fas fa-briefcase fa-3x text-info"></i>
              <h5 className="mt-3 text-secondary">Exemplary Service</h5>
              <p className="text-muted">
                We prioritize customer satisfaction with personalized, attentive service that exceeds
                expectations.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
