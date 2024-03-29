import React, { useState } from 'react';
import { IoCloseCircle } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  const [drop, setDrop] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  function handleMenuToggle() {
    setDrop(!drop);
  }

  function handleClose() {
    setIsHidden(true);
  }

  return (
    <div className="">
      <div className={isHidden ? "hidden" : "bg-white text-black  pb-1 justify-around items-center hidden lg:flex"}>
        <div className="flex justify-center gap-4 items-center lg:ps-20">
          <div className="w-10 h-10 flex-none rounded-lg bg-[#262626] flex items-center justify-center">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 24 24" strokeWidth={1.5} stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46" fill='white' />
            </svg>
          </div>
          <p className='py-1 text-black fw-lighter '>Live Classes for Annual Exam Revision. Starts on 15 January 2024</p>
          <div>
            <button className="bg-red-500 text-black px-3 py-1 rounded-3xl hover:bg-[#E8E9EB] transition-all duration-500 hover:text-black">Check Now</button>
          </div>
          <IoCloseCircle onClick={handleClose} className="text-2xl hover:text-black cursor-pointer transition-all duration-500" />
        </div>
      </div>

      <div className="p-3 lg:px-4 w-full top-0 z-50 overflow-x-hidden transition-all duration-500">
        <div className="flex items-center justify-between lg:px-4">
          <div>
            <h1 className="text-black text-4xl font-serif">Link's <span className="text-[#9BABB8]">Institute</span></h1>
          </div>
          <div className="mt-1 lg:flex items-center justify-center hidden pb-2 lg:pb-0 me-8 lg:me-0">
            <ul className="flex gap-5 justify-center text-lg items-center ">
              <li>
                <Link to="/" className="text-blackcursor-pointer hover:text-[#E8E9EB]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blackcursor-pointer hover:text-[#E8E9EB]">
                  About
                </Link>
              </li>
              {/* <li>
                <Link to="/courses" className="text-blackcursor-pointer hover:text-[#E8E9EB]">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/teacher" className="text-blackcursor-pointer hover:text-[#E8E9EB]">
                  Teacher
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="text-blackcursor-pointer hover:text-[#E8E9EB]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* mobile */}
          <div className="flex justify-center items-center me-1 lg:hidden">
            <div>
              {drop ? (
                <IoCloseCircle onClick={handleMenuToggle} className="text-blacktext-3xl me-2" />
              ) : (
                <FaBars onClick={handleMenuToggle} className="text-blacktext-3xl me-2" />
              )}
            </div>
          </div>
          <div className="lg:block hidden">
            <button className="bg-[#E7A93C] px-4 py-2 rounded-lg text-white  hover:scale-[0.9] hover:bg-[#f9bf5b]  font-semibold  transition-all duration-500 " >Work With us</button>
          </div>
        </div>
        {/* mobile nav */}
        <div
          className={
            drop
              ? "h-[180px] transition-all duration-700 w-[100%] lg:hidden"
              : "h-0 overflow-hidden transition-all duration-700 w-[100%] opacity-0 lg:hidden"
          }
        >
          <ul className="flex flex-col mt-3 items-center justify-center font-serif gap-3 overflow-hidden ">
            <li onClick={handleMenuToggle} className="text-blackmt-2 ms-4 cursor-pointer hover:text-[#E8E9EB]">
              <Link to="/">Home</Link>
            </li>
            <li onClick={handleMenuToggle} className="text-blackmt-2 ms-4 cursor-pointer hover:text-[#E8E9EB]">
              <Link to="/about">About</Link>
            </li>
            {/* <li onClick={handleMenuToggle} className="text-blackmt-2 ms-4 cursor-pointer hover:text-[#E8E9EB]">
              <Link to="/courses">Courses</Link>
            </li>
            <li onClick={handleMenuToggle} className="text-blackmt-2 ms-4 cursor-pointer hover:text-[#E8E9EB]">
              <Link to="/teacher">Teacher</Link>
            </li> */}
            <li onClick={handleMenuToggle} className="text-blackmt-2 ms-4 cursor-pointer hover:text-[#E8E9EB]">
                <Link to="/contact" >
                  Contact
                </Link>
              </li>
          </ul>
        </div>
        {/* laptop */}
      </div>
    </div>
  );
}

export default Navbar;
