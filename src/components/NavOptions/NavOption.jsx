import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './navOptions.module.css';

function NavOption({ navItems }) {
  return (
    <ul className={styles.navOptions}>
      {navItems.map((item) => (
        <li key={item.id}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

NavOption.defaultProps = {
  navItems: [],
};
NavOption.propTypes = {
  navItems: PropTypes.arrayOf(Number, String),
};

export default NavOption;
