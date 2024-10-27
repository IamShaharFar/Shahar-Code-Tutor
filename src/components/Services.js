import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Services() {
  return (
    <Container id="services" className="my-5">
      <h2 className="text-center mb-4">שירותים והנחות בקבוצות</h2>
      <Row>
        <Col xs={12} md={6} lg={4} className="mb-3">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>שיעור פרטי</Card.Title>
              <Card.Text>
                עלות שיעור פרטי: <strong>100 ₪</strong> לתלמיד.<br />
                <strong>אורך השיעור:</strong> שעה.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-3">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>שני תלמידים</Card.Title>
              <Card.Text>
                עלות לכל תלמיד: <strong>90 ₪</strong> (הנחה של <strong>10%</strong>).<br />
                <strong>אורך השיעור:</strong> שעה.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-3">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>שלושה תלמידים</Card.Title>
              <Card.Text>
                עלות לכל תלמיד: <strong>80 ₪</strong> (הנחה של <strong>20%</strong>).<br />
                <strong>אורך השיעור:</strong> שעה.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-3">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>עד 3 תלמידים בלבד</Card.Title>
              <Card.Text>
                שיעור מותאם אישית עם הנחות מיוחדות.<br />
                <strong>אורך השיעור:</strong> שעה.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
