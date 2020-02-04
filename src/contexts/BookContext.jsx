import React, {useState, createContext} from 'react';

export const BookContext = createContext ();

const BookContextProvider = props => {
  const [books, setBooks] = useState ([
    {title: 'the name of kindle', author: 'patrick cluster', id: 1},
    {title: 'the amazing stuff', author: 'sergine vane', id: 2},
  ]);

  const generateId = () => {
    return Math.random * 4;
  };

  const addBooks = (title, author) => {
    setBooks ([...books, {title, author, id: generateId}]);
  };
  const removeBook = id => {
    setBooks (books.filter (book => book.id !== id));
  };

  return (
    <BookContext.Provider
      value={{books: books, removeBook: removeBook, addBooks: addBooks}}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
