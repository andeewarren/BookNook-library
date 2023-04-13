import React from "react";
import { BookList } from "../components/BookList";

export default function Library( {books, onDelete} ) {
    return (
        <BookList books={books} onDelete={onDelete} />
    )
}