// components/Hero.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

function Hero() {
  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="hero-section bg-primary text-light text-center py-5">
      <Helmet>
        <meta 
          name="description" 
          content="שחר - שיעורים פרטיים במחשבים והנדסת תוכנה לתיכוניסטים. למדו בזום ובקצב שלכם עם הכנה לבגרויות." 
        />
      </Helmet>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={8} lg={6} className="mx-auto">
            <h1>שיעורי מחשבים והנדסת תוכנה לתיכוניסטים 🚀</h1>
            <p className="mt-3">
              שיעורים פרטיים בזום שמותאמים במיוחד לתלמידי תיכון, עם דגש על הכנה לבגרויות, פיתוח חשיבה עצמאית, והצלחה במקצועות טכנולוגיים.
            </p>
            <Button 
              variant="light" 
              className="mt-4" 
              onClick={handleScrollToContact}
            >
              קבעו שיעור ניסיון עכשיו
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
