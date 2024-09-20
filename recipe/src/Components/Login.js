import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/Home');
  };

  return (
    // <Container className="login-container">
    //   <Row className="justify-content-md-center">
    //     <Col md={6}>
    //       <h1 className="login-title">Login to MealMaster</h1>
    //       <Form onSubmit={handleLogin}>
    //         <Form.Group controlId="formBasicEmail">
    //           <Form.Label>Email address</Form.Label>
    //           <Form.Control
    //             type="email"
    //             placeholder="Enter email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </Form.Group>

    //         <Form.Group controlId="formBasicPassword" className="mt-3">
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control
    //             type="password"
    //             placeholder="Password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </Form.Group>

    //         <Button variant="primary" type="submit" className="mt-3">
    //           Login
    //         </Button>
    //       </Form>
    //     </Col>
    //   </Row>
    // </Container>
    <>
    <h1>This is Login Page</h1>
    </>
  );
}
