import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import styles from './book.module.css';

function Book(props) {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  return (
    <div className={styles.bookContainer}>
      <div className={styles.bookDetailsContainer}>
        <p className={styles.category}>Action</p>
        <p className={styles.bookTitle}>{title}</p>
        <p className={styles.bookAuthor}>{author}</p>
        <ul className={styles.optionsButtonsList}>
          <li>
            <button type="button" className={styles.optionButton}>Comments</button>
          </li>
          <li>
            <button type="button" className={styles.optionButton} onClick={() => dispatch(removeBook(id))}>Remove</button>
          </li>
          <li>
            <button type="button" className={styles.optionButton}>Comments</button>
          </li>
        </ul>
      </div>
      <div className={styles.completedStatusContainer}>
        <img src="" alt="comple" />
        <div className={styles.completedStatus}>
          <p>50%</p>
          <p>Completed</p>
        </div>
      </div>
      <div className={styles.chapterProgressContainer}>
        <p>Current Chapter</p>
        <p>Chapter Num #</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

export default Book;
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
