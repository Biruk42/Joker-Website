import React from 'react';
import NavItem from './NavItem';
import styles from './Navigation.module.css';

const DesktopMenu = ({ navItems }) => (
  <div className="hidden md:block">
    <div className="flex items-center space-x-8">
      {navItems.map((item) => (
        <NavItem
          key={item.name}
          {...item}
          className="text-gray-300 hover:text-green-500 transition-all duration-300 py-2 relative group"
        />
      ))}
    </div>
  </div>
);

export default DesktopMenu;