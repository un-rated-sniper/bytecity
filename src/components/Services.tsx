import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa'; // Corrected import for the checkmark icon

const Services: React.FC = () => {
    const services = [
        {
            title: 'Web Development',
            image: 'web-development.png', // Add image path
            steps: [
                { title: 'Website Design and Development' },
                { title: 'E-commerce Integration' },
                { title: 'Website Maintenance and Updates' }
            ]
        },
        {
            title: 'Graphic & Design',
            image: 'graphic-design.png', // Add image path
            steps: [
                { title: 'Branding and Logo Design' },
                { title: 'Print Design' },
                { title: 'Digital Design' }
            ]
        },
        {
            title: 'Social Media Management',
            image: 'social-media-management.png', // Add image path
            steps: [
                { title: 'Social Media Strategy' },
                { title: 'Content Creation' },
                { title: 'Community Management' }
            ]
        }
    ];

    return (
        <section
            className="py-5 bg-light"
            style={{
                minHeight: '60vh',
                backgroundImage: 'url("accordion-bg01.png")', // Optional background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                color: '#1a1a1a',
            }}
        >
            <Container>
                <h2 className="fw-bold text-warning mb-3 text-center">
                    Explore Our Services
                </h2>
                <hr style={{ width: '60px', margin: '0 auto', borderTop: '3px solid #ffc107' }} />
                <Row className="text-center mt-4">
                    {services.map((service, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <Card className="h-100 shadow border-0 rounded">
                                <Card.Body className="d-flex flex-column">
                                    {/* Adjusted Image */}
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="mb-3 img-fluid rounded"
                                        style={{
                                            objectFit: 'cover',
                                            height: '200px', // Fixed height for consistency
                                            width: '100%', // Ensure full width
                                            borderRadius: '10px',
                                        }}
                                    />
                                    <Card.Title className="fw-bold text-warning mb-3">{service.title}</Card.Title>
                                    <ul className="list-unstyled">
                                        {service.steps.map((step, stepIndex) => (
                                            <li key={stepIndex} className="d-flex align-items-start mb-3">
                                                <FaCheckCircle
                                                    color="#ffc107"
                                                    size={20}
                                                    className="me-2" // Adds space between icon and text
                                                />
                                                <div>
                                                    <h6 className="fw-bold text-secondary">{step.title}</h6>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-auto">
                                        <Button
                                            variant="warning"
                                            className="w-100 py-2"
                                            style={{ fontWeight: 'bold', textTransform: 'uppercase' }}
                                        >
                                            Learn More
                                        </Button>
                                    </div>
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
