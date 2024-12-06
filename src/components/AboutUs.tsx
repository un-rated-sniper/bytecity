import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUs = () => {
  const plans = [
    { title: 'Web Design', features: ['Web Design', 'Graphic Design', 'Technical Support'] },
    { title: 'Design & Branding', features: ['Business Branding', '3D and 2D Signage', 'Printing Services'] },
    { title: 'Media Management', features: ['Social Media Management', 'Web Content Management', 'Virtual Assistance'] },
  ];

  return (
    <section className="my-5">
      <Container style={{ height: '50vh', paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Row className="justify-content-center "> {/* Add g-4 for gutter spacing */}
          {plans.map((plan, index) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
              <Card className="h-100 card-hover text-center" style={{ padding: '1.5rem', borderRadius: '10px' }}> {/* Added padding and borderRadius */}
                <Card.Body>
                  <Card.Title className="plan-title" style={{ marginBottom: '1rem' }}>{plan.title}</Card.Title>
                  <ul className="list-unstyled features-list" style={{ padding: '0', margin: '0', listStyleType: 'none' }}>
                    {plan.features.map((feature, i) => (
                      <li key={i} style={{ marginBottom: '0.5rem' }}>{feature}</li>
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

