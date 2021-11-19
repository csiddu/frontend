import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center h-44 bg-black">
      <p className="text-white text-sm">CSI DDU Student Chapter</p>
      <div className="flex">
        <hr className="mt-3 sm:w-80 lg:w-96"/> <hr className="mt-3 w-36"/> <hr className="mt-3 sm:w-80 lg:w-96"/>
      </div>
      <div className="text-sm mt-3 flex justify-start text-gray-400">
        <Link to={{ pathname: "/team" }}>
          Our Team &nbsp;&nbsp;
        </Link>|&nbsp;&nbsp; 
        <Link to={{ pathname: "/events" }}>
          Events &nbsp;&nbsp;
        </Link>|&nbsp;&nbsp; 
        <Link to={{ pathname: "/contact" }}>
          Contact Us
        </Link>
      </div>

    </div>
  );
};

export default Footer;
