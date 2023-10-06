import React, { useState, FormEvent } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('### email: ', email);
    console.log('### name: ', name);
    console.log('### password: ', password);
  }

  return (
    <>
      <Row className="justify-content-md-center" style={{ marginTop: '25%' }}>
        <Col md="auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="signin.email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={handleEmail}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="signin.password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
            </Form.Group>
            <Button
              type="submit"
              variant="primary"
            >Signin</Button>            
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;