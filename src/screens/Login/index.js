import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import './index.css';
import { useState } from 'react';

const Login = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="login-container">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Card className="form-login">
          <Card.Header className="d-flex justify-content-center">
            <h4>LOGIN</h4>
          </Card.Header>
          <Card.Body>
            <Form.Group as={Row} className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Col>
                <Form.Control required placeholder="Type your email here..." type="email" />
                <Form.Control.Feedback type="invalid">Email Required</Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Col>
                <Form.Control required type="password" placeholder="Type your password here..." />
                <Form.Control.Feedback type="invalid">Password Required</Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              LOGIN
            </Button>
          </Card.Footer>
        </Card>
      </Form>
    </div>
  );
};

export default Login;
