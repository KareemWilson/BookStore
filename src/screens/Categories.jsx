import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  return (
    <>
      <div>Categories</div>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
    </>
  );
}

export default Categories;
