import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BookList } from './components/BookList';
import { BookForm } from './components/BookForm';
import Library from './routes/library';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://640a21d16ecd4f9e18c5cb25.mockapi.io/books');
      if (!response.ok) {
        throw new Error('Failed to fetch books.');
      }
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddBook = async (bookData) => {
    try {
      const response = await fetch('https://640a21d16ecd4f9e18c5cb25.mockapi.io/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });

      if (!response.ok) {
        throw new Error('Failed to add book.');
      }

      const newBook = await response.json();
      setBooks((prevBooks) => [...prevBooks, newBook]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <BookForm onAddBook={handleAddBook}  />
      <BookList books={books} />
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Library books={books} />}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
