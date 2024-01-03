import React from 'react'
import img from "../../assets/img1.png"
function Technology() {
  return (
    <div className=' bg-[#F8F3EF] flex flex-col pb-10 lg:flex-row  justify-evenly items-center'>
        <div>
            <img src={img} lt="" />
        </div>
        <div className='flex flex-col gap-5 lg:mt-20 lg:ps-0 ps-2 mt-10'>
            <h1 className='lg:text-4xl text-2xl font-semibold lg:w-[350px]'>Engage Students Through Technology</h1>
            <p className='text-[#808083] lg:w-[450px]'>Nowadays, it's such a great time to be a teacher or a student when you can combine learning with technology. the classroom activities can resemble the real world when taking advantage of our intuitive and straightforward design, studio.</p>
            <div >
                <button className='bg-black text-white py-1 px-5 rounded '>See More</button>
            </div>
        </div>
    </div>
  )
}

export default Technology