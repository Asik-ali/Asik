import React from 'react'
import img from "../../assets/img1.png"
function Technology() {
  return (
    <div className=' bg-white flex flex-col pb-10 lg:flex-row  justify-evenly items-center'>
        <div className='bg-[#E7A93C]  rounded-t-full mt-10'>
            <img src={img} className='w-[350px] ' alt="" />
        </div>
        <div className='flex flex-col gap-5 lg:mt-20 lg:ps-0 ps-2 mt-10'>
            <h1 className='lg:text-4xl text-2xl font-semibold lg:w-[350px]'><span className='text-[#E7A93C]'>Engage </span> Students Through Technology</h1>
            <p className='text-gray-800 lg:w-[450px]'>We understand that every student is unique. Our tutors tailor their approach to meet individual
learning styles and needs. Utilizing state-of-the-art online learning platforms, we create engaging and interactive sessions that
enhance the learning experience.</p>
            <div >
                <button className='bg-[#E7A93C] text-white py-1 px-5 rounded '>See More</button>
            </div>
        </div>
    </div>
  )
}

export default Technology