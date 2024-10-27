import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import me from '../images/me.jpg';

function About() {
  return (
    <Container id="about" className="my-5">
      <Row className="align-items-center">
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center mb-4 mb-md-0"
        >
          <img
            src={me}
            alt="Shahar - Private Tutor for Computer Science and Software Engineering"
            className="img-fluid rounded-circle"
            style={{
              width: '350px', 
              height: '350px',
              objectFit: 'cover',
              objectPosition: '50% 0%', // Adjusts the position to focus on the center of the face
            }}
          />
        </Col>

        <Col xs={12} md={6}>
          <h1>קצת עליי</h1>
          <p>
            אני שחר, סטודנט למדעי המחשב באוניברסיטה הפתוחה ומתכנת בנשמה. מאז התיכון אני עוסק בפיתוח תוכנה, עם אהבה למציאת פתרונות יצירתיים ולתכנות אלגוריתמי שמפשט בעיות מורכבות.
          </p>
          <p>
            צברתי ניסיון מעשי בהתמחות בבית תוכנה ובבניית אתרים. אני מאמין בלמידה עצמאית וממוקדת, ורוצה לעזור לאחרים להצליח בעולם התכנות.
          </p>
          <p>
            בשיעורים שלי נלמד להבין את החומר, לפתח חשיבה עצמאית, ולהתכונן בצורה מיטבית למבחנים ופרויקטים, עם דגש על:
          </p>
          <ul>
            <li>עזרה בעבודות הגשה</li>
            <li>פיתוח מיומנויות למידה עצמאית</li>
            <li>הכנה ממוקדת למבחנים</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
