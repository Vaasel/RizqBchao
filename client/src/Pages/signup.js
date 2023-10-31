import './signup.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Card,Form } from 'react-bootstrap';
import Button from '../components/button';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/register', {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        // Registration successful, you can redirect or perform other actions here.
        console.log('Registration successful');
      } else {
        // Handle registration failure, e.g., display an error message.
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="signup">
      <Card className="card-su">
        <Card.Body>
          <Card.Title className="login-t">
            <h1>Sign Up</h1>
          </Card.Title>
          <Form>
            <Form.Group className="set">
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="set">
              <Form.Control
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="set">
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="Sign-b">
              <Button text={["Sign Up"]} onClick={()=>handleSignup()} />
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Signup;
