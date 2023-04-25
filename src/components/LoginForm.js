import React from 'react';
import { Form, Button } from 'react-bootstrap';

function LoginForm() {
    return (  
        <>
        <h2>Welcome to BookNook!</h2>
        <h4>Please sign in:</h4>
        <Form id='login-form'>
            <Form.Label>Username/Email</Form.Label>
            <Form.Control type='username' placeholder='Username/Email'></Form.Control>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password'></Form.Control>
            <Button>Sign In</Button>
        </Form>
        <p>Or sign up <a href="*">here</a></p>
        </>
    );
}

export default LoginForm;