import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand>
          <img
            src="./bytelogo.svg"
            width="50"
            height="50"
            alt="ByteCity Tech Solutions logo"
          />
          &nbsp; ByteCity Tech Solutions
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={closeNavbar}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us" onClick={closeNavbar}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/our-services" onClick={closeNavbar}>
              Our Services
            </Nav.Link>
            <Nav.Link as={Link} to="/training" onClick={closeNavbar}>
              Training
            </Nav.Link>
            <Nav.Link as={Link} to="/store" onClick={closeNavbar}>
              Computer Store
            </Nav.Link>
            <Nav.Link as={Link} to="/careers" onClick={closeNavbar}>
              Careers
            </Nav.Link>
            <Nav.Link as={Link} to="/contact-us" onClick={closeNavbar}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
