import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPython, FaJsSquare, FaJava } from 'react-icons/fa';
import { SiCsharp } from 'react-icons/si'; // Import C# icon from Simple Icons
import me from '../images/me.webp'; //webp

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
              width: '300px',
              height: '300px',
              objectFit: 'cover',
              objectPosition: '50% 0%', // Adjusts the position to focus on the center of the face
            }}
          />
        </Col>

        <Col xs={12} md={6}>
          <h1>קצת עליי</h1>
          <p style={{ fontSize: '1rem' }}>
            אני שחר, סטודנט למדעי המחשב באוניברסיטה הפתוחה ומתכנת בנשמה. אני מדריך בתוכנית ניצנים ללימוד תוכנה – תוכנית מצוינות טכנולוגית לתיכוניסטים שזכתה בפרס הרמטכ"ל, ובעל ניסיון מעשי בפיתוח תוכנה ובניית אתרים.
          </p>
          <p style={{ fontSize: '1rem' }}>
            כ-100 ימי מילואים בשנה האחרונה כלוחם חיזקו בי את היכולת להתמודד עם אתגרים מורכבים ולמצוא פתרונות יצירתיים – בדיוק כמו בתכנות. את הגישה הזו אני מביא גם לשיעורים, עם דגש על פיתוח חשיבה עצמאית ויצירתית.
          </p>
          <p style={{ fontSize: '1rem' }}>
            מאז התיכון אני חי את עולם הפיתוח, עם אהבה אמיתית למציאת פתרונות מחוץ לקופסה. אני מתמקד בלמידה מעשית ואפקטיבית שתעזור לך לא רק להבין את החומר, אלא לפתח חשיבה שתלווה אותך גם מחוץ לשיעור.
          </p>
          <p style={{ fontSize: '1rem' }}>
            מה נלמד בשיעורים שלי?
          </p>
          <ul style={{ fontSize: '1rem' }}>
            <li>פיתוח חשיבה אנליטית ופתרון בעיות.</li>
            <li>הכנה ממוקדת למבחנים ובגרויות במדעי המחשב.</li>
            <li>עזרה בעבודות הגשה ובפרויקטים מעשיים.</li>
            <li>פיתוח מיומנויות ללמידה עצמאית.</li>
          </ul>
          <p className="mt-4" style={{ fontSize: '1rem' }}>
            אני מלמד בשפות ובמסגרות הבאות:
          </p>
          <div className="d-flex justify-content-start align-items-center mb-2">
            <FaPython size={40} className="me-3 text-primary" title="Python" />
            <FaJsSquare size={40} className="me-3 text-warning" title="JavaScript" />
            <SiCsharp size={40} className="me-3 text-info" title="C#" />
            <FaJava size={40} className="me-3 text-danger" title="Java" />
          </div>
          <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>
  אני מזמין אותך לשיעור ניסיון – בוא נבנה יחד את הדרך שלך להצלחה במדעי המחשב.
</p>

        </Col>

      </Row>
    </Container>
  );
}

export default About;
