import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

interface Item {
  id: number;
  name: string;
  description: string;
}

const hotSalesItems: Item[] = [
  { id: 1, name: 'LENOVO THINKPAD 495S', description: 'AMD RYZEN 5 PRO 8GB RAM 256GB SSD 2GB RADEON GRAPHICS | 500 SSD | 16 GB RAM' },
  { id: 2, name: 'LENOVO THINKPAD 495S', description: 'AMD RYZEN 5 PRO 8GB RAM 256GB SSD 2GB RADEON GRAPHICS | 500 SSD | 16 GB RAM' },
  // Add more items as needed
];

const HotSale: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (item: Item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <Container>
      <h2 className="text-center text-danger my-4">Hot Sale</h2>
      <Row className="justify-content-center">
        {hotSalesItems.map(item => (
          <Col key={item.id} xs={10} md={8} lg={6} className="my-2">
            <div
              className="p-3 border rounded bg-light text-center clickable"
              onClick={() => handleClick(item)}
              style={{ cursor: 'pointer' }}
            >
              {item.name} - {item.description}
            </div>
          </Col>
        ))}
      </Row>

      {/* Modal for Item Details */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              {/* Placeholder for the image */}
              <img
                src="https://via.placeholder.com/250"
                alt={selectedItem?.name}
                className="img-fluid"
              />
            </Col>
            <Col md={6}>
              <h4>{selectedItem?.name}</h4>
              <p className="text-muted">{selectedItem?.description}</p>
              <ul>
                <li>2nd Gen AMD Ryzen Pro CPU</li>
                <li>Radeon Vega Graphics</li>
                <li>Lightweight and portable</li>
                <li>Slim bezel display</li>
                <li>All-day battery life</li>
                <li>Top-notch security features</li>
                <li>Optional WWAN connectivity</li>
              </ul>
              <Button variant="primary" className="mt-3 btn-block">
  Order Now
</Button>
         
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default HotSale;