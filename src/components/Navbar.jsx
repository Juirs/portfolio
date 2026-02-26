import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();


  return (
    <nav className="bg-gray-900 border-b border-amber-900">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center" >
        <Link to="/" className="text-amber-200 font-bold text-xl">Ahmed Bestun</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-300 hover:text-amber-300 transition-colors">About</Link>
          <Link to="/projects" className="text-gray-300 hover:text-amber-300 transition-colors">Projects</Link>
          <Link to="/contact" className="text-gray-300 hover:text-amber-300 transition-colors">Contact</Link>
        </div>
        <button className="md:hidden text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;