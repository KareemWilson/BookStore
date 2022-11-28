import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from '../components/Book/Book';
import Form from '../components/Form/Form';
import { getBooks } from '../redux/books/books';
import styles from './books.module.css';

function Books() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const books = useSelector((state) => state.books);
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {books.map((book) => (
          <li key={uuidv4()}>
            <Book
              title={book.title}
              author={book.author}
              category={book.category}
              id={book.id}
            />
          </li>
        ))}
      </ul>
      <Form id={uuidv4()} />
    </div>
  );
}

export default Books;
