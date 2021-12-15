import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'flex flex-col h-screen w-screen -mt-16 items-center bg-white'
          : 'hidden'}
      onClick={toggle}>

      <Link to='/' className='p-6 mt-16 text-3xl'>
        Home
      </Link>
      <Link to='/team' className='p-6 text-3xl'>
        Our Team
      </Link>
      <Link to='/events' className='p-6 text-3xl'>
        Events
      </Link>
      <Link to='/blogs' className='p-6 text-3xl'>
        Blogs
      </Link>
      <Link to='/contact' className='p-6 text-3xl'>
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
