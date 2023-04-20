import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { BookList } from './components/BookList';
// import { BookForm } from './components/BookForm';
import Library from './routes/library';
import AddBook from './routes/addBook';
import Statistics from './routes/statistics';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, [books]);

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
      console.log("New book added successfuly");
    } catch (error) {
      console.error(error);
    }
  };

  // const handleDelete = async (id) => {
  //   try {
  //     const response = await fetch(`https://640a21d16ecd4f9e18c5cb25.mockapi.io/books/${id}`, {
  //       method: 'DELETE',
  //     })
  //     const data = await response.json;
  //     console.log(data, response);
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const handleDelete = (id) => {
    fetch(`https://640a21d16ecd4f9e18c5cb25.mockapi.io/books/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        // remove the deleted book from the state
        
        
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
        
        console.log("Book deleted successfully.")
      })
      .catch((error) => console.error(error));
      fetchBooks();
  };

  return (
    // console.log('check render'),
    <BrowserRouter>
    <div>
      
      
      <Header />
      {/* <BookForm onAddBook={handleAddBook}  /> */}
      {/* <BookList books={books} /> */}
        <Routes>
          <Route path='/' element={<Library books={books} onDelete={handleDelete} />}></Route>
          <Route path='/add' element={<AddBook onAddBook={handleAddBook}/>}></Route>
          <Route path='/statistics' element={<Statistics books={books} />}></Route>
        </Routes>
      
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
