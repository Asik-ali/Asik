import React from 'react'
import logo from "../../assets/Links Institute.jpg"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { TiChevronRightOutline } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import svg1 from "../../assets/bg.png"
function Footer() {
    return (
        <footer className='bg-[#142F58] lg:pt-40 pb-10 pt-10 mt-5' style={{ backgroundImage: `url(${svg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='flex justify-around lg:flex-row flex-col ps-5 gap-6 lg:gap-0 lg:ps-0 '>
                <div>
                    <img className='w-[170px]' src={logo} alt="" />
                </div>
                <div>
                    <h1 className='mb-6 text-xl font-semibold text-black ps-2 uppercase'>Links</h1>
                    <ul className='flex flex-col space-y-4 text-[18px] font-medium text-gray-500'>
                        <li className='flex items-center cursor-pointer gap-2 hover:text-emerald-900'><TiChevronRightOutline className='text-green-950' />About Us</li>
                        <li className='flex items-center cursor-pointer gap-2 hover:text-emerald-900'><TiChevronRightOutline className='text-green-950' />Our Program</li>
                        <li className='flex items-center cursor-pointer gap-2 hover:text-emerald-900'><TiChevronRightOutline className='text-green-950' />Enrollment</li>
                        <li className='flex items-center cursor-pointer gap-2 hover:text-emerald-900'><TiChevronRightOutline className='text-green-950' />Child Era</li>
                    </ul>
                </div>
                <div>
                    <h1 className='mb-6 text-xl font-semibold text-black ps-2 uppercase'>Explore</h1>
                    <ul className='flex flex-col space-y-4 text-[18px] font-medium text-gray-500'>
                        <li className='flex items-center cursor-pointer gap-2 hover:text-emerald-900'><TiChevronRightOutline className='text-green-950' />Gallery</li>
                        <li className='flex items-center cursor-pointer gap-2 hover:text-emerald-900'><TiChevronRightOutline className='text-green-950' />Faq</li>
                        <li className='flex items-center cursor-pointer gap-2 hover:text-emerald-900'><TiChevronRightOutline className='text-green-950' />Carrers</li>
                        <li className='flex items-center cursor-pointer gap-2 hover:text-emerald-900'><TiChevronRightOutline className='text-green-950' />Calendar</li>
                    </ul>
                </div>
                <div>
                    <h1 className='mb-6 text-xl font-semibold text-black ps-2 uppercase'>Social</h1>
                    <ul className='flex flex-col space-y-4 text-[18px] font-medium text-gray-500'>
                        <li className='flex items-center cursor-pointer gap-2 hover:text-emerald-900'><FaFacebook className='text-green-950' />FaceBook</li>
                        <li className='flex items-center cursor-pointer gap-2 hover:text-emerald-900'><FaInstagram className='text-green-950' />Instagram</li>
                        <li className='flex items-center cursor-pointer hover:text-emerald-900 gap-2'><FaXTwitter className='text-green-950' />Twitter-x</li>
                        <li className='flex items-center cursor-pointer hover:text-emerald-900 gap-2'><FaLinkedin className='text-green-950' />Linkedin </li>
                    </ul>
                </div>
            </div>
            {/* <hr className='border-[#7A412E] mt-4' /> */}
            
        </footer>
    )
}

export default Footer