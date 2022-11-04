import React from 'react';
import PropTypes, { number, string } from 'prop-types';
import styles from './navOptions.module.css';

function NavOption({ navItems }) {
  return (
    <ul className={styles.navOptions}>
      {navItems.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

NavOption.defaultProps = {
  navItems: [],
};
NavOption.propTypes = {
  navItems: PropTypes.arrayOf(string, number),
};

export default NavOption;
