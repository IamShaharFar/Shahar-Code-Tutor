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
            <footer className="blockquote-footer testimonial-bg">(ש. אמא של תלמיד)</footer>
          </blockquote>
        </Col>
        <Col xs={12} md={6} className="mb-3">
          <blockquote className="blockquote testimonial-bg">
            <p>"הלמידה עם שחר הייתה מקצועית וממוקדת, ממליץ לכל מי שרוצה להשתפר!"</p>
            <footer className="blockquote-footer testimonial-bg">(א. תלמיד מרוצה)</footer>
          </blockquote>
        </Col>
        <Col xs={12} md={6} className="mb-3">
          <blockquote className="blockquote testimonial-bg">
            <p>"היחס האישי והסבלנות של שחר עזרו לבן שלי להבין נושאים מורכבים בקלות."</p>
            <footer className="blockquote-footer testimonial-bg">(ד. אמא של תלמיד)</footer>
          </blockquote>
        </Col>
        <Col xs={12} md={6} className="mb-3">
          <blockquote className="blockquote testimonial-bg">
            <p>"בזכות התמיכה של שחר, הצלחתי לשפר את הציונים בצורה משמעותית!"</p>
            <footer className="blockquote-footer testimonial-bg">(מ. תלמיד מרוצה)</footer>
          </blockquote>
        </Col>
        <Col xs={12} md={6} className="mb-3">
          <blockquote className="blockquote testimonial-bg">
            <p>"שחר הצליח להפוך את הלמידה לחוויה מהנה ומועילה עבור הבן שלי."</p>
            <footer className="blockquote-footer testimonial-bg">(ל. אמא של תלמיד)</footer>
          </blockquote>
        </Col>
        <Col xs={12} md={6} className="mb-3">
          <blockquote className="blockquote testimonial-bg">
            <p>"מורה מדהים עם המון ידע וסבלנות – ממליץ לכל אחד!"</p>
            <footer className="blockquote-footer testimonial-bg">(ע. תלמיד מרוצה)</footer>
          </blockquote>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
