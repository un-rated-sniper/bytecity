import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

interface HeroProps {
  onHireUsClick: () => void;
}

const NavbarComponent: React.FC<HeroProps> = ({ }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="mx-auto">
          <img
            src="./bytelogo.svg"
            width="50"
            height="50"
            alt="ByteCity Tech Solutions logo" /> 
          &nbsp; ByteCity Tech Solutions
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-hover">Home</Nav.Link>
            <Nav.Link href="#aboutus" className="nav-hover">About Us</Nav.Link>
            <Nav.Link href="#services" className="nav-hover">Our Services</Nav.Link>
            <Nav.Link href="#blog" className="nav-hover">Blog</Nav.Link>
            <Nav.Link href="#sales" className="nav-hover">Computer Store</Nav.Link>
            <Nav.Link href="#contact" className="nav-hover">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
