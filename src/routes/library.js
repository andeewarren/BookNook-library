import React from "react";
// import { useState, useEffect } from "react";
import { BookList } from "../components/BookList";

export default function Library( { onDelete, onUpdate, books} ) {
 
    return (
        console.log('books in library component:', books),
        <BookList id="library" 
        books={books} 
        onDelete={onDelete}
        onUpdate={onUpdate} 
        //onUpdate={handleUpdateReadStatus} 
        />
    )
}