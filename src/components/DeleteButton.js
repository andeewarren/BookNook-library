import React from "react";
import { Button } from "react-bootstrap";

export function DeleteButton({ onClick }) {

    return (
            <Button className='button' variant='dark' onClick={onClick}>Delete</Button>
        )
}
