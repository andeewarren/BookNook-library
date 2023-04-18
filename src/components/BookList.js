import React from "react";
// import { useState, useEffect } from "react";
import { BookCard } from "./BookCard";

export function BookList({ books, onDelete, onUpdate }) {

    const sortedBooks = books.sort((a,b) => a.id - b.id);

    return (
        <>
            {sortedBooks.reverse().map((book) => (
                <BookCard key={book.id} book={book} onDelete={() => onDelete(book.id)} onUpdate={(e) => onUpdate(book.id, e.target.value)} />
            ))}
        </>
    )
}