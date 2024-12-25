import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa"; // For the checkmark icon

const OurServices: React.FC = () => {
  return (
    <Container className="our-services">
      <Row className="mb-5 text-center">
        <Col>
          <h1 className="text-warning">Our Services</h1>
          <p>Explore our range of services designed to meet your needs and elevate your business.</p>
        </Col>
      </Row>

      {/* Graphic and Design Section */}
      <Row className="service-list mb-5">
        <Col>
          <h2>Graphic and Design</h2>
          <ListGroup>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Logo Design
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Branding
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Business Cards
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Posters & Flyers
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Receipt Designs
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Digital Print Design
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Print Media Design
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>

      {/* Web Development Section */}
      <Row className="service-list mb-5">
        <Col>
          <h2>Web Development</h2>
          <ListGroup>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Custom Websites
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              E-commerce Solutions
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              CMS Development
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Web Design & UI/UX
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>

      {/* Training Section */}
      <Row className="service-list mb-5">
        <Col>
          <h2>Training</h2>
          <ListGroup>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Web Design
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Introduction to Photography and Video Shooting
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Data Analysis Using Python (with Pandas & Frameworks)
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default OurServices;
