import React, { useState, FormEvent } from "react";
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AuthAPI from "../../lib/api/auth";

const Login = () => {
  const [email, setEmail] = useState('sjahn@qoo10.com');
  const [password, setPassword] = useState('rewq1234');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const resp = await AuthAPI.login({
      email: email,
      password: password
    });

    // if (resp.status == 200) {
    //   localStorage.setItem();
    // }

    // console.log('### email: ', email);
    // console.log('### password: ', password);
    console.log('### response: ', resp);
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
            <div className="d-grid gap-2">
              <Button
                type="submit"
                variant="primary"
              >Sign In</Button>
            </div>
          </Form>
          <hr />
          <Link href={ '/auth/register' }>Sign Up</Link>
        </Col>
      </Row>
    </>
  );
};

export default Login;