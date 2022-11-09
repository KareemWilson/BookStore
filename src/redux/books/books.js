const initialState = [];

// Action_types

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Reducer

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {};
    case REMOVE_BOOK:
      return {};
    default:
      return state;
  }
}

// Action Creators

export function addBook(id, title, author) {
  return {
    type: ADD_BOOK,
    id,
    title,
    author,
  };
}

export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    id,
  };
}
