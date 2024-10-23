import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'; // Import your CSS file

function Testimonials() {
  return (
    <Container id="testimonials" className="my-5">
      <h2 className="text-center mb-4">המלצות תלמידים</h2>
      <Row>
        <Col xs={12} md={6} className="mb-3">
          <blockquote className="blockquote testimonial-bg">
            <p>"שחר עזר לבן שלי לעבור את המבחן בהצלחה – ממליצה בחום! ⭐⭐⭐⭐⭐"</p>
            <footer className="blockquote-footer testimonial-bg">אמא מרוצה</footer>
          </blockquote>
        </Col>
        <Col xs={12} md={6} className="mb-3">
          <blockquote className="blockquote testimonial-bg">
            <p>"הלמידה עם שחר הייתה מקצועית וממוקדת, ממליץ לכל מי שרוצה להשתפר!"</p>
            <footer className="blockquote-footer testimonial-bg">תלמיד מרוצה</footer>
          </blockquote>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
