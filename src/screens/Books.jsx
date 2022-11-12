import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from '../components/Book/Book';
import Form from '../components/Form/Form';
import { getBooks } from '../redux/books/books';

function Books() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const books = useSelector((state) => state.books);
  return (
    <>
      <h1>Books List</h1>
      <ul>
        {books.map((book) => (
          <li key={uuidv4()}>
            <Book
              title={book.title}
              author={book.author}
              id={book.id}
            />
            <p>{book.id ? book.id : 'no id'}</p>
          </li>
        ))}
      </ul>
      <Form id={uuidv4()} />
    </>
  );
}

export default Books;
