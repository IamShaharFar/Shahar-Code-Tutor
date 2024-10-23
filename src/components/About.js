import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container id="about" className="my-5">
      <Row className="align-items-center">
        <Col xs={12} md={6} className="d-flex justify-content-center mb-4 mb-md-0">
          <img
            src="/images/essential-books.webp" // Ensure the path is correct
            alt="Stack of essential books for learning programming and computer science"
            className="img-fluid rounded about-img"
            width="600"
            height="400"
          />
        </Col>
        <Col xs={12} md={6}>
          <h1>קצת עליי</h1>
          <p>
            שחר, סטודנט למחשבים ובוגר מגמת הנדסת תוכנה, כאן כדי לעזור לך להצליח. אני מציע שיעורים פרטיים בזום עם דגש על:
          </p>
          <ul>
            <li>עזרה בעבודות הגשה</li>
            <li>פיתוח מיומנויות למידה עצמאית</li>
            <li>הכנה מותאמת אישית למבחנים</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
