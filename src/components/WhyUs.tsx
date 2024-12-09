import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Using Bootstrap Icons for better integration
const WhyUs: React.FC = () => {
  const services = [
    { 
      title: 'Fast Turnaround', 
      text: 'We deliver projects quickly without compromising on quality.',
      icon: 'bi bi-clock' // Fast Turnaround Icon
    },
    { 
      title: 'Secure and Trusted Services', 
      text: 'Your data and information are safe with us.',
      icon: 'bi bi-shield-lock' // Secure and Trusted Icon
    },
    { 
      title: 'Fast Delivery', 
      text: 'We ensure that all our services are delivered on time.',
      icon: 'bi bi-truck' // Fast Delivery Icon
    },
  ];

  return (
    <section className="py-5 bg-light text-center">
      <Container>
        <h2 className="text-warning mb-3">Why Choose Us?</h2>
        <hr style={{ width: '60px', margin: '0 auto', borderTop: '2px solid orange' }} />

        <Row className="mt-4">
          {services.map((service, index) => (
            <Col xs={12} sm={6} md={4} key={index} className="my-3">
              <div className="icon-container">
                <i className={`${service.icon} fa-3x text-info`} />
                <h5 className="mt-3 text-secondary">{service.title}</h5>
                <p className="text-muted">{service.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyUs;
