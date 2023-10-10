import React, { useState, FormEvent } from "react";
import { useRouter } from 'next/router';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AuthAPI from "../../lib/api/auth";

const Register = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    password: ''
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const resp = await AuthAPI.register(inputs);
    if (resp.status === 201) {
      router.push('/auth/login');
    } else {
      const fields = Object.keys(resp.data);
      const message = `${fields.join()} 항목을 확인바람`;
      alert(message);
    }

  }

  return (
    <>
      <Row className="justify-content-md-center" style={{ marginTop: '25%' }}>
        <Col md={8} lg={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="register.email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
                value={inputs.email}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="register.name">
              <Form.Label>user name</Form.Label>
              <Form.Control
                type="text"
                required
                value={inputs.name}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="register.password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                placeholder="Password"
                value={inputs.password}
                onChange={onChange}
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