const initialState = [
  {
    id: 1,
    title: 'Eat, Pray, Love',
    author: 'Elizabeth Gilbert',
  },
  {
    id: 2,
    title: 'Clean Code',
    author: 'Robert Cecil Martin',
  },
];

// Action_types

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Reducer

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
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
