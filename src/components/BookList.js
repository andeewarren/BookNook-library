import React from "react";
import { Grid } from '@mui/material';
import { BookCard } from "./BookCard";

export function BookList({ books, onDelete, onUpdate }) {

    const sortedBooks = books.sort((a,b) => a.id - b.id);

    return (
        <Grid container spacing={2} id='grid'>
            
            {sortedBooks.reverse().map((book) => (
                <Grid item xs='auto' key={book.id}>
                    
                        <BookCard key={book.id} book={book} onDelete={() => onDelete(book.id)} onUpdate={(e) => onUpdate(book.id, e.target.value)} />
                    
                </Grid>
            ))}
            
        </Grid>
    )
}