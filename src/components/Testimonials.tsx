import React from 'react';
import { Container, Col, Card, Row } from 'react-bootstrap';

const Testimonials: React.FC = () => {
  const services = [
    { 
      title: 'Web Development', 
      text: 'Learn to create stunning, responsive websites and powerful web applications.', 
      image: '/image.jpg' // Replace with the actual image path for web development
    },
    { 
      title: 'Python Programming & Data Analysis', 
      text: 'Master Python for automation, data visualization, and insights-driven analysis.', 
      image: '/image.jpg' // Replace with the actual image path for Python and data analysis
    },
    { 
      title: 'Graphics Design', 
      text: 'Design eye-catching visuals, logos, and branding materials for businesses.', 
      image: '/image.jpg' // Replace with the actual image path for graphic design
    },
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <Container>
        <h2 className="text-warning text-center mb-3">Let's Teach You</h2>
        <hr
          style={{
            width: '60px',
            margin: '0 auto',
            borderTop: '3px solid orange',
          }}
        />
        <Row className="justify-content-center mt-4">
          {services.map((service, index) => (
            <Col xs={12} sm={6} md={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img 
                  src={service.image} 
                  alt={service.title} 
                  className="card-img" 
                />
                <Card.ImgOverlay className="d-flex flex-column justify-content-end bg-dark bg-opacity-50">
                  <Card.Title className="text-white">{service.title}</Card.Title>
                  <Card.Text className="text-light">{service.text}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;