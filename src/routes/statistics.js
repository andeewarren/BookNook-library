import React from "react";
import ListLength from "../components/ListLength";
import TBR from "../components/tbrList";

export default function Statistics({ books }) {
    return (
        <>
            <ListLength books={books} />
            <TBR books={books} />
        </>
    )
}