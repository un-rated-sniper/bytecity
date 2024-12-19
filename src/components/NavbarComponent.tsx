import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavbarComponent: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      {" "}
      <Container>
        {" "}
        <Navbar.Brand>
          {" "}
          <img
            src="./bytelogo.svg"
            width="50"
            height="50"
            alt="ByteCity Tech Solutions logo"
          />{" "}
          &nbsp; ByteCity Tech Solutions{" "}
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="navbar-nav" />{" "}
        <Navbar.Collapse id="navbar-nav">
          {" "}
          <Nav className="ms-auto">
            {" "}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>{" "}
            <Nav.Link as={Link} to="./pages/about-us">
              About Us
            </Nav.Link>{" "}
            <Nav.Link as={Link} to="./pages/services">
              Our Services
            </Nav.Link>{" "}
            <Nav.Link as={Link} to="/training">
              Training
            </Nav.Link>{" "}
            <Nav.Link as={Link} to="/store">
              Computer Store
            </Nav.Link>{" "}
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>{" "}
            <Nav.Link as={Link} to="/careers">
              Careers
            </Nav.Link>{" "}
            <Nav.Link as={Link} to="/contact-us">
              Contact Us
            </Nav.Link>{" "}
          </Nav>{" "}
        </Navbar.Collapse>{" "}
      </Container>{" "}
    </Navbar>
  );
};
export default NavbarComponent;
