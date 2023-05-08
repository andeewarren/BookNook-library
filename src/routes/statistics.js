import React from "react";
import { useState, useEffect } from "react";
// import ListLength from "../components/ListLength";
import TBR from "../components/tbrList";

export default function Statistics() {
    const [books, setBooks] = useState([]);
    
    const fetchBooks = async () => {
        try {
          const response = await fetch('https://640a21d16ecd4f9e18c5cb25.mockapi.io/books');
          if (!response.ok) {
            throw new Error('Failed to fetch books.');
          }
          const data = await response.json();
          setBooks(data);
        } catch (error) {
          console.error(error);
        }
      };
        
    useEffect(() => {
        fetchBooks();
    }, []);

    const handleUpdateReadStatus = (bookId, newStatus) => { //update book read status just like home page
        fetch(`https://640a21d16ecd4f9e18c5cb25.mockapi.io/books/${bookId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ readStatus: newStatus })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const updatedBooks = books.map((book) =>
              book.id === bookId ? { ...book, readStatus: newStatus } : book
            );
            setBooks(updatedBooks);
        })
        .catch(error => console.error(error));
    }
    
    return (
        <>
            {/* <ListLength books={books} /> swapped out library length for tbr pile length */}
            <TBR books={books} onUpdate={handleUpdateReadStatus} />
        </>
    )
}