import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => {
  return (
    <nav
      className='flex justify-between relative items-center h-16 bg-white text-black'
      role='navigation'>

      <Link to='/' className='pl-8'>
        <h3 className="font-bold">CSI DDU</h3>
      </Link>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 23 23'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M4 6h16M4 12h16M4 18h16' />
        </svg>
      </div>
      <div className='pr-8 md:block hidden'>
        <Link to='/' className='p-4  md:text-gray-500'>
          Home
        </Link>
        <Link to='/team' className='p-4 md:text-gray-500'>
          Our Team
        </Link>
        <Link to='/events' className='p-4 md:text-gray-500'>
          Events
        </Link>
        <Link to='/blogs' className='p-4 md:text-gray-500'>
          Blogs
        </Link>
        <Link to='/contact' className='p-4 md:text-gray-500'>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
