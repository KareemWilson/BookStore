import { createAsyncThunk } from '@reduxjs/toolkit';
import bookServices from '../../services/bookServices';

// Action_types

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

// Reducer

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case `${GET_BOOKS}/fulfilled`:
      return [...action.payload];
    case `${ADD_BOOK}/fulfilled`:
      return [...action.payload.payload];
    case `${REMOVE_BOOK}/fulfilled`:
      return [...state.filter((book) => book.id !== action.payload)];
    default:
      return state;
  }
}

// Action Creators

export const getBooks = createAsyncThunk(GET_BOOKS, async () => {
  try {
    const res = await bookServices.getBooks();
    const { data } = res;
    const values = [];
    Object.values(data).map((x) => values.push({ ...x[0] }));
    const indexes = [];
    Object
      .keys(data)
      .map((x, id) => indexes.push({
        id: x,
        title: values[id].title,
        author: values[id].author,
        category: values[id].category,
      }));
    return indexes;
  } catch (error) {
    return error;
  }
});

export const addBook = createAsyncThunk(ADD_BOOK, async (args, thunkAPI) => {
  try {
    await bookServices.addBook(args);
    return thunkAPI.dispatch(getBooks());
  } catch (error) {
    return error;
  }
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (args) => {
  try {
    await bookServices.deleteBook(args);
    return args;
  } catch (error) {
    return error;
  }
});
