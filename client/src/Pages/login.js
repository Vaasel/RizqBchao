import './login.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Card, Form} from 'react-bootstrap';
import Button from '../components/button';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Login successful, you can redirect or perform other actions here.
        console.log('Login successful');
      } else {
        // Handle login failure, e.g., display an error message.
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="login">
      <Card>
        <Card.Body>
          <Card.Title className="login-t">
            <h1>Login</h1>
          </Card.Title>
          <Form>
            <Form.Group className="set">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="set">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="login-b">
              <Button text={["Login"]} onClick={handleLogin} />
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
