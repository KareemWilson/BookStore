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
      <button type="button" onClick={() => dispatch(addBook(id, title, author))}>
        Add
      </button>
    </form>
  );
}

Form.defaultProps = {
  id: null,
};

Form.propTypes = {
  id: PropTypes.number,
};

export default Form;
