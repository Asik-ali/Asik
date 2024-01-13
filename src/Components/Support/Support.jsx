import React from 'react'
import { MdDesignServices } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
function Support() {
    return (
        <div className='bg-[#FAFAFC] pb-10 overflow-x-hidden'>
            <h1 className='pt-16 mx-auto text-4xl font-semibold lg:w-[450px] text-center font-pop'>We Have What It Takes To Support Education</h1>
            <div className='flex flex-col gap-10 lg:flex-row lg:gap-0 justify-evenly items-center  mt-10'>
                <div className='w-[370px] rounded h-[100px] bg-[#E7E5FD] flex justify-evenly items-center gap-5'>
                    <div className='bg-[#B0ACFF] rounded h-[60px] w-[120px] ms-2 flex justify-center items-center'>
                        <MdDesignServices className='text-white text-4xl' />
                    </div>
                    <div>
                        <h5 className='font-semibold'>Qualified Tutors</h5>
                        <p className='text-[12px] text-gray-600'>Our team of dedicated tutors consists of experienced professionals and subject matter experts who
                            are passionate about education.</p>
                    </div>
                </div>
                <div className='w-[370px] rounded h-[100px] bg-[#E7E5FD] flex justify-evenly items-center gap-5'>
                    <div className='bg-[#B0ACFF] rounded h-[60px] w-[120px] ms-2 flex justify-center items-center'>
                        <FaDollarSign className='text-white text-4xl' />
                    </div>
                    <div>
                        <h5 className='font-semibold'>Our Approach</h5>
                        <p className='text-[12px] text-gray-600'>LINKS isn't just about tutoring. We mix supe­rior academics with a positive, uplifting atmosphere­. This helps nurture self-assurance­ and a passion for learning.
</p>
                    </div>
                </div>
                <div className='w-[370px] rounded h-[100px] bg-[#FFDEE9] flex justify-evenly items-center gap-5'>
                    <div className='bg-[#FF80AB] rounded h-[60px] w-[120px] ms-2 flex justify-center items-center'>
                        <FaRegUserCircle className='text-white text-4xl' />
                    </div>
                    <div>
                        <h5 className='font-semibold'>Explore Our Programs:</h5>
                        <p className='text-[12px] text-gray-600'>Start your journey with Link’s Institute by exploring our diverse
range of tutoring programs. </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-10 lg:flex-row lg:gap-0 justify-evenly items-center mt-10'>
                <div className='w-[370px] rounded h-[100px] bg-[#FFDEE9] flex justify-evenly items-center gap-5'>
                    <div className='bg-[#FF80AB] rounded h-[60px] w-[120px] ms-2 flex justify-center items-center'>
                        <FaRegUserCircle className='text-white text-4xl' />
                    </div>
                    <div>
                        <h5 className='font-semibold'>Innovative Environment:</h5>
                        <p className='text-[12px] text-gray-600'>Join a team that values creativity and embraces technology to
enhance the learning experience.</p>
                    </div>
                </div>
                <div className='w-[370px] rounded h-[100px] bg-[#FDF5E0] flex justify-evenly items-center gap-5'>
                    <div className='bg-[#FECC49] rounded h-[60px] w-[120px] ms-2 flex justify-center items-center'>
                        <MdDesignServices className='text-white text-4xl' />
                    </div>
                    <div>
                        <h5 className='font-semibold'>Collaborative Culture</h5>
                        <p className='text-[12px] text-gray-600'>We believe in the power of collaboration. Our team works together
to achieve common goals, and we celebrate individual and collective successes.</p>
                    </div>
                </div>
                <div className='w-[370px] rounded h-[100px] bg-[#FDF5E0] flex justify-evenly items-center gap-5'>
                    <div className='bg-[#FECC49] rounded h-[60px] w-[120px] ms-2 flex justify-center items-center'>
                        <FaDollarSign className='text-white text-4xl' />
                    </div>
                    <div>
                        <h5 className='font-semibold'>Cutting-Edge Technology</h5>
                        <p className='text-[12px] text-gray-600'>Utilizing state-of-the-art online learning platforms, we create engaging and interactive sessions that
enhance the learning experience.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Support