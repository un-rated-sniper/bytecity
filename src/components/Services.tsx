import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services: React.FC = () => {
  const services = [
    { 
      title: 'Web Development', 
      text: 'Web Application Design and Development', 
      image: '/image.jpg' // Replace with actual image paths
    },
    { 
      title: 'Graphic & Design', 
      text: 'Design of all kinds and business branding', 
      image: '/image.jpg'
    },
    { 
      title: 'Social Media Management', 
      text: 'Management of social media accounts, Social Media Marketing, and Websites.', 
      image: '/image.jpg'
    },
  ];

  return (
    <section id="services" className="py-5 bg-light text-center">
      <Container>
        <h2 className="text-warning mb-3">What We Do</h2>
        <hr style={{ width: '60px', margin: '0 auto', borderTop: '2px solid orange' }} />

        <Row className="mt-4 justify-content-center"> {/* Center the cards */}
          {services.map((service, index) => (
            <Col xs={12} sm={6} md={4} key={index} className="my-3">
              <Card className="h-100 text-white">
                <Card.Img src={service.image} alt={service.title} className="card-img" />
                <Card.ImgOverlay className="d-flex flex-column justify-content-end bg-dark bg-opacity-50">
                  <Card.Title className="text-white">{service.title}</Card.Title>
                  <Card.Text>{service.text}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
