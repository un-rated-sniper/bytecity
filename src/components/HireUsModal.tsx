import React, { useState } from 'react';
import { Modal, Button, Form, Container, Row, Col } from 'react-bootstrap';

interface HireUsModalProps {
  show: boolean;
  handleClose: () => void;
}

const HireUsModal: React.FC<HireUsModalProps> = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    service: ''
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Simulate API call
      console.log(formData); // Replace this with your API call

      // Clear the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        whatsapp: '',
        service: ''
      });
      setSuccess(true);
      setError(null);
      handleClose(); // Close the modal after submission
    } catch (err) {
      setError("There was an error submitting your request. Please try again.");
      setSuccess(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Hire Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {success && <div className="alert alert-success">Your request has been submitted!</div>}
        {error && <div className="alert alert-danger">{error}</div>}
        <Form onSubmit={handleSubmit}>
          <Container>
            <Row className="mb-3">
              <Col md={12}>
                <Form.Group controlId="name">
                  <Form.Label>Name / Organization</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter your name or organization" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="phone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter phone number" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={12}>
                <Form.Group controlId="whatsapp">
                  <Form.Label>WhatsApp Group Link</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter WhatsApp link" 
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange} 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={12}>
                <Form.Group controlId="service">
                  <Form.Label>Which Section</Form.Label>
                  <Form.Control 
                    as="select" 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose...</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Web Content Management">Web Content Management</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default HireUsModal;
