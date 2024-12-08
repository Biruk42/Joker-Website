import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Videos', path: '/videos' },
    { name: 'Featured', path: '/featured' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <nav className={`
      fixed w-full z-50 transition-all duration-300
      ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'}
      ${styles.nav}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className={`text-green-500 font-bold text-xl tracking-wider ${styles.logo}`}
          >
            JOKER
          </Link>
          
          <DesktopMenu navItems={navItems} />

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-gray-300 hover:text-green-500 p-2 rounded-md ${styles.menuButton}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isOpen}
        navItems={navItems}
        onItemClick={() => setIsOpen(false)}
      />
    </nav>
  );
};

export default Navigation;