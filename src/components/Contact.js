import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [showAlert, setShowAlert] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'שדה זה הוא חובה';
    if (!formData.email) newErrors.email = 'שדה זה הוא חובה';
    if (!formData.phone) newErrors.phone = 'שדה זה הוא חובה';
    if (!formData.message) newErrors.message = 'שדה זה הוא חובה';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .send('service_yh6nnn2', 'template_5ih8jbr', formData, 'zeyURu7y3uMtLH4lK')
      .then(() => {
        setShowAlert(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        console.error('Failed to send message:', error);
      });
  };

  const handleWhatsappClick = () => {
    const whatsappMessage = `שלום שחר, שמי ${formData.name}. רציתי ליצור קשר איתך לגבי שיעורים פרטיים. ${formData.message}`;
    window.open(`https://wa.me/+972503217014?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <Container id="contact" className="my-5">
      <h2 className="text-center mb-4">יצירת קשר</h2>
      {showAlert && <Alert variant="success">ההודעה נשלחה בהצלחה!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>שם מלא</Form.Label>
          <Form.Control
            type="text"
            placeholder="הזן את שמך"
            value={formData.name}
            onChange={handleInputChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>כתובת דוא"ל</Form.Label>
          <Form.Control
            type="email"
            placeholder={"הזן את כתובת הדוא\"ל שלך"}
            value={formData.email}
            onChange={handleInputChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="phone" className="mb-3">
          <Form.Label>מספר טלפון</Form.Label>
          <Form.Control
            type="text"
            placeholder="הזן את מספר הטלפון שלך"
            value={formData.phone}
            onChange={handleInputChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="message" className="mb-3">
          <Form.Label>הודעה</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="הזן את הודעתך"
            value={formData.message}
            onChange={handleInputChange}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
        </Form.Group>
        <div className="d-flex align-items-center mb-3 flex-column flex-md-row">
          <Button variant="primary" type="submit" className="mb-2 mb-md-0">
            שלח
          </Button>
          <Button variant="success" className="ms-md-3 me-md-1" onClick={handleWhatsappClick}>
            <FaWhatsapp /> יצירת קשר בווצאפ
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Contact;
