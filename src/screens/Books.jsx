import React from 'react';
import Book from '../components/Book/Book';
import Form from '../components/Form/Form';

function Books() {
  return (
    <>
      <h1>Books List</h1>
      <Book title="good title" author="good author" />
      <Form />
    </>
  );
}

export default Books;
