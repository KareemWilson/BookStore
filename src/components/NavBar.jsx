import React from 'react';
import NavOption from './NavOption';

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
    <div>
      <h1>Bookstore CMS</h1>
      <NavOption navItems={navItems} />
    </div>
  );
}

export default NavBar;
