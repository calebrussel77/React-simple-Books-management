import React, {useReducer, createContext} from 'react';
import bookReducers from '../reducers/bookReducers';

export const BookContext = createContext();

const BookContextProvider = props => {
  //useReducer takes 02 values: the reducer function & the initial state

  const [books, dispatch] = useReducer(bookReducers, []);

  return (
    //dispatch allows us to do multiple action set in the bookReducers functon
    <BookContext.Provider value={{books: books, dispatch}}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
