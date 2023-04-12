import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BookList } from './components/BookList';
import Library from './routes/library';
import './App.css';

function App() {
  return (
    <div>
      <BookList />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Library />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
