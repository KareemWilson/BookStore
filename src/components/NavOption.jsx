import React from 'react';
import PropTypes, { number, string } from 'prop-types';

function NavOption({ navItems }) {
  return (
    <ul>
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
