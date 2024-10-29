import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          {/* Company Information */}
          <Col md={4} sm={12} className="mb-4">
            <h5 className="text-warning">ByteCity Tech Computer Solutions</h5>
            <p className="text-light">
              Providing high-quality tech solutions and services to meet your business needs. Reach out to us for IT consultancy, system sourcing, and graphic design.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} sm={6} className="mb-4">
            <h5 className="text-warning">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light">Home</a></li>
              <li><a href="#services" className="text-light">Our Services</a></li>
              <li><a href="#portfolio" className="text-light">Portfolio</a></li>
              <li><a href="#contact" className="text-light">Contact Us</a></li>
              <li><a href="#careers" className="text-light">Careers</a></li>
            </ul>
          </Col>

          {/* Contact and Social Media */}
          <Col md={4} sm={6} className="mb-4">
            <h5 className="text-warning">Contact Us</h5>
            <p className="text-light">Email: info@bytecitytech.com</p>
            <p className="text-light">Phone: +123 456 7890</p>

            <h5 className="text-warning mt-3">Follow Us</h5>
            <div>
              <a href="#" className="text-light me-3"><i className="fab fa-facebook fa-2x"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-twitter fa-2x"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-linkedin fa-2x"></i></a>
              <a href="#" className="text-light"><i className="fab fa-instagram fa-2x"></i></a>
            </div>
          </Col>
        </Row>
        <hr className="bg-light" />
        <p className="text-center text-light mb-0">© {new Date().getFullYear()} ByteCity Tech Computer Solutions. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
