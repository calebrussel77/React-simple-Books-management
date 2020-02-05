import React, {useReducer, createContext, useEffect} from 'react';
import bookReducers from '../reducers/bookReducers';

export const BookContext = createContext();

const BookContextProvider = props => {
  //useReducer takes 02 values: the reducer function & the initial state
  //the 3rd parameter is used to override the first default value and must be a callback function

  const [books, dispatch] = useReducer(bookReducers, [], () => {
    const dataLocalStorage = localStorage.getItem('books');
    return dataLocalStorage ? JSON.parse(dataLocalStorage) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    //dispatch allows us to do multiple action set in the bookReducers function
    <BookContext.Provider value={{books: books, dispatch}}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
