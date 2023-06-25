import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
export default function Drawer({ isOpen, setIsOpen }) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }>
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")}>
        <button onClick={() => setIsOpen(false)} className="w-24 p-4 text-green-400 font-bold text-lg">Back</button>

        <div className="mt-12 relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <Link to="/" onClick={() => { setIsOpen(false) }} className="p-5 text-2xl text-center">Home</Link>
          {/* <Link to="/team" onClick={() => { setIsOpen(false) }} className="p-5 text-2xl text-center">Our Team</Link> */}
          <Dropdown />
          <Link to="/events" onClick={() => { setIsOpen(false) }} className="p-5 text-2xl text-center">Events</Link>
          <Link to="/blogs" onClick={() => { setIsOpen(false) }} className="p-5 text-2xl text-center">Blogs</Link>
          <Link to="/contact" onClick={() => { setIsOpen(false) }} className="p-5 text-2xl text-center">Contact</Link>
        </div>
      </section>
    </main>
  );
}
