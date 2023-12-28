import React from 'react';
import img from '../../assets/3.jpg';

function Hero2() {
  return (
    <>
      <div className='bg-[#140E0E] lg:pt-10 pb-10 grid grid-cols-1 md:grid-cols-2 place-items-center relative'>
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
      <section className='lg:py-5'>
        <div className='max-w-screen-xl mx-auto md:px-8'>
          <div className='items-center gap-x-12 sm:px-4 md:px-0 lg:flex'>
            <div className='flex-1 sm:hidden lg:block'>
              <img src={img} className='md:max-w-lg sm:rounded-lg' alt='' />
            </div>
            <div className='max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl'>
              <h3 className='text-indigo-600 font-semibold'>Professional services</h3>
              <p className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                Speak with an Advisor              </p>
              <p className='mt-3 text-gray-600'>
                If you prefer a one-on-one conversation, our academic advisors are
                available to assist you. Schedule a call or video meeting to discuss your educational goals,
                tutoring options and any specific requirements you may have.
              </p>
              <a
                href='javascript:void(0)'
                className='inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium'
              >
                Learn more
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
                  <path
                    fillRule='evenodd'
                    d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero2;
