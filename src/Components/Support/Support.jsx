import React from 'react'
import { MdDesignServices } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
function Support() {
  return (
    <div className='bg-[#FAFAFC] pb-10 '>
        <h1 className='pt-16 mx-auto text-4xl font-semibold lg:w-[450px] text-center'>We Have What It Takes To Support Education</h1>
        <div className='flex flex-col gap-10 lg:flex-row lg:gap-0 justify-evenly items-center  mt-10'>
            <div className='w-[330px] rounded h-[100px] bg-[#E7E5FD] flex justify-evenly items-center gap-5'>
    <div className='bg-[#B0ACFF] rounded h-[60px] w-[120px] ms-2 flex justify-center items-center'>
    <MdDesignServices className='text-white text-4xl'/>
    </div>
    <div>
        <h5 className='font-semibold'>Design & Devlopment</h5>
        <p className='text-[12px] text-gray-600'>With flexible contract options and no setup up fees,Hustle works for schols of all sizes.</p>
    </div>
            </div>
            <div className='w-[330px] rounded h-[100px] bg-[#E7E5FD] flex justify-evenly items-center gap-5'>
    <div className='bg-[#B0ACFF] rounded h-[60px] w-[120px] ms-2 flex justify-center items-center'>
    <FaDollarSign className='text-white text-4xl'/>
    </div>
    <div>
        <h5 className='font-semibold'>Finance Management</h5>
        <p className='text-[12px] text-gray-600'>With flexible contract options and no setup up fees,Hustle works for schols of all sizes.</p>
    </div>
            </div>
            <div className='w-[330px] rounded h-[100px] bg-[#FFDEE9] flex justify-evenly items-center gap-5'>
    <div className='bg-[#FF80AB] rounded h-[60px] w-[120px] ms-2 flex justify-center items-center'>
    <FaRegUserCircle className='text-white text-4xl'/>
    </div>
    <div>
        <h5 className='font-semibold'>Self Devlopment</h5>
        <p className='text-[12px] text-gray-600'>With flexible contract options and no setup up fees,Hustle works for schols of all sizes.</p>
    </div>
            </div>
        </div>
        <div className='flex flex-col gap-10 lg:flex-row lg:gap-0 justify-evenly items-center mt-10'>
        <div className='w-[330px] rounded h-[100px] bg-[#FFDEE9] flex justify-evenly items-center gap-5'>
    <div className='bg-[#FF80AB] rounded h-[60px] w-[120px] ms-2 flex justify-center items-center'>
    <FaRegUserCircle className='text-white text-4xl'/>
    </div>
    <div>
        <h5 className='font-semibold'>Business & Consulting</h5>
        <p className='text-[12px] text-gray-600'>With flexible contract options and no setup up fees,Hustle works for schols of all sizes.</p>
    </div>
            </div>
            <div className='w-[330px] rounded h-[100px] bg-[#FDF5E0] flex justify-evenly items-center gap-5'>
    <div className='bg-[#FECC49] rounded h-[60px] w-[120px] ms-2 flex justify-center items-center'>
    <MdDesignServices className='text-white text-4xl'/>
    </div>
    <div>
        <h5 className='font-semibold'>Design & Devlopment</h5>
        <p className='text-[12px] text-gray-600'>With flexible contract options and no setup up fees,Hustle works for schols of all sizes.</p>
    </div>
            </div>
            <div className='w-[330px] rounded h-[100px] bg-[#FDF5E0] flex justify-evenly items-center gap-5'>
    <div className='bg-[#FECC49] rounded h-[60px] w-[120px] ms-2 flex justify-center items-center'>
    <FaDollarSign className='text-white text-4xl'/>
    </div>
    <div>
        <h5 className='font-semibold'>Finance Management</h5>
        <p className='text-[12px] text-gray-600'>With flexible contract options and no setup up fees,Hustle works for schols of all sizes.</p>
    </div>
            </div>
          
        </div>
    </div>
  )
}

export default Support