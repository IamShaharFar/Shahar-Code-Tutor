import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPython, FaJsSquare } from 'react-icons/fa';
import { SiCsharp } from 'react-icons/si'; // Import C# icon from Simple Icons
import me from '../images/me.webps';

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
            אני שחר, סטודנט למדעי המחשב באוניברסיטה הפתוחה, מתכנת בנשמה וגם לוחם ומילואימניק. בשנה האחרונה עשיתי כ-100 ימי מילואים, כולל שתי סבבים. ה-7 באוקטובר היה רגע מאתגר במיוחד, ואני מצאתי את עצמי שוב מתגייס, תורם כמיטב יכולתי לצד החברים שלי. להיות שם, בתוך כל זה, חיזק בי את תחושת האחריות והשליחות לעזור ולהיות שם בשביל אחרים, גם בתחום המילואים וגם כמורה פרטי.
          </p>
          <p style={{ fontSize: '1rem' }}>
            מאז התיכון אני עוסק בפיתוח תוכנה, עם אהבה למציאת פתרונות יצירתיים ולתכנות אלגוריתמי שמפשט בעיות מורכבות. צברתי ניסיון מעשי בהתמחות בבית תוכנה ובבניית אתרים. אני מאמין בלמידה עצמאית וממוקדת, ורוצה לעזור לאחרים להצליח בעולם התכנות.
          </p>
          <p style={{ fontSize: '1rem' }}>
            בשיעורים שלי נלמד להבין את החומר, לפתח חשיבה עצמאית, ולהתכונן בצורה מיטבית למבחנים ופרויקטים, עם דגש על:
          </p>
          <ul style={{ fontSize: '1rem' }}>
            <li>עזרה בעבודות הגשה</li>
            <li>פיתוח מיומנויות למידה עצמאית</li>
            <li>הכנה ממוקדת למבחנים</li>
          </ul>
          <p className="mt-4" style={{ fontSize: '1rem' }}>
            אני מלמד בשפות ובמסגרות הבאות:
          </p>
          <div className="d-flex justify-content-start align-items-center">
            <FaPython size={40} className="me-3 text-primary" title="Python" />
            <FaJsSquare size={40} className="me-3 text-warning" title="JavaScript" />
            <SiCsharp size={40} className="me-3 text-info" title="C#" /> {/* Added C# icon */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
