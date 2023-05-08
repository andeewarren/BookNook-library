import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { BookList } from './components/BookList';
// import { BookForm } from './components/BookForm';
import Library from './routes/library';
import AddBook from './routes/addBook';
import Statistics from './routes/statistics';
import Login from './routes/login';
import Logout from './routes/logout';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        'https://640a21d16ecd4f9e18c5cb25.mockapi.io/books'
        );
      if (!response.ok) {
        throw new Error('Failed to fetch books.');
      }
      const data = await response.json();
      console.log('data:', data);
      return setBooks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddBook = async (bookData) => {
    console.log('add works!')
    console.log('bookData:', bookData)

    try {
      const response = await fetch(
        'https://640a21d16ecd4f9e18c5cb25.mockapi.io/books', 
        {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to add book.');
      }
      fetchBooks(); //re renders list after add
      console.log("New book added successfuly");
    } catch (error) {
      console.error(error);
    }
  };


  const handleDelete = async (id) => {
    console.log('delete works!')
    try {
      await fetch(`https://640a21d16ecd4f9e18c5cb25.mockapi.io/books/${id}`, {
        method: "DELETE",
      });
      console.log('Book deleted successfully.');
    } catch (error) {
      console.error(error);
    }

    await fetchBooks(); //re renders without having to refresh
  };

    const handleUpdate = async (id, newStatus) => {
    try {
      const response = await fetch(`https://640a21d16ecd4f9e18c5cb25.mockapi.io/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ readStatus: newStatus }),
    }
    );

    if (!response.ok) {
      throw new Error('Failed to update book.');
    }

    fetchBooks(); //re renders
    console.log('Book updated successfully.');
  } catch (error) {
    console.error(error)
  }
  };


  return (
    <BrowserRouter>
    
    <div>
      <div className='bg-image'></div>
      <Header />
      {/* <BookForm onAddBook={handleAddBook}  /> */}
      {/* <BookList books={books} /> */}
        <Routes>
          <Route path='/' 
          element={<Library books={books} onDelete={handleDelete} fetchBooks={fetchBooks} onUpdate={handleUpdate} />} //pass down books, delete, fetch and update
          ></Route>
          <Route path='/add' 
          element={<AddBook onAddBook={handleAddBook} fetchBooks={fetchBooks} />} //pass down add and fetch
          ></Route>
          <Route path='/statistics' 
          element={<Statistics books={books} />}></Route>
          <Route path='/login'
          element={<Login />}></Route>
          <Route path='/logout'
          element={<Logout />}></Route>
        </Routes>
      
      {/* <Footer /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
