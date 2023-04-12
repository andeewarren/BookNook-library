import React from "react";
import { Button } from "react-bootstrap";

export function DeleteButton({ onClick }) {

    return (
            <Button onClick={onClick}>Delete</Button>
        )
}
