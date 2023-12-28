import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

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
    <div className="bg-[#140E0E]">
      <div className={isHidden ? "hidden" : "bg-[#F2874F] text-white pt-1 pb-1 justify-around items-center hidden lg:flex"}>
        <div className="flex justify-center gap-4 items-center lg:ps-20">
          <p>Live Classes for Annual Exam Revision. Starts on 15 January 2024</p>
          <div>
            <button className="bg-[#140E0E] px-3 py-1 rounded-3xl hover:bg-[#FBCB1D] transition-all duration-500 hover:text-black">Check Now</button>
          </div>
          <IoCloseCircle onClick={handleClose} className="text-2xl hover:text-black cursor-pointer transition-all duration-500" />
        </div>
      </div>
      <div className="p-3 lg:px-4 w-full top-0 z-50 overflow-x-hidden transition-all duration-500">
        <div className="flex items-center justify-between lg:px-4">
          <div>
            <h1 className="text-white text-4xl">Link's <span className="text-[#FBCB1D]">Institute</span></h1>
          </div>
          <div className="mt-1 lg:flex items-center justify-center hidden pb-2 lg:pb-0 me-8 lg:me-0">
            <ul className="flex gap-5 justify-center text-lg items-center">
              <li className="text-white cursor-pointer hover:text-[#FBCB1D]">Home</li>
              <li className="text-white cursor-pointer hover:text-[#FBCB1D]">About</li>
              <li className="text-white cursor-pointer hover:text-[#FBCB1D]">Courses</li>
              <li className="text-white cursor-pointer hover:text-[#FBCB1D]">Teacher</li>
            </ul>
          </div>
          {/* mobile */}
          <div className="flex justify-center items-center me-1 lg:hidden">
            <div>
              {drop ? (
                <IoCloseCircle onClick={handleMenuToggle} className="text-white text-3xl me-2" />
              ) : (
                <FaBars onClick={handleMenuToggle} className="text-white text-3xl me-2" />
              )}
            </div>
          </div>
          <div className="lg:block hidden">
            <button className="bg-[#FBCB1D] px-4 py-2 rounded font-semibold hover:bg-white transition-all duration-500">Join With Us</button>
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
          <ul className="flex flex-col mt-3 items-center justify-center font-[Lato] gap-3 overflow-hidden ">
            <li onClick={handleMenuToggle} className="text-white mt-2 ms-4 cursor-pointer hover:text-[#FBCB1D]">
              Home
            </li>
            <li onClick={handleMenuToggle} className="text-white mt-2 ms-4 cursor-pointer hover:text-[#FBCB1D]">
              About
            </li>
            <li onClick={handleMenuToggle} className="text-white mt-2 ms-4 cursor-pointer hover:text-[#FBCB1D]">
              Courses
            </li>
            <li onClick={handleMenuToggle} className="text-white mt-2 ms-4 cursor-pointer hover:text-[#FBCB1D]">
              Teacher
            </li>
          </ul>
        </div>
        {/* laptop */}
      </div>
    </div>
  );
}

export default Navbar;
