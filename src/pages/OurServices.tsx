import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa"; // For the checkmark icon

const OurServices: React.FC = () => {
  return (
    <Container className="our-services">
      {/* Hero Section */}
      <Row className="hero-section text-center mb-5 py-5" style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
        <Col>
          <h1 className="display-4 text-warning">Elevate Your Business with Our Comprehensive Services</h1>
          <p className="lead">Explore a range of services to help you grow your brand, enhance your presence, and achieve your goals.</p>
          <Button variant="primary" size="lg" href="#services">Explore Services</Button>
        </Col>
      </Row>

      {/* Graphic and Design Section (Moved First and Expanded) */}
      <Row className="service-list mb-5" id="services">
        <Col>
          <h2>Graphic and Design</h2>
          <p>Our graphic design team brings your ideas to life with visually stunning, innovative designs. Whether you need a logo, marketing materials, or a complete rebranding, we are here to help.</p>
          <ListGroup>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Logo Design
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Branding & Corporate Identity
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Business Cards & Stationery
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Posters, Flyers, & Brochures
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Receipt & Packaging Design
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Digital Print & Social Media Graphics
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Print Media Design (Magazines, Ads, Banners)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Presentation & PowerPoint Design
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Web & Mobile App UI/UX Design
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Illustrations & Custom Artwork
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Advertising Campaigns (Online and Print)
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>

      {/* Web Development Section (Expanded) */}
      <Row className="service-list mb-5">
        <Col>
          <h2>Web Development</h2>
          <p>We build websites that not only look great but also perform well. From custom websites to e-commerce platforms, we have the skills to bring your vision to life. Our development process is centered around user experience, ensuring that your website is intuitive and easy to navigate.</p>
          <ListGroup>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Custom Websites (Built from scratch to meet your specific needs)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              E-commerce Solutions (Fully integrated online stores)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              CMS Development (Content management systems for easy website updates)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Web Design & UI/UX (Intuitive, user-friendly design)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              SEO Optimization (Ensuring your website ranks well on search engines)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Mobile-Responsive Websites (Optimized for any device)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Web Applications (Custom-built apps to enhance functionality)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Ongoing Maintenance & Support (Ensuring your website stays up-to-date)
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>

      {/* Photography & Videography Section */}
      <Row className="service-list mb-5">
        <Col>
          <h2>Photography & Videography</h2>
          <p>We offer a full range of photography and videography services tailored to your unique needs. Whether it's capturing a wedding, creating social media content, or producing commercial videos, our team is here to help.</p>
          <ListGroup>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Event Coverage (Corporate, Conferences, Product Launches, etc.)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Weddings (Full-day Coverage, Pre-Wedding, Ceremony, Reception)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Personalized TikTok & Instagram Clips (Custom Short-Form Content)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Commercial & Brand Videos (Promotional Campaigns, Storytelling)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Product Photography & Video (E-commerce & Advertising)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Portrait Sessions (Individual & Group Portraits, Lifestyle Shoots)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Documentary & Storytelling (Event Coverage, Brand Stories)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Real Estate Photography & Videography (Property Listings, Drone Shots)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Music Video Production (Full-Service Video Production)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Corporate Headshots & Team Photos (Business Branding & Profiles)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Drone Photography & Videography (Aerial Footage & Virtual Tours)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Live Event Streaming & Video Coverage (Virtual Audience Engagement)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Creative Direction & Concept Development (Visual Storytelling)
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>

      {/* Training Section (Moved Last and Expanded) */}
      <Row className="service-list mb-5">
        <Col>
          <h2>Training</h2>
          <p>Our training programs are designed to empower individuals and teams with the knowledge and skills necessary for success in the digital world. Whether you're learning to design websites, shoot photos, or analyze data, we provide hands-on training for all skill levels.</p>
          <ListGroup>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Web Design (Learn how to create stunning websites from scratch)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Introduction to Photography and Video Shooting (Basic Techniques & Skills)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Data Analysis Using Python (with Pandas & Frameworks)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Social Media Content Creation (TikTok, Instagram, YouTube)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              SEO & Digital Marketing (Improving Your Online Visibility)
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <FaCheckCircle className="check-icon me-3" />
              Video Editing & Post-Production (Tools, Techniques, and Tips)
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default OurServices;
