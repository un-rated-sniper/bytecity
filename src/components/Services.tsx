import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services: React.FC = () => {
  const services = [
    { title: 'Web Development', text: 'Web Application Design and Development' },
    { title: 'Graphic & Design', text: 'Design of all kinds and business branding' },
    { title: 'Social Media Management', text: 'Management of social media accounts, Social Media Marketing, and Websites.' },
  ];

  return (
    <section id="services" className="py-5">
      <Container>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title className="text-warning">{service.title}</Card.Title> {/* Bootstrap utility class for orange */}
                  <Card.Text>{service.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
