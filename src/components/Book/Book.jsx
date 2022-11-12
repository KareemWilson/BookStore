import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

function Book(props) {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  return (
    <>
      <div>{title}</div>
      <p>{`by ${author}`}</p>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
    </>
  );
}

export default Book;
Book.defaultProps = {
  id: null,
  title: null,
  author: null,
};

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};
