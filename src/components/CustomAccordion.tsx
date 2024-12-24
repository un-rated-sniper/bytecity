import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

interface Step {
    title: string;
    content: string;
    image: string; // Image URL placeholder
}

const CustomAccordion: React.FC = () => {
    const steps: Step[] = [
        {
            title: 'Step 1: Share Your Vision',
            content: 'Tell us about your idea and the project you have in mind. If possible, provide a sketch or any reference material to help us understand your concept better.',
            image: 'step1-placeholder.gif'
        },
        {
            title: 'Step 2: Collaborate and Review',
            content: 'We bring your idea to life, creating a design tailored to your needs. Once done, we’ll share it with you for review. Your feedback helps us make any necessary adjustments to ensure perfection.',
            image: 'step2-placeholder.gif'
        },
        {
            title: 'Step 3: Final Delivery',
            content: 'We deliver the completed work in your preferred format—whether it’s a digital file, a printed version, or both.',
            image: 'step3-placeholder.png'
        }
    ];

    return (
        <section
            className="py-5 bg-light"
            style={{
                minHeight: '60vh',
                backgroundImage: 'url("accordion-bg.png")', // Optional background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                color: '#1a1a1a',
            }}
        >
            <Container>
                
                <Row className="text-center">
                    {steps.map((step, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <Card className="h-100 shadow-sm border-0">
                                <Card.Img 
                                    variant="top" 
                                    src={step.image} 
                                    alt={`Image for ${step.title}`} 
                                    className="img-fluid" 
                                    style={{ height: '200px', objectFit: 'contain' }}
                                />
                                <Card.Body>
                                    <Card.Title className="fw-bold">{step.title}</Card.Title>
                                    <Card.Text>{step.content}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default CustomAccordion;
