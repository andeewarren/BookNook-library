import React from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
// import { FaFacebook, FaGoogle } from 'react-icons/fa';

function LoginForm() {
    return (  
        <>
        {/* future goal: add FB/Google/Apple login a feature */ }
        <Form id='login-form'>
            <h2>Welcome to BookNook!</h2>
            <h4>Please sign in:</h4>
            {/* <Form.Label>Username/Email</Form.Label> 
            changed from form label to floating label */}
            <FloatingLabel
                controlId="floatingInput"
                label="Username/Email"
                className="mb-3"
            >
                <Form.Control type='username' placeholder='Username/email'></Form.Control>
            </FloatingLabel>
            
            <FloatingLabel
                controlId="floatingInput"
                label="Password"
                className="mb-3"
            >
                <Form.Control type='password' placeholder='Password'></Form.Control>
            </FloatingLabel>

            <Button className='button' id='sign-in' variant='dark'>Sign In</Button>

            <p>Or sign up <a role='link' aria-disabled='true'>here</a></p>
        </Form>
        
        </>
    );
}

export default LoginForm;