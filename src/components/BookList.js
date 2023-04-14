import React from "react";
// import { useState, useEffect } from "react";
import { BookCard } from "./BookCard";

export function BookList(props) {

    const sortedBooks = props.books.sort((a,b) => a.id - b.id);

    return (
        <>
            {sortedBooks.reverse().map((book) => (
                <BookCard key={book.id} book={book} onDelete={() => props.onDelete(book.id)} />
            ))}
        </>
    )
}