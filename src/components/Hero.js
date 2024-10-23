// components/Hero.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

function Hero() {
  return (
    <div className="hero-section bg-primary text-light text-center py-5">
      <Helmet>
        <meta name="description" content="שחר - שיעורים פרטיים במחשבים והנדסת תוכנה. למדו בזום ובקצב שלכם." />
      </Helmet>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={8} lg={6} className="mx-auto">
            <h1>לימודי מחשבים והנדסה מותאמים אישית להצלחה שלך 🎯</h1>
            <p className="mt-3">
              הצטרפו לשיעורים פרטיים באווירה אישית ובזום, עם דגש על פיתוח מיומנויות למידה עצמאית והכנה למבחנים.
            </p>
            <a href="/#contact">
              <Button variant="light" className="mt-4">קבעו שיעור ניסיון עכשיו</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
