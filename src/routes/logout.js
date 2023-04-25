import React from "react";
import { Alert } from "react-bootstrap";
import LoginForm from "../components/LoginForm";

export default function Logout() {
    return (
        <div>
        <Alert variant='success'>You have successfully signed out. See you again soon!</Alert>
        <LoginForm />
        </div>
    )
}