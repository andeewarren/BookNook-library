import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { DeleteButton } from "./DeleteButton";

export function BookCard({ book, onDelete }) {
    const [readStatus, setReadStatus] = useState(book.readStatus);


    const handleUpdateReadStatus = (newStatus) => {
        fetch(`https://640a21d16ecd4f9e18c5cb25.mockapi.io/books/${book.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ readStatus: newStatus })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setReadStatus(newStatus);
        })
        .catch(error => console.error(error));
    }

    return (
        
        <Card className='book-card'>
            <Card.Img variant='top' src={book.image} />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                    by {book.author}
                    {book.genre}
                    <select value={book.readStatus} onChange={(e) => handleUpdateReadStatus(book.id, e.target.value)}>
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