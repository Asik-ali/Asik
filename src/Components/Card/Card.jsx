import React from 'react';

const Card = () => {
  

  return (
    <div  className="text-white bg-[#FFEEE5]">
      <h1 className='text-center text-black font-semibold pt-5 text-lg md:text-xl lg:text-2xl xl:text-3xl'>
        Know Why Should You Choose Only Us?
      </h1>

      <div className='flex flex-col sm:flex-row  justify-evenly pt-[80px] pb-10'>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <img src="https://vnaya.com/assets/images/tut1.png" alt="" className='w-16 h-16' />
          <h2 className='text-center text-base md:text-lg lg:text-xl xl:text-2xl text-[#DA6701]'>
          Flexibility to Schedule Sessions
          </h2>
          <p className='text-center text-sm sm:text-base text-black'>
          24*6 availability. Choose Anytime, Any day!

          </p>
        </div>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <img src="https://vnaya.com/assets/images/tut2.png" alt="" className='w-16 h-16' />
          <h2 className='text-center text-base md:text-lg lg:text-xl xl:text-2xl text-[#DA6701]'>Qualified Tutors</h2>
          <p className='text-center text-sm sm:text-base text-black'>
          Education through personalized guidance and experience
          </p>
        </div>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <img src="https://vnaya.com/assets/images/tut3.png" alt="" className='w-16 h-16' />
          <h2 className='text-center text-base md:text-lg lg:text-xl xl:text-2xl text-[#DA6701]'>
          Cutting-Edge Technology
          </h2>
          <p className='text-center text-sm sm:text-base text-black'>
            Highly User Friendly & Intuitive White Board with Media Sharing!
          </p>
        </div>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <img src="https://vnaya.com/assets/images/tut4.png" alt="" className='w-16 h-16' />
          <h2 className='text-center text-base md:text-lg lg:text-xl xl:text-2xl text-[#DA6701]'>Personalized Learning</h2>
          <p className='text-center text-sm sm:text-base text-black'>Meet individual
learning styles and needs</p>
        </div>
      </div>
    </div>
  );
};

export default Card;