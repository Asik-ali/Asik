// import React from 'react'
// import img from "../../assets/3.jpg"
// import Font, { Text } from 'react-font'
// function Hero() {
//   return (
//     // <div className='bg-[#140E0E]  lg::pt-10 pb-10  grid grid-cols-1 md:grid-cols-2   place-items-center '>
//     //   {/* <div className='w-[800px]  '>
//     //   <div className="absolute top-0  w-72 h-72 bg-[#4F6F52] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//     //   <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//     //   <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//     //   </div> */}
//     //   <div className='flex flex-col  gap-4 ps-3 md:pt-4'>
//     //     <Font family="Recursive"> 
//     //     <h1 className='text-[#252525] text-4xl pt-4  '>Education is not just about going to school and getting a degree. It's about <span className='text-[#FBCB1D]'>widening your knowledge and absorbing the truth about life</span> ✨</h1>
//     //     </Font>
//     //     <Font family="Nunito" >
//     //     <div className='flex flex-col md:px-0 md:pb-0  md:flex-row px-4 pb-4 gap-5 md:ms-4 mt-4'>
           
//     //       <button className='px-6 py-3 bg-[#F2874F] border-2 border-[#f2874f] hover:bg-transparent hover:text-[#252525] font-semibold'>Book a Lesson</button>
//     //       <button className='px-6 py-3 border-[#F2874F] hover:bg-[#F2874F] border-2 text-[#252525] font-semibold hover:text-black'>Pick a Package</button>
//     //     </div>
//     //       </Font>
//     //   </div>
//     // <div>
//     //   <img src={img} alt="" className='object-cover lg::rounded-l-[50px] pt-4'/>
//     // </div>
//     // </div>
//     <section className="lg:py-5">
//     <div className="max-w-screen-xl mx-auto md:px-8">
//         <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
//             <div className="flex-1 sm:hidden lg:block">
//                 <img src={img} className="md:max-w-lg sm:rounded-lg" alt="" />
//             </div>
//             <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
//                 <h3 className="text-indigo-600 font-semibold">
//                     Professional services
//                 </h3>
//                 <p className="text-[#E7A93C] text-3xl font-semibold sm:text-4xl">
//                     Build your SaaS solution with help from our experts
//                 </p>
//                 <p className="mt-3 text-gray-600">
//                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
//                 </p>
//                 <a href="" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
//                     Learn more
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
//                         <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
//                     </svg>
//                 </a>
//             </div>
//         </div>
//     </div>
// </section>
//   )
// }

// export default Hero
import { useState } from "react"

function Hero () {
    const features = [
        {
            name: "Trusted",
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="" className="w-5 h-5 ">
                    <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" fill="#0396DE"/>
                </svg>

        },
        {
            name: "Over 50+ videos",
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#F70000" className="w-5 h-5">
                    <path fillRule="evenodd" d="M1 4.75C1 3.784 1.784 3 2.75 3h14.5c.966 0 1.75.784 1.75 1.75v10.515a1.75 1.75 0 01-1.75 1.75h-1.5c-.078 0-.155-.005-.23-.015H4.48c-.075.01-.152.015-.23.015h-1.5A1.75 1.75 0 011 15.265V4.75zm16.5 7.385V11.01a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zm0 2.005a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .108.069.2.165.235h1.585a.25.25 0 00.25-.25v-1.11zm-15 1.11v-1.11a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.164.235H2.75a.25.25 0 01-.25-.25zm2-4.24v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V11.01a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25zm13-2.005V7.88a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zM4.25 7.63a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V7.88a.25.25 0 01.25-.25h1.5zm0-3.13a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5zm11.5 1.625a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5zm-9 3.125a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
                </svg>
        },
        {
            name: "400 ratings",
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#F7E401" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
        }
    ]

    const [isVideoPoppedUp, setVideoPopUp] = useState(false)

    return (
        <section className=" ">
            <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12  text-[#252525] md:px-8 xl:flex">
                <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
                    <div className="flex flex-wrap items-center justify-center gap-6 xl:justify-start">
                        {
                            features.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-x-2 text-[#252525]text-sm">
                                    {item.icon}
                                    {item.name}
                                </div>
                            ))
                        }
                    </div>
                    <h1 className="text-4xl text-[#252525] font-bold mx-auto md:text-5xl">
                    Discover <span className="text-[#E7A93C]">Careers in high</span> demand and cultivate cutting-edge skills.
                    </h1>
                    <p className="max-w-xl mx-auto text-gray-800 xl:mx-0">
                    We believe in the power of connecting subject knowledge to real-life experiences, equipping our students with the practical skills and critical thinking necessary to thrive in the world.                    </p>
                    <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start">
                        <a href="" className="flex items-center justify-center gap-x-2 py-2 px-4 text-white   font-medium bg-[#E7A93C] duration-150 hover:scale-[1.1]  active:bg-gray-900 rounded-lg md:inline-flex">
                            Browse courses
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="" className="flex items-center justify-center gap-x-2 py-2 px-4 text-[#252525] hover:text-black hover:scale-[1.1] font-medium duration-150 active:bg-gray-100 border border-[#E7A93C] rounded-lg md:inline-flex">
                            Get access
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="rounded-lg" alt="" />
                        <button className="absolute w-16 h-16 rounded-full inset-0 m-auto duration-150 bg-blue-500 hover:bg-blue-600 ring-offset-2 focus:ring text-[#252525]"
                            onClick={() => setVideoPopUp(true)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 m-auto">
                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {
                isVideoPoppedUp ? (
                    <div className="fixed inset-0 w-full h-full flex items-center justify-center">
                        <div className="absolute inset-0 w-full h-full bg-black/50" onClick={() => setVideoPopUp(false)}></div>
                        <div className="px-4 relative">
                            <button
                                className="w-12 h-12 mb-5 rounded-full duration-150 bg-[#E7A93C] hover:bg-gray-700 text-[#252525]"
                                onClick={() => setVideoPopUp(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 m-auto">
                                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                </svg>
                            </button>
                            <video className="rounded-lg w-full max-w-2xl" controls autoPlay={true}>
                                <source src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/FloatUI.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                ) : ""
            }
        </section>
    )
} 
export default Hero