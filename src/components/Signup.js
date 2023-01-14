import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Signup.css';
import './Cards.css';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add validation and submit logic here
    // for example, you can check if the email, password and confirmPassword match 
    // and if true, you can make an api call to submit the data
  }

  return (
    <div className="signup-form">

    <h1 className="text-style">Somewhere, something incredible is waiting to be discovered</h1>
    <br/> <br/> <br/>

      <div className="form-container">
        <h2>Sign Up</h2>
        <br/>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SignupForm;