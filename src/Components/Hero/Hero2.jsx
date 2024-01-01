import React from 'react';
import img from '../../assets/3.jpg';

function Hero2() {
  return (
    <>
      <div className='bg-[#1b2945] lg:pt-10 pb-10 grid grid-cols-1 md:grid-cols-2 place-items-center relative'>
        {/* <div className='w-full lg:w-[800px] relative'>
          <div className="absolute top-0 w-72 h-72 bg-[#4F6F52] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div> */}
        <div className='hidden lg:flex'>
          <img src={img} alt="" className='object-cover lg:rounded-l-[50px] pt-4' />
        </div>
        <div className='flex flex-col gap-4 pl-3 md:pt-0'>

          <h1 className='text-white text-xl  font-recursive lg:ps-3 lg:pe-3'>
            Start your journey with Link’s Institute by exploring our diverse
            range of tutoring programs.           <span className='text-[#FBCB1D] lg:pe-3'> Browse through subjects, grade levels and available tutors to find
              the perfect fit for your academic needs.✨  </span> 
          </h1>
          <div className='flex flex-col md:flex-row px-4 pb-4 gap-5 md:ms-4 mt-4'>
            <button className='px-6 py-3 bg-[#F2874F] border-2 border-[#f2874f] hover:bg-transparent hover:text-white font-semibold'>
              Book a Lesson
            </button>
            <button className='px-6 py-3 border-[#F2874F] hover:bg-[#F2874F] border-2 text-white font-semibold hover:text-black'>
              Pick a Package
            </button>
          </div>
        </div>

      </div>
      
    </>
  );
}

export default Hero2;
