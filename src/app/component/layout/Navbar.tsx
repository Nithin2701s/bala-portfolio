
"use client";
import { useState } from "react";
import '../../style.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed flex justify-between items-center h-20 w-screen top-0 left-0 px-6 bg-gradient-to-r from-black to-black text-white shadow-lg z-50">
      <a href="#Hero" className="text-lg font-bold hover:text-yellow-500 transition duration-300">
        Portfolio
      </a>
      <button className="hamburger md:hidden" onClick={toggleMenu}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <div className={`navbar md:flex space-x-8 text-lg ${isOpen ? 'block show' : 'hidden'} md:block`}>
        <a href="#about" className="px-4 py-2 hover:text-yellow-500 transition duration-300">
          About
        </a>
        <a href="#skills" className="px-4 py-2 hover:text-yellow-500 transition duration-300">
          Technical Skills
        </a>
        <a href="#projects" className="px-4 py-2 hover:text-yellow-500 transition duration-300">
          Projects
        </a>
        <a href="#contact" className="px-4 py-2 hover:text-yellow-500 transition duration-300">
          Contact Me
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
