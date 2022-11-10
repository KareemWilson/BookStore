import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book/Book';
import Form from '../components/Form/Form';

function Books() {
  const books = useSelector((state) => state.books);
  return (
    <>
      <h1>Books List</h1>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} id={book.id} />
      ))}
      <Form id={books.length + 1} />
    </>
  );
}

export default Books;
