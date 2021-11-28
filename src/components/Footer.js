import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faYoutube, faMediumM } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center bg-black">
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div className="flex flex-col">
          <div className="flex mt-24 mb-6 flex-col justify-between">   
              <div className="flex self-center lg:space-x-28 space-x-5">
                <a href="team" className="md:block cursor-pointer text-gray-600 hover:text-white uppercase">Our Team</a>
                <a href="events" className="md:block cursor-pointer text-gray-600 hover:text-white uppercase">Events</a>
                <a href="blog" className="md:block cursor-pointer text-gray-600 hover:text-white uppercase">Blogs</a>
                <a href="contact" className="md:block cursor-pointer text-gray-600 hover:text-white uppercase">Contact</a>     
              </div>
              <div className="mt-5 flex flex-row justify-evenly">
                <Link to={{ pathname: "https://instagram.com/csi_ddu"}} href="www.google.com">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link to={{ pathname: "https://github.com/csiddu"}} href="www.google.com">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link to={{ pathname: "https://medium.com/@csi_ddu"}} href="www.google.com">
                  <FontAwesomeIcon icon={faMediumM} />
                </Link>
                <Link to={{ pathname: "https://www.youtube.com/channel/UCmDmg-bp4Vd5tYIZsYnDDmA/featured"}} href="www.google.com">
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
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
