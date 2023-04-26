import React from "react";
import { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
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
        
        <Card className='book-card' style={{ width: '18rem' }}>
            <Card.Img id='card-image' variant='top' src={book.image} />
            <Card.Body>
                <Card.Title id='title'><h2>{book.title}</h2></Card.Title>
                <Card.Body id='card-body'>
                    <Row id='author'>
                        {/* <Col id='author'> */}
                            <h5>{book.author}</h5>
                        {/* </Col> */}
                        <Row id='genre'>
                        {/* <Col id='genre'> */}
                            <p>{book.genre}</p>
                        {/* </Col> */}
                        </Row>
                        <Row id='readStatus'>
                        {/* <Col id='readStatus'> */}
                            <select value={book.readStatus} onChange={handleUpdateReadStatus}>
                                <option value="Read">Read</option>
                                <option value="In Progress">In progress</option>
                                <option value="TBR">TBR</option>
                            </select>
                        {/* </Col> */}
                        </Row>
                    </Row>
                </Card.Body>
                <DeleteButton id='delete' onClick={onDelete} />
            </Card.Body>
        </Card>
        )
}