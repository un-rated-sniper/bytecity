import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Message: React.FC = () => {
  return (
    <section className="py-5 text-center bg-warning" dir="rtl">
      <Container>
        <div className="p-3 mb-2 bg-warning text-dark">
          <h2>
            Work Smarter with Innovative IT Business Solutions <span className="primary"> AND IDEAS</span>
          </h2>
          <Button variant=" bg-warning" className="mt-3" style={{ fontWeight: 'bold' }}>
          ➞ WORK WITH US
        </Button>
        </div>
      </Container>
    </section>
  );
};

export default Message;
