import React from 'react'
import { MdDesignServices } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
function Support() {
    return (
        <div className='bg-white pb-10 overflow-x-hidden'>
            <h1 className='pt-16 mx-auto text-4xl font-semibold  text-center'><span className='text-[#E7A93C]'>BrightFuture </span> Champions</h1>
            <div className='flex flex-col gap-10 lg:flex-row lg:gap-0 justify-evenly items-center  mt-10'>
                <div className='w-[370px] rounded-xl border-gray-200 h-[100px] bg-white border-2  flex justify-evenly items-center gap-5'>
                    <div className='bg-[#FECC49] rounded-xl h-[50px] w-[100px] ms-2 flex justify-center items-center'>
                        <MdDesignServices className='text-white text-3xl' />
                    </div>
                    <div>
                        <h5 className='font-semibold'>Qualified Tutors</h5>
                        <p className='text-[12px] text-gray-600'>Our team of dedicated tutors consists of experienced professionals  experts who
                            are passionate about education.</p>
                    </div>
                </div>
                <div className='w-[370px] rounded-xl border-gray-200 h-[100px] bg-white border-2  flex justify-evenly items-center gap-5'>
                    <div className='bg-[#FECC49] rounded-xl h-[50px] w-[100px] ms-2 flex justify-center items-center'>
                        <FaDollarSign className='text-white text-3xl' />
                    </div>
                    <div>
                        <h5 className='font-semibold'>Our Approach</h5>
                        <p className='text-[12px] text-gray-600'>LINKS isn't just about tutoring. We mix supe­rior academics with a positive, uplifting atmosphere­. 
</p>
                    </div>
                </div>
                <div className='w-[370px] rounded-xl border-gray-200 h-[100px] bg-white border-2  flex justify-evenly items-center gap-5'>
                    <div className='bg-[#FECC49] rounded-xl h-[50px] w-[100px] ms-2 flex justify-center items-center'>
                        <FaRegUserCircle className='text-white text-3xl' />
                    </div>
                    <div>
                        <h5 className='font-semibold'>Explore Our Programs:</h5>
                        <p className='text-[12px] text-gray-600'>Start your journey with Link’s Institute by exploring our diverse
range of tutoring programs. </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-10 lg:flex-row lg:gap-0 justify-evenly items-center mt-10 px-5'>
                <div className='w-[370px] rounded-xl border-gray-200 h-[100px] bg-white border-2  flex justify-evenly items-center gap-5'>
                    <div className='bg-[#FECC49] rounded-xl h-[50px] w-[100px] ms-2 flex justify-center items-center'>
                        <FaRegUserCircle className='text-white text-3xl' />
                    </div>
                    <div>
                        <h5 className='font-semibold'>Innovative Environment:</h5>
                        <p className='text-[12px] text-gray-600'>Join a team that values creativity and embraces technology to
enhance the learning experience.</p>
                    </div>
                </div>
                <div className='w-[370px] rounded-xl border-gray-200 h-[100px] bg-white border-2  flex justify-evenly items-center gap-5'>
                    <div className='bg-[#FECC49] rounded h-[60px] w-[100px] ms-2 flex justify-center items-center'>
                        <MdDesignServices className='text-white text-3xl' />
                    </div>
                    <div>
                        <h5 className='font-semibold'>Collaborative Culture</h5>
                        <p className='text-[12px] text-gray-600'>We believe in the power of collaboration. Our team works together
to achieve common goals</p>
                    </div>
                </div>
                <div className='w-[370px] rounded-xl border-gray-200 h-[100px] bg-white border-2  flex justify-evenly items-center gap-5'>
                    <div className='bg-[#FECC49] rounded h-[60px] w-[100px] ms-2 flex justify-center items-center'>
                        <FaDollarSign className='text-white text-3xl' />
                    </div>
                    <div>
                        <h5 className='font-semibold'>Cutting-Edge Technology</h5>
                        <p className='text-[12px] text-gray-600'>Utilizing state-of-the-art online learning platforms, we create engaging .</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Support