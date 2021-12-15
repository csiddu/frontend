import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faYoutube, faMediumM } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center bg-black">
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div className="flex flex-col">
          <div className="flex mt-24 mb-6 flex-col justify-between">   
              <div className="flex self-center lg:space-x-28 space-x-5">
              <Link to="/" className="md:block cursor-pointer text-gray-600 hover:text-white uppercase">Home</Link>
                <Link to="/team" className="md:block cursor-pointer text-gray-600 hover:text-white uppercase">Team</Link>
                <Link to="/events" className="md:block cursor-pointer text-gray-600 hover:text-white uppercase">Events</Link>
                <a href="https://medium.com/@csi_ddu" className="md:block cursor-pointer text-gray-600 hover:text-white uppercase">Blogs</a>
                <Link to="/contact" className="md:block cursor-pointer text-gray-600 hover:text-white uppercase">Contact</Link>     
              </div>
              <div className="mt-5 flex flex-row justify-evenly">
                <a href = "https://instagram.com/csi_ddu">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href = "https://github.com/csiddu">
                <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href = "https://medium.com/@csi_ddu">
                <FontAwesomeIcon icon={faMediumM} />
                </a>
                <a href = "https://www.youtube.com/channel/UCmDmg-bp4Vd5tYIZsYnDDmA/featured">
                <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
            <hr className="border-gray-600"/>
            <p className="w-full text-center my-12 text-gray-600">Copyright © 2021 CSI DDU Student Chapter</p>
          </div>
        </div>
    </div>
    );
};

export default Footer;
