import React from "react";
import { BookForm } from "../components/BookForm";

export default function AddBook({ onAddBook }) {
    return (
        <BookForm onAddBook={onAddBook}/>
    )
}