import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/react.svg'
const Navbar = () => {
  return (
    <>

    <nav className="flex justify-center items-center gap-8 py-6 nav-color backdrop-blur-sm sticky top-0 z-50">
   <Link 
        to="/features" 
        className="text-black-300 hover:text-sky-300 transition-colors duration-200"
      >
        Home
      </Link>
      <Link 
        to="/features" 
        className="text-black-300 hover:text-sky-300 transition-colors duration-200"
      >
      Latest News
      </Link>
      <Link 
        to="/pricing" 
        className="text-black-300 hover:text-sky-300 transition-colors duration-200"
      >
        Promote 
      </Link>
      <Link 
        to="/contact" 
        className="text-black-300 hover:text-sky-300 transition-colors duration-200"
      >
        Contact
      </Link>
      {/*  */}
    </nav>
    </>
  );
};

export default Navbar;