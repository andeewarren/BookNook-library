import React from "react";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { DeleteButton } from "./DeleteButton";

export function BookCard({ book, onDelete, onUpdate }) {
    const [readStatus, setReadStatus] = useState(book.readStatus);

    //readStatus only updating on refresh - add function to app.js?

    

    const handleUpdateReadStatus = (e) => {
        // const newStatus = e.target.value;
        console.log('onUpdate function:', onUpdate);
        setReadStatus(e.target.value);
        onUpdate(e);
      };

    return (
        
        <Card className='book-card'>
            <Card.Img variant='top' src={book.image} />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                    by {book.author}
                    {book.genre}
                    <select value={book.readStatus} onChange={handleUpdateReadStatus}>
                        <option value="Read">Read</option>
                        <option value="In Progress">In progress</option>
                        <option value="TBR">TBR</option>
                    </select>
                </Card.Text>
                <DeleteButton onClick={onDelete} />
            </Card.Body>
        </Card>
        )
}