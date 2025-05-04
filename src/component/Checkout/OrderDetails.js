import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

export default function OrderDetails() {
  return (
    <Container dir="rtl" >
      <h5 className="mb-4">פרטי תשלום ומשלוח</h5>
      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="firstName">
              <Form.Label>שם פרטי</Form.Label>
              <Form.Control type="text" placeholder="שם פרטי" required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName">
              <Form.Label>שם משפחה</Form.Label>
              <Form.Control type="text" placeholder="שם משפחה" required />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={12}>
            <Form.Group controlId="country">
              <Form.Label>מדינה/אזור</Form.Label>
              <Form.Control type="text" placeholder="ישראל" readOnly />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={12}>
            <Form.Group controlId="street">
              <Form.Label>רחוב</Form.Label>
              <Form.Control type="text" placeholder="רחוב" required />
            </Form.Group>
          </Col>
         
        </Row>
        <Row className='mb-3'>
        <Col md={4}>
            <Form.Group controlId="building">
              <Form.Label>מס' בניין</Form.Label>
              <Form.Control type="text" placeholder="בניין" required />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="floor">
              <Form.Label>קומה</Form.Label>
              <Form.Control type="text" placeholder="קומה" required />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="apartment">
              <Form.Label>דירה</Form.Label>
              <Form.Control type="text" placeholder="דירה" required />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={12}>
            <Form.Group controlId="city">
              <Form.Label>עיר</Form.Label>
              <Form.Control type="text" placeholder="עיר" required />
            </Form.Group>
          </Col>
          
        </Row>

        <Row className="mb-3">
          <Col md={12}>
            <Form.Group controlId="email">
              <Form.Label>כתובת אימייל</Form.Label>
              <Form.Control type="email" placeholder="כתובת אימייל" required />
            </Form.Group>
          </Col>
        </Row>

        
      </Form>
    </Container>
  );
}
