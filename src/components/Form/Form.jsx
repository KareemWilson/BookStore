import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../../redux/books/books';

function Form({ id }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  return (
    <form>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button
        type="button"
        onClick={() => dispatch(addBook(
          {
            item_id: id, title, author, category: 'not specified',
          },
        ))}
      >
        Add
      </button>
    </form>
  );
}

Form.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Form;
