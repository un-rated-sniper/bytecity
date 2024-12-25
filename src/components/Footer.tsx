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
              Delivering innovative tech solutions for your business. From IT consultancy to system sourcing and graphic design, we've got you covered!
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} sm={6} className="mb-4">
            <h5 className="text-warning">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#services" className="text-light text-decoration-none">Our Services</a></li>
              <li><a href="#portfolio" className="text-light text-decoration-none">Portfolio</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="#careers" className="text-light text-decoration-none">Careers</a></li>
            </ul>
          </Col>

          {/* Contact and Social Media */}
          <Col md={4} sm={6} className="mb-4">
            <h5 className="text-warning">Contact Us</h5>
            <p className="text-light">📧 Email: <a href="mailto:bytecitytech.ke@gmail.com" className="text-light">bytecitytech.ke@gmail.com</a></p>
            <p className="text-light">📞 Phone: <a href="tel:+254777439049" className="text-light">+254 777 439 049</a></p>

            <div>
              <a href="#" className="text-light me-3"><i className="fab fa-facebook fa-2x"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-twitter fa-2x"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-linkedin fa-2x"></i></a>
              <a href="#" className="text-light"><i className="fab fa-instagram fa-2x"></i></a>
            </div>
          </Col>
        </Row>
        
        <hr className="bg-light" />
        
        {/* Footer Bottom Section */}
        <p className="text-center text-light mb-0">© {new Date().getFullYear()} ByteCity Tech Solutions. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
