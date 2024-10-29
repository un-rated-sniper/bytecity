import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUs = () => {
  const plans = [
    { title: 'Web Design', features: ['Web Design', 'Graphic Design', 'Technical Support'] },
    { title: 'Design & Branding', features: ['Business Branding', '3D and 2D Signage', 'Printing Services'] },
    { title: 'Media Management', features: ['Social Media Management', 'Web Content Management', 'Virtual Assistance'] },
  ];

  return (
    <section className="my-5">
      <Container>
        <Row className="justify-content-center">
          {plans.map((plan, index) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
              <Card className="h-100 card-hover text-center">
                <Card.Body>
                  <Card.Title className="plan-title">{plan.title}</Card.Title>
                  <ul className="list-unstyled features-list">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;

