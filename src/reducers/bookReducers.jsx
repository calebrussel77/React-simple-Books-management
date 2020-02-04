import React from 'react';

const bookReducers = (state, action) => {
  const generatedId = () => {
    return Math.random * 4;
  };

  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: generatedId,
        },
      ];

    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);

    default:
      return state;
  }
};
export default bookReducers;
