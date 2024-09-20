import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/contact.css';

export default function Contact() {
  return (
    <Container className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Type your message here..." />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p><strong>Email:</strong> muneebahmed2786@gmail.com</p>
            <p><strong>Phone:</strong> +91-8639367509</p>
            <p><strong>Address:</strong> Hyderabad - 500001</p>
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="https://facebook.com" className="facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" className="twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" className="instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
