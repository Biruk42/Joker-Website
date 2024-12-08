import React from 'react';
import { Transition } from '@headlessui/react';
import NavItem from './NavItem';
import styles from './Navigation.module.css';

const MobileMenu = ({ isOpen, navItems, onItemClick }) => (
  <Transition
    show={isOpen}
    enter="transition ease-out duration-200 transform"
    enterFrom="opacity-0 -translate-y-2"
    enterTo="opacity-100 translate-y-0"
    leave="transition ease-in duration-150 transform"
    leaveFrom="opacity-100 translate-y-0"
    leaveTo="opacity-0 -translate-y-2"
  >
    <div className="md:hidden absolute w-full top-full left-0 bg-black/95 backdrop-blur-lg">
      <div className="px-4 pt-2 pb-3 space-y-1 border-t border-gray-800">
        {navItems.map((item) => (
          <NavItem
            key={item.name}
            {...item}
            className="block w-full px-4 py-3 text-gray-300 hover:text-green-500 hover:bg-green-500/10 transition-all duration-300 rounded-md"
            onClick={onItemClick}
          />
        ))}
      </div>
    </div>
  </Transition>
);

export default MobileMenu;