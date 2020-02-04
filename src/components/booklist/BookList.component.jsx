import React, {useContext} from 'react';
import {BookContext} from '../../contexts/BookContext';
import BookDetails from '../bookdetails/BookDetails.component';

const BookList = () => {
  const {books} = useContext(BookContext);

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Books to read now...</div>
  );
};

export default BookList;
