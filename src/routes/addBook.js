import React from "react";
import { BookForm } from "../components/BookForm";

export default function AddBook({ handleAddBook }) {
    return (
        <BookForm onAddBook={handleAddBook}/>
    )
}