// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 p-4 text-white fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Mwenyeji</Link>
        <button
          className="block sm:hidden text-3xl"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <nav className="hidden sm:flex space-x-4">
            <Link to="/" className={`hover:underline ${window.location.pathname === '/' ? 'underline font-bold' : ''}`} onClick={toggleMenu}>Home</Link>
            <Link to="/directory" className={`hover:underline ${window.location.pathname === '/directory' ? 'underline font-bold' : ''}`} onClick={toggleMenu}>Directory</Link>
            <Link to="/events" className={`hover:underline ${window.location.pathname === '/events' ? 'underline font-bold' : ''}`} onClick={toggleMenu}>Events</Link>
            <Link to="/forums" className={`hover:underline ${window.location.pathname === '/forums' ? 'underline font-bold' : ''}`} onClick={toggleMenu}>Forums</Link>
            <Link to="/dashboard" className={`hover:underline ${window.location.pathname === '/dashboard' ? 'underline font-bold' : ''}`} onClick={toggleMenu}>Dashboard</Link>
        </nav>
      </div>
      {isOpen && (
        <div className={`fixed top-0 left-0 w-full h-full bg-blue-100 flex flex-col items-center justify-center sm:hidden transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <button
            className="absolute top-4 right-4 text-3xl"
            onClick={toggleMenu}
          >
            ✕
          </button>
          <nav className="space-y-4 text-2xl flex flex-col text-blue-800">
            <Link to="/" className={`hover:underline ${window.location.pathname === '/' ? 'underline font-bold' : ''}`} onClick={toggleMenu}>Home</Link>
            <Link to="/directory" className={`hover:underline ${window.location.pathname === '/directory' ? 'underline font-bold' : ''}`} onClick={toggleMenu}>Directory</Link>
            <Link to="/events" className={`hover:underline ${window.location.pathname === '/events' ? 'underline font-bold' : ''}`} onClick={toggleMenu}>Events</Link>
            <Link to="/forums" className={`hover:underline ${window.location.pathname === '/forums' ? 'underline font-bold' : ''}`} onClick={toggleMenu}>Forums</Link>
            <Link to="/dashboard" className={`hover:underline ${window.location.pathname === '/dashboard' ? 'underline font-bold' : ''}`} onClick={toggleMenu}>Dashboard</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
