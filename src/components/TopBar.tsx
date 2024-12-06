import React from 'react';
import { Container } from 'react-bootstrap';

// TopBar component displays a top bar with contact information
const TopBar: React.FC = () => (
  <div style={{ backgroundColor: 'orange', color: 'black', padding: '5px 0' }}>
    <Container className="d-flex justify-content-center">
      <div className="d-flex">
        {/* Email address */}
        <div className="mr-3">bytecitytech.ke@gmail.com</div>
        <div style={{ margin: '0 10px' }}>|</div>
        {/* Phone number */}
        <div>+254777439049</div>
      </div>
    </Container>
  </div>
);

export default TopBar;
