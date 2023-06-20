import { Card, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import './index.css';
import { useEffect, useState } from 'react';
import { authAction } from '../../stores/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const authReducer = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleSubmit = (event) => {
    if (authReducer.loading) return;

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      return setValidated(true);
    }

    setValidated(false);
    dispatch(authAction.doLogin({ email, password }));
  };

  useEffect(() => {
    if (authReducer.data) return navigation('/admin/dashboard');
    if (authReducer.error) return alert(authReducer.error);
  }, [authReducer]);

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
                <Form.Control
                  required
                  placeholder="Type your email here..."
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <Form.Control.Feedback type="invalid">Email Required</Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Col>
                <Form.Control
                  required
                  type="password"
                  placeholder="Type your password here..."
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <Form.Control.Feedback type="invalid">Password Required</Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              {authReducer.loading ? (
                <Spinner animation="border" size="sm" color="white" />
              ) : (
                'LOGIN'
              )}
            </Button>
          </Card.Footer>
        </Card>
      </Form>
    </div>
  );
};

export default Login;
