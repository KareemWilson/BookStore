/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <>
      <div>{title}</div>
      <p>{`by ${author}`}</p>
    </>
  );
}

// Book.defaultProps = {
//   title: '',
//   author: '',
// };

// Book.prototype = {
//   title: PropTypes.string,
//   author: PropTypes.string,
// };

export default Book;
