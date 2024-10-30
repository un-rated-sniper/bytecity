import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

interface HireUsModalProps {
  show: boolean;
  handleClose: () => void;
}

const HireUsModal: React.FC<HireUsModalProps> = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    section: 'Web Design',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value } = target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Hire Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name / Organization</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name or organization"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formSection">
            <Form.Label>Section</Form.Label>
            <Form.Control
              as="select"
              name="section"
              value={formData.section}
              onChange={handleInputChange}
            >
              <option>Web Design</option>
              <option>Graphic Design</option>
              <option>Social Media Management</option>
              <option>Web Content Management</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" type="submit">Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default HireUsModal;
