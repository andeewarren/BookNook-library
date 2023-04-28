import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Button, Row, Col, FloatingLabel } from 'react-bootstrap';

export function BookForm( { onAddBook } ) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState('');
    const [genre, setGenre] = useState('');
    const [readStatus, setReadStatus] = useState('TBR');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookData = { title, author, image, genre, readStatus };
        
        if (bookData.image == '') { //set default cover if no source is provided
            bookData.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnKgLLxViflUuJStAO9ur5Of0ctQaGM3LC42SqkqiGSpbqKYpNDxVpWHcEkKL9zz6RUTY&usqp=CAU";
        }

        onAddBook(bookData);
        setTitle('');
        setAuthor('');
        setImage('');
        setGenre('');
        setReadStatus('TBR'); //automatically reset everything
        navigate('/'); //automatically return to library page
    }
    

    return (
        <Form onSubmit={handleSubmit} className='add-book'>
            <Row>
                <h2>Enter book information here:</h2>
            </Row>
            <Row>
                <Col>
                    <FormGroup className="mb-3" controlId="formTitle">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Enter Title"
                        className="mb-3"
                    >
                        <Form.Control type='text' placeholder='Enter title' value={title} onChange={(event) => setTitle(event.target.value)} />
                        </FloatingLabel>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className="mb-3" controlId="formAuthor">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Enter Author"
                        className="mb-3"
                    >
                        <Form.Control type='text' placeholder='Enter author' value={author} onChange={(event) => setAuthor(event.target.value)} />
                    </FloatingLabel>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup className="mb-3" controlId="formImage">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Enter cover image URL"
                        className="mb-3"
                    >
                        <Form.Control type='url' placeholder='Enter cover image URL' value={image} onChange={(event) => setImage(event.target.value)} />
                    </FloatingLabel>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className="mb-3" controlId="formGenre">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Enter Genre"
                        className="mb-3"
                    >
                        <Form.Control type='text' placeholder='Enter genre' value={genre} onChange={(event) => setGenre(event.target.value)} />
                    </FloatingLabel>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className="mb-3" controlId="formReadStatus">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Read Status"
                        className="mb-3"
                    >
                        <Form.Select value={readStatus} onChange={(event) => setReadStatus(event.target.value)}> 
                            <option>Select read status</option>
                            <option value="TBR">TBR</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Read">Read</option>
                        </Form.Select>
                    </FloatingLabel>
                    </FormGroup>
                </Col>
            </Row>
            <Button type='submit' className='button' variant='dark'>Add Book</Button> 
        </Form>
    );
}