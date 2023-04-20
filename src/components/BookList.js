import React from "react";
// import { MDBRow } from "mdb-react-ui-kit";
import { BookCard } from "./BookCard";

export function BookList({ books, onDelete, onUpdate }) {

    const sortedBooks = books.sort((a,b) => a.id - b.id);

    return (
        <div className='book-list'>
            
            {sortedBooks.reverse().map((book) => (
                <BookCard key={book.id} book={book} onDelete={() => onDelete(book.id)} onUpdate={(e) => onUpdate(book.id, e.target.value)} />
            ))}
            
        </div>
    )
}