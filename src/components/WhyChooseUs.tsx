import { Container, Row, Col } from 'react-bootstrap';

const WhyChooseUs = () => {
  return (
    <section className="py-5 bg-light text-center">
      <Container>
        <h2 className="text-warning mb-3">WHY CHOOSE US ?</h2>
        <hr style={{ width: '60px', margin: '0 auto', borderTop: '2px solid blue' }} />

        <Row className="mt-4">
          <Col md={3} sm={6} xs={12} className="my-3">
            <div className="icon-container">
              <i className="fas fa-user-hard-hat fa-3x text-info"></i>
              <h5 className="mt-3">EXPERIENCED TEAM</h5>
            </div>
          </Col>

          <Col md={3} sm={6} xs={12} className="my-3">
            <div className="icon-container">
              <i className="fas fa-clock fa-3x text-secondary"></i>
              <h5 className="mt-3">QUICK RESPONSE TIME</h5>
            </div>
          </Col>

          <Col md={3} sm={6} xs={12} className="my-3">
            <div className="icon-container">
              <i className="fas fa-medal fa-3x text-dark"></i>
              <h5 className="mt-3">QUALITY WORK</h5>
            </div>
          </Col>

          <Col md={3} sm={6} xs={12} className="my-3">
            <div className="icon-container">
              <i className="fas fa-briefcase fa-3x text-info"></i>
              <h5 className="mt-3">EXPERIENCED AND ACCESSIBLE</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
