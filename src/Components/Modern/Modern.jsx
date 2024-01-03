import React from 'react'

function Modern() {
  return (
    <div className='bg-[#FAFAFC]'>
        <h1 className='lg:text-4xl text-2xl font-semibold lg:w-[450px] mx-auto  text-center pt-10'>EMPOWERING MODERN DAY EDUCATION</h1>

<div className='flex flex-col lg:flex-row  justify-center items-center  mt-20 lg:mt-[100px] gap-14 pb-20 lg:pb-24'>
    <div className='bg-[#E8E6FE] w-[290px] lg:w-[320px]  h-[220px] rounded flex flex-col justify-center p-2 ps-3 gap-4'>
        <h5 className='font-bold'>Teachers</h5>
        <p className='text-[#808083]'>Bring the power of the digital age into your classroom, Enable your students to make innovative school projects</p>
        <div>
            <button className='border-[1px] border-[#9a94f9] text-white bg-[#9a94f9] hover:bg-transparent hover:text-[#9a94f9] px-6 py-1 rounded-lg'>See More</button>
        </div>
    </div>
    <div className='bg-[#FEF6E1] w-[290px] lg:w-[320px] h-[220px] rounded flex flex-col justify-center p-2 ps-3 gap-4'>
        <h5 className='font-bold'>Students</h5>
        <p className='text-[#808083]'>Get bold and creative with your school assignments. Flipsnack allows you to unleash your imagination in the easiest possible way.</p>
        <div>
            <button className='border-[1px] border-[#E7A93C] bg-[#E7A93C] hover:bg-transparent hover:text-[#E7A93C] text-white px-6 py-1 rounded-lg'>See More</button>
        </div>
    </div>
    <div className='bg-[#FFDEE9] w-[290px] lg:w-[320px] h-[220px] rounded flex flex-col justify-center p-2 ps-3 gap-4'>
        <h5 className='font-bold'>Schools</h5>
        <p className='text-[#808083]'>
Publish appealing school prospectus, handbooks and admission guides to inform students, teachers, applicants and parents.</p>
        <div>
            <button className='border-[1px] border-[#FF84B0] text-white bg-[#FF84B0] hover:bg-transparent hover:text-[#FF84B0] px-6 py-1 rounded-lg'>See More</button>
        </div>
    </div>

</div>



    </div>
  )
}

export default Modern