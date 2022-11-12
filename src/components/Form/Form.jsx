import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../../redux/books/books';
import styles from './form.module.css';

function Form({ id }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  return (
    <div className={styles.formSection}>
      <p className={styles.sectionTitle}>Add New Book</p>
      <form className={styles.formContainer}>
        <input
          className={styles.inputField}
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className={styles.inputField}
          type="text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          className={styles.inputField}
          type="text"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <button
          className={styles.addBtn}
          type="button"
          onClick={() => dispatch(addBook({
            item_id: id,
            title,
            author,
            category,
          }))}
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Form;
