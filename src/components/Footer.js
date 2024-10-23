// components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <p className='mb-3'>שחר - מורה פרטי למדעי המחשב והנדסת תוכנה</p>
            <p className='mb-2'>✉ shaharfar16@gmail.com </p><p>📞 050-321-7014</p>
            <p>שעות פעילות: א'-ה' 9:00-18:00</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
