import React from "react";
import { useState, useEffect } from "react";
import { BookCard } from './BookCard';

export default function TBR({ books, onUpdate }) {
    //TODO filter for ReadStatus: TBR, map onto BookCard
    //add fetch? needs to update when readStatus is changed
    
    const [tbrList, setTbrList] = useState([]);
//   const [updatedBooks, setUpdatedBooks] = useState([]);

  useEffect(() => {
    setTbrList(books.filter((obj) => obj.readStatus === 'TBR'));
  }, [books]);

//   const handleUpdateReadStatus = (bookId, newReadStatus) => {
//     const updatedBook = books.find((book) => book.id === bookId);
//     updatedBook.readStatus = newReadStatus;
//     setUpdatedBooks([...updatedBooks, updatedBook]);
//   };
    
    return (
        <div>
            {tbrList.map((book) => (
                <BookCard key={book.id} book={book} onUpdate={(e) => onUpdate(book.id, e.target.value)} />
            ))}
        </div>
    )
}