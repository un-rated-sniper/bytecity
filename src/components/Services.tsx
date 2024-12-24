import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Services: React.FC = () => {
    const services = [
        {
            title: 'Web Development',
            steps: [
                {
                    title: ' Website Design and Development',
                    content: 'Create a visually appealing and user-friendly website. Optimize website for search engines (SEO). Ensure website is mobile-responsive. Develop custom web applications.'
                },
                {
                    title: 'E-commerce Integration',
                    content: 'Set up online store to sell products or services. Process payments securely. Manage inventory and shipping. Implement marketing strategies to drive sales.'
                },
                {
                    title: 'Website Maintenance and Updates',
                    content: 'Regularly update content and plugins. Monitor website performance and security. Back up website data. Provide technical support.'
                }
            ]
        },
        {
            title: 'Graphic & Design',
            steps: [
                {
                    title: 'Branding and Logo Design',
                    content: 'Create a strong brand identity. Design a unique logo. Develop a consistent brand style guide.'
                },
                {
                    title: 'Print Design',
                    content: 'Design business cards, brochures, and flyers. Create marketing materials for print campaigns. Design packaging and labels.'
                },
                {
                    title: 'Digital Design',
                    content: 'Design social media graphics and banners. Create email templates. Design digital advertisements.'
                }
            ]
        },
        {
            title: 'Social Media Management',
            steps: [
                {
                    title: 'Social Media Strategy',
                    content: 'Identify target audience. Set clear goals and objectives. Choose the right social media platforms. Develop a content calendar.'
                },
                {
                    title: 'Content Creation',
                    content: 'Create engaging content, such as blog posts, videos, and images. Write compelling captions and descriptions. Use relevant hashtags.'
                },
                {
                    title: 'Community Management',
                    content: 'Respond to comments and messages promptly. Engage with followers and build relationships. Monitor social media analytics.'
                }
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
                            <Card className="h-100 shadow border-0">
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="fw-bold text-warning mb-3">{service.title}</Card.Title>
                                    {service.steps.map((step, stepIndex) => (
                                        <div key={stepIndex} className="mb-3">
                                            <h6 className="fw-bold text-secondary">{step.title}</h6>
                                            <p className="text-muted">{step.content}</p>
                                        </div>
                                    ))}
                                    <div className="mt-auto">
                                        <Button variant="warning" className="w-100" style={{ fontWeight: 'bold' }}>
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
