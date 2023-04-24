import React from "react";
import { useState, useEffect } from "react";
import { BookCard } from './BookCard';
import { Grid } from "@mui/material";

export default function TBR({ books, onUpdate }) {
    //TODO: sort tbrList? by author? leave as is (aka order added)?
    
    const [tbrList, setTbrList] = useState([]);

  useEffect(() => {
    setTbrList(books.filter((obj) => obj.readStatus === 'TBR'));
  }, [books]);
    
  if (tbrList.length === 0){
    return <p>You do not currently have any books in your TBR pile</p>
  }

    return (
      <Grid container spacing={2} id='grid'>
            {tbrList.map((book) => (
              <Grid item xs='auto' key={book.id}>
                <BookCard key={book.id} book={book} onUpdate={(e) => onUpdate(book.id, e.target.value)} />
              </Grid>
            ))}
      </Grid>  
    )
}