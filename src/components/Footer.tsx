import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Our Products & Services</a></li>
              <li><a href="#hire-us">Hire Us</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Info</h5>
            <p>Address: 123 ByteCity Ave.</p>
            <p>Phone: +123456789</p>
            <p>Email: contact@bytecity.com</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <p><a href="#">Facebook</a></p>
            <p><a href="#">Twitter</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;