import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ name, path, className, onClick }) => (
  <Link
    to={path}
    className={className}
    onClick={onClick}
  >
    {name}
  </Link>
);

export default NavItem;