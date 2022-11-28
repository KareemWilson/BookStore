import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import styles from './book.module.css';

function Book(props) {
  const {
    title, author, id, category,
  } = props;
  const dispatch = useDispatch();
  return (
    <div className={styles.bookContainer}>
      <div className={styles.bookDetailsContainer}>
        <p className={styles.category}>{category}</p>
        <p className={styles.bookTitle}>{title}</p>
        <p className={styles.bookAuthor}>{author}</p>
        <ul className={styles.optionsButtonsList}>
          <li>
            <button type="button" className={styles.optionButton}>
              Comments
            </button>
          </li>
          <span className={styles.verticalBorder} />
          <li>
            <button
              type="button"
              className={styles.optionButton}
              onClick={() => dispatch(removeBook(id))}
            >
              Remove
            </button>
          </li>
          <span className={styles.verticalBorder} />
          <li>
            <button type="button" className={styles.optionButton}>
              Comments
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.completedStatusContainer}>
        <img src="circle.png" alt="comple" />
        <div className={styles.completedStatus}>
          <p className={styles.percentage}>50%</p>
          <p className={styles.completed}>Completed</p>
        </div>
      </div>
      <div className={styles.chapterProgressContainer}>
        <p className={styles.currentChapter}>Current Chapter</p>
        <p className={styles.chapterNum}>Chapter Num #</p>
        <button type="button" className={styles.updateProgressBtn}>
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
}

export default Book;
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
