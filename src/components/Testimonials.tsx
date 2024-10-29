import React from 'react';
import { Container, Col, Card, Row } from 'react-bootstrap'; // Import Row for layout

const Testimonials: React.FC = () => {
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
    <section id="services" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Our Services</h2>
        <Row className="justify-content-center"> {/* Use Row for proper grid layout */}
          {services.map((service, index) => (
            <Col xs={12} sm={6} md={4} key={index} className="mb-4"> {/* Adjust for different screen sizes */}
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

export default Testimonials;
