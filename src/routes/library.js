import React from "react";
import { BookList } from "../components/BookList";

export default function Library({books}) {
    return (
        <BookList list={books} />
    )
}