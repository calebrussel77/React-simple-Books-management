import React, {useContext, useState} from 'react';
import {BookContext} from '../../contexts/BookContext';

const BookForm = () => {
  const {addBooks} = useContext(BookContext);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addBooks(title, author);
    setAuthor('');
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="book author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="add book" />
    </form>
  );
};

export default BookForm;
