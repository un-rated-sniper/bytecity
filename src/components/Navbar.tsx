import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


interface HeroProps {
  onHireUsClick: () => void;
}

const NavbarComponent:React.FC<HeroProps> = ({ onHireUsClick }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="mx-auto" >
          <img
            src="./bytelogo.svg"
            width="50"
            height="50"
            alt="ByteCity Tech Solutions logo" /> 
          &nbsp;&nbsp; ByteCity Tech Solutions
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <Nav.Link href="#services">Our Services</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#sales">Computer Store</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
             <button onClick={onHireUsClick} className="btn btn-warning">Hire Us</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
