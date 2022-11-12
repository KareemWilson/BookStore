import React from 'react';
import NavOption from '../NavOptions/NavOption';
import styles from './navBar.module.css';

const navItems = [
  {
    id: 1,
    name: 'Books',
    path: '/',
  },
  {
    id: 2,
    name: 'categories',
    path: '/categories',
  },
];

function NavBar() {
  return (
    <div className={styles.navContainer}>
      <h1>Bookstore CMS</h1>
      <NavOption navItems={navItems} />
      <img src="avatar.png" alt="avatar" className={styles.avatarImg} />
    </div>
  );
}

export default NavBar;
