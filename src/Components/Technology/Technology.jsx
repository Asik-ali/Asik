import React from 'react'
import img from "../../assets/img1.png"
function Technology() {
  return (
    <div className=' bg-[#F8F3EF] flex flex-col pb-10 lg:flex-row  justify-evenly items-center'>
      <div>
        <img src={img} lt="" />
      </div>
      <div className='flex flex-col gap-5 lg:mt-20 lg:ps-0 ps-2 mt-10'>
        <h1 className='lg:text-4xl text-2xl font-semibold lg:w-[750px] font-poppins'>Engage Students Through Technology</h1>
        <p className='text-[#808083] lg:w-[650px] lg:ps-8'>We understand that every student is unique. Our tutors tailor their approach to meet individual
          learning styles and needs. Utilizing state-of-the-art online learning platforms, we create engaging and interactive sessions that
          enhance the learning experience.</p>
        <div >
          <button className='bg-black text-white py-1 lg:ms-60 px-5 rounded '>See More</button>
        </div>
      </div>
    </div>
  )
}

export default Technology