import React, {useContext, useState} from 'react';
import {BookContext} from '../../contexts/BookContext';

const BookForm = () => {
  const {dispatch} = useContext(BookContext);
  const [bookInfo, setBookInfo] = useState({author: '', title: ''});

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'ADD_BOOK',
      book: {
        title: bookInfo.title,
        author: bookInfo.author,
      },
    });
    setBookInfo({author: '', title: ''});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={bookInfo.title}
        onChange={e => setBookInfo({...bookInfo, title: e.target.value})}
        required
      />
      <input
        type="text"
        placeholder="book author"
        value={bookInfo.author}
        onChange={e => setBookInfo({...bookInfo, author: e.target.value})}
        required
      />
      <input type="submit" value="add book" />
    </form>
  );
};

export default BookForm;
