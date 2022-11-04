/* eslint-disable react/prop-types */
import React from 'react';

function Book({ title, author }) {
  return (
    <>
      <div>{title}</div>
      <p>{`by ${author}`}</p>
      <button type="button">Remove</button>
    </>
  );
}

export default Book;
