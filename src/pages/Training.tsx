import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TrainingHero from '../components/TrainingHero';
const Training = () => {
  const trainingImages = {
    webDevelopment: 'web-development.png', // Replace with actual paths
    graphicDesign: 'graphic-design.png',
    pythonDataAnalysis: 'python-data-analysis.png',
  };

  return (
    <section className="training-section py-5 bg-light" id="training">
        
      <Container>
        <TrainingHero />
        <h2 className="text-center text-dark mb-4">Our Training Programs</h2>

        {/* Web Development Section */}
        <Row className="align-items-center mb-5">
          <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
            <h3 className="text-warning">Web Development</h3>
            <p className="text-muted fs-5">
              Our Web Development course equips you with the skills to build modern, responsive 
              websites and web applications. You’ll learn to use cutting-edge technologies such 
              as React, TypeScript, and Node.js. Additionally, we focus on content management 
              systems (CMS) like Strapi to help you manage dynamic content efficiently. 
              This course is perfect for those who want to master the tools to create robust 
              and scalable websites.
            </p>
            <Button
              variant="warning"
              className="mt-3"
              style={{ fontWeight: 'bold', padding: '10px 20px' }}
            >
              Join a Class
            </Button>
          </Col>
          <Col lg={6}>
            <img
              src={trainingImages.webDevelopment}
              alt="Web Development"
              className="d-block w-100 rounded"
              style={{
                maxHeight: '400px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </Col>
        </Row>

        {/* Graphic Design Section */}
        <Row className="align-items-center mb-5 flex-lg-row-reverse">
          <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
            <h3 className="text-warning">Graphic Design</h3>
            <p className="text-muted fs-5">
              Master the art of graphic design and unleash your creativity using the Adobe 
              Creative Suite. Learn to design world-class branding materials, including logos, 
              business cards, and brochures, while exploring advanced tools in Photoshop, 
              Illustrator, and InDesign. This course is perfect for individuals who want to 
              create visually compelling designs for digital and print media and build a 
              distinctive brand identity. Take the first step toward becoming a design 
              professional today.
            </p>
            <Button
              variant="warning"
              className="mt-3"
              style={{ fontWeight: 'bold', padding: '10px 20px' }}
            >
              Register for the Course
            </Button>
          </Col>
          <Col lg={6}>
            <img
              src={trainingImages.graphicDesign}
              alt="Graphic Design"
              className="d-block w-100 rounded"
              style={{
                maxHeight: '400px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </Col>
        </Row>

        {/* Python Data Analysis Section */}
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
            <h3 className="text-warning">Python Data Analysis</h3>
            <p className="text-muted fs-5">
              Dive into the world of data with our Python Data Analysis course. Learn how to 
              manipulate and analyze large datasets using powerful frameworks such as Pandas, 
              NumPy, and Matplotlib. Whether you want to create visualizations, generate 
              insights, or prepare data for machine learning, this course will provide you with 
              the skills to succeed. With practical examples and real-world projects, you'll 
              be ready to handle data-driven challenges in any industry.
            </p>
            <Button
              variant="warning"
              className="mt-3"
              style={{ fontWeight: 'bold', padding: '10px 20px' }}
            >
              Join a Class
            </Button>
          </Col>
          <Col lg={6}>
            <img
              src={trainingImages.pythonDataAnalysis}
              alt="Python Data Analysis"
              className="d-block w-100 rounded"
              style={{
                maxHeight: '400px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Training;
