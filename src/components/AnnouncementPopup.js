// AnnouncementPopup.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../App.css';

function AnnouncementPopup() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header>
        <Button variant="link" className="close-button" onClick={handleClose} style={{ position: 'absolute', left: '10px', top: '10px' }}>✖</Button>
        <Modal.Title>מסר אישי ממני אליכם</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>20% הנחה למשפחות המילואימניקים</h5>
        <p>
          אני יודע שזו תקופה לא פשוטה לכולנו, במיוחד למשפחות המילואימניקים שתורמות כל כך הרבה למען המדינה. כדי להראות את הערכתי, אני מציע לכם 20% הנחה על שיעורים פרטיים - קצת תמיכה במי שתומך בכולנו.
        </p>
        <hr />
        <h5>25% הנחה למשפחות המפונים</h5>
        <p>
          ליבי איתכם, המשפחות שנאלצו להתפנות מבתיהן בשל המצב הביטחוני. אני כאן כדי להקל עליכם, ולכן אני מציע 25% הנחה על שיעורים פרטיים, בתקווה שזה יסייע לכם ולילדיכם בתקופה המורכבת הזו.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          סגור
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AnnouncementPopup;