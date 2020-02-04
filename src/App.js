import React from 'react';
import './App.css';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/navbar/Navbar.component';
import BookList from './components/booklist/BookList.component';
import BookForm from './components/bookform/BookForm.component';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
