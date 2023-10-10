import React, { useState, FormEvent } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import AuthAPI from "../../lib/api/auth";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alerts, setAlerts] = useState();

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const resp = await AuthAPI.register({
      email: email,
      name: name,
      password: password
    });

    if (resp.status === 201) {
      console.log('move login page');
    } else {
      setAlerts(resp.data);
    }
  }

  return (
    <>
      <Row className="justify-content-md-center" style={{ marginTop: '25%' }}>
        <Col md={8} lg={4}>
          {/* {
            Object.entries(alerts).map(([key, value], i) => {
              return (
                <>
                  <Alert key="danger" variant="danger">
                    This is a danger alert—check it out!
                  </Alert>
                </>
              );
            })
          } */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="register.email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={handleEmail}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="register.name">
              <Form.Label>user name</Form.Label>
              <Form.Control
                type="text"
                required
                value={name}
                onChange={handleName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="register.password">
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
            >Register</Button>            
          </Form>
        </Col>
      </Row>
    </>
  );
};
  
export default Register;