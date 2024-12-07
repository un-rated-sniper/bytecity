import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

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
    description: '',
  });

  const handleInputChange: React.ChangeEventHandler<any> = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title
          className="text-center w-100"
          style={{ color: 'orange', fontWeight: 'bold', fontSize: '1.8rem' }}
        >
          Let's Work Together!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="g-3">
            <Col xs={12} md={6}>
              <Form.Group controlId="formName">
                <Form.Label>Name / Organization</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name or organization"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="p-2"
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="p-2"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="g-3 mt-2">
            <Col xs={12} md={6}>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="p-2"
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="formSection">
                <Form.Label>Section</Form.Label>
                <Form.Control
                  as="select"
                  name="section"
                  value={formData.section}
                  onChange={handleInputChange}
                  className="p-2"
                >
                  <optgroup label="ICT General">
                    <option>Computer Sourcing</option>
                    <option>Consultation</option>
                    <option>Website Design</option>
                  </optgroup>
                  <optgroup label="Graphic Design & Printing Services">
                    <option>Adverts </option>
                    <option>Logos </option>
                    <option>Posters </option>
                    <option>Booklets </option>
                    <option>Receipts Book </option>
                    <option>Brochures</option>
                    <option>Branding of Merchandise</option>
                    <option>Business Cards</option>
                  </optgroup>
                  <optgroup label="Social Media / Web Content Management">
                    <option>X (formerly Twitter)</option>
                    <option>Facebook</option>
                    <option>Instagram</option>
                    <option>Website Content Management</option>
                  </optgroup>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formDescription" className="mt-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Describe what you need help with"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="p-2"
              required
            />
          </Form.Group>

          <Form.Group controlId="formWhatsappLink" className="mt-3">
            <Form.Label> Contact Us Through WhatsApp </Form.Label>
            <a
              href={`https://www.whatsapp.com/send?text=${encodeURIComponent(
                'Contact Us Through WhatsApp'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-info d-block mb-2"
            >
              Contact Us Through WhatsApp
            </a>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button
          variant="warning"
          type="submit"
          className="btn btn-warning d-block px-5 py-3"
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default HireUsModal;
