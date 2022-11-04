import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { title, author } = props;
  return (
    <>
      <div>{title}</div>
      <p>{`by ${author}`}</p>
      <button type="button">Remove</button>
    </>
  );
}

export default Book;
Book.defaultProps = {
  title: null,
  author: null,
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
