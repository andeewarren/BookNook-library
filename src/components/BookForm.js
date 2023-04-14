import React, { useState } from "react";
import { Form, FormGroup, Button, Row, Col } from 'react-bootstrap';

export function BookForm( props ) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState('');
    const [genre, setGenre] = useState('');
    const [readStatus, setReadStatus] = useState('TBR');

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookData = { title, author, image, genre, readStatus };
        
        if (bookData.image == '') {
            bookData.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnKgLLxViflUuJStAO9ur5Of0ctQaGM3LC42SqkqiGSpbqKYpNDxVpWHcEkKL9zz6RUTY&usqp=CAU";
        }

        props.onAddBook(bookData);
        setTitle('');
        setAuthor('');
        setImage('');
        setGenre('');
        setReadStatus('TBR');
        //TODO figure out how to automatically return to library page
    }
    

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <FormGroup className="mb-3" controlId="formTitle">
                        <Form.Label className='label'>Title</Form.Label>
                        <Form.Control type='text' placeholder='Enter title' value={title} onChange={(event) => setTitle(event.target.value)} />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className="mb-3" controlId="formAuthor">
                        <Form.Label className='label'>Author</Form.Label>
                        <Form.Control type='text' placeholder='Enter author' value={author} onChange={(event) => setAuthor(event.target.value)} />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup className="mb-3" controlId="formImage">
                        <Form.Label className="label">Cover Image</Form.Label>
                        <Form.Control type='url' placeholder='Enter cover image URL' value={image} onChange={(event) => setImage(event.target.value)} />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className="mb-3" controlId="formGenre">
                        <Form.Label className='label'>Genre</Form.Label>
                        <Form.Control type='text' placeholder='Enter genre' value={genre} onChange={(event) => setGenre(event.target.value)} />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className="mb-3" controlId="formReadStatus">
                        <Form.Label className='label'>Read Status</Form.Label>
                        <Form.Select value={readStatus} onChange={(event) => setReadStatus(event.target.value)}>
                            <option>Select read status</option>
                            <option value="TBR">TBR</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Read">Read</option>
                        </Form.Select>
                    </FormGroup>
                </Col>
            </Row>
            <Button type='submit' className='button'>Add Book</Button>
        </Form>
    );
}