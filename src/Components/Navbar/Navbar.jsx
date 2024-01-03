import { useState } from "react";
import { FaBars } from "react-icons/fa";  

import { IoCloseCircle } from "react-icons/io5";


function Navbar() {
  const [drop, setDrop] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  function handleclick(){
      setDrop(!drop)
    }
    function handledrop() {
      setDrop(!drop);
    }
  const handleClose = () => {
    setIsHidden(true);
  };

  return (
    <div className="bg-[#142F58]">
    <div className={isHidden?" hidden":"bg-white text-[#142F58] pt-1 pb-1  justify-around items-center hidden lg:flex"}>
    <div className="flex justify-center gap-4 items-center ">
    <p> Live Classes for Annual Exam Revision. Starts on 15 January 2024</p>
    <div>
      <button className="bg-[#B31312] px-3 py-1 rounded-3xl hover:bg-blue-300 transition-all duration-500 text-white hover:text-white">Check Now</button>
    </div>
    </div>
    <IoCloseCircle onClick={handleClose}  className="text-2xl hover:text-black cursor-pointer transition-all duration-500"/>
      </div>
    <div className="p-3 lg:px-4 w-full top-0 z-50 overflow-x-hidden  transition-all duration-500">
            <div className="flex items-center justify-between lg:px-4 ">

         
              
             <div>
          
           <h1  className="text-white text-4xl font-[Roboto] ">Link's <span className="text-[#9BABB8]">Institute</span></h1>
               </div>
               <div className="mt-1 lg:flex items-center justify-center hidden pb-2 lg:pb-0 me-8 lg:me-0">
           
           <ul className="flex gap-5 justify-center text-lg items-center ">
           <li className="text-white cursor-pointer hover:text-blue-300">
           Home
             </li>
             <li className="text-white cursor-pointer hover:text-blue-300">
              About
             </li>
             <li className="text-white cursor-pointer hover:text-blue-300">
              Courses
             </li>
             <li className="text-white cursor-pointer hover:text-blue-300">
                Teacher
             </li> 
           </ul>
      
         </div>
              {/* mobile */}
              <div className=" flex justify-center items-center me-1 lg:hidden">
               
                <div>
                  <FaBars
                    onClick={handledrop}
                    className="text-white text-3xl me-2"
                  />
                </div>
              </div>
        

        <div className="lg:block hidden">
       
          <button className="bg-[#ff9f46] px-4 py-2 rounded  font-semibold hover:bg-white transition-all duration-500 " >Work With us</button>
       
        </div>


            </div>
          
            {/* mobile nav */}
            <div
              className={
                drop
                  ? "h-[240px]  transition-all duration-700 w-[100%] lg:hidden "
                  : "h-0 overflow-hidden transition-all duration-700 w-[100%]  opacity-0 lg:hidden"
              }
            >
               
              <ul className="flex flex-col ms-2 justify-center font-[Lato] gap-3 overflow-hidden ">
              <li onClick={handleclick} className="text-white mt-2 ms-4 cursor-pointer hover:text-blue-300">
               Home
                </li>
               
                <li onClick={handleclick} className="text-white mt-2 ms-4 cursor-pointer hover:text-blue-300">
                About
                </li>
                <li onClick={handleclick} className="text-white mt-2 ms-4 cursor-pointer hover:text-blue-300">
                  Courses
                </li>
                <li onClick={handleclick} className="text-white mt-2 ms-4 cursor-pointer hover:text-blue-300">
                  Teacher
                </li>
                     
              </ul>
         
            </div>
            {/* laptop  */}
            
          </div>
        
    </div>
  );
}

export default Navbar;