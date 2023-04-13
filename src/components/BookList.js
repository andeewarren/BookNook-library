import React from "react";
import { useState, useEffect } from "react";
import { BookCard } from "./BookCard";

export function BookList(props) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://640a21d16ecd4f9e18c5cb25.mockapi.io/books')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setBooks(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const handleDelete = (id) => {
        fetch(`https://640a21d16ecd4f9e18c5cb25.mockapi.io/books/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            // remove the deleted book from the state
            setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
          })
          .catch((error) => console.error(error));
      };

    const sortedBooks = props.books.sort((a,b) => a.id - b.id);

    return (
        <>
            {sortedBooks.reverse().map((book) => (
                <BookCard key={book.id} book={book} onDelete={() => handleDelete(book.id)} />
            ))}
        </>
    )
}