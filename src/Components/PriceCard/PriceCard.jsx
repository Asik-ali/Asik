import React, { useState } from 'react';

export default () => {
    const plans = [
        {
            name: "Secondary - G 9&10 Arabic",
            price: 12,
            features: [
                "One To One Sessions",
                "Limited Seats",

            ],
        },
        {
            name: "Secondary - G 9&10 English",
            price: 35,
            features: [
                "One To One Sessions",
                "Limited Seats",

            ],
        },
        {
            name: "Secondary - G 9&10 Mathematics",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: "Secondary - G 9&10 Science",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: "Senior Secondary G 11 &12 Arabic",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: "Senior Secondary G 11 &12 English",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: "Senior Secondary G 11 &12 Mathematics",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: "Senior Secondary G 11 &12 Physics",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: "Senior Secondary G 11 &12 Chemistry",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: "Senior Secondary G 11 &12 Biology",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: "Senior Secondary G 11 &12 Accounting",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: "Senior Secondary G 11 &12 Economics",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        {
            name: "Senior Secondary G 11 &12 Business Studies",
            price: 60,
            features: [
                "One To One Sessions",
                "Limited Seats",
            ],
        },
        // Add more plans as needed
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % plans.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0
                ? plans.length - (plans.length % 3 || 3)
                : prevIndex - 3
        );
    };

    const visiblePlans = plans.slice(currentIndex, currentIndex + 3);

    return (
        <section className='py-14 relative'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className='relative max-w-xl mx-auto sm:text-center'>
                    <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                        CBSE
                    </h3>
                </div>
                
                {/* Laptop View */}
                <div className='mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 hidden lg:flex'>
                    {visiblePlans.map((item, idx) => (
                        <div key={idx} className='relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2'>
                            <div>
                                <span className='text-indigo-600 font-medium'>
                                    {item.name}
                                </span>
                                <div className='mt-4 text-gray-800 text-3xl font-semibold'>
                                    ${item.price} <span className="text-xl text-gray-600 font-normal">/mo</span>
                                </div>
                            </div>
                            <ul className='py-8 space-y-3'>
                                {item.features.map((featureItem, idx) => (
                                    <li key={idx} className='flex items-center gap-5'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='h-5 w-5 text-indigo-600'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'>
                                            <path
                                                fillRule='evenodd'
                                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                clipRule='evenodd'></path>
                                        </svg>
                                        {featureItem}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex-1 flex items-end">
                                <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'>
                                    Get Started
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View */}
                <div className='mt-16 space-y-6 justify-center gap-6 sm:hidden lg:hidden flex flex-col'>
                    {visiblePlans.map((visiblePlan, idx) => (
                        <div key={idx} className='relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2 mb-8'>
                            <div>
                                <span className='text-indigo-600 font-medium'>
                                    {visiblePlan.name}
                                </span>
                                <div className='mt-4 text-gray-800 text-3xl font-semibold'>
                                    ${visiblePlan.price} <span className="text-xl text-gray-600 font-normal">/mo</span>
                                </div>
                            </div>
                            <ul className='py-8 space-y-3'>
                                {visiblePlan.features.map((featureItem, idx) => (
                                    <li key={idx} className='flex items-center gap-5'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='h-5 w-5 text-indigo-600'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'>
                                            <path
                                                fillRule='evenodd'
                                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                clipRule='evenodd'></path>
                                        </svg>
                                        {featureItem}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex-1 flex items-end">
                                <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'>
                                    Get Started
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className='flex justify-between'>
                        <button
                            onClick={prevSlide}
                            className='px-3 py-2 rounded-lg font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'
                        >
                            Previous
                        </button>
                        <button
                            onClick={nextSlide}
                            className='px-3 py-2 rounded-lg font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'
                        >
                            Next
                        </button>
                    </div>
                </div>

                {/* Laptop View Navigation */}
                <div className=' justify-between hidden lg:flex'>
                    <button
                        onClick={prevSlide}
                        className='px-3 py-2 rounded-lg absolute top-[45%] left-0 md:left-[2%] font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'
                    >
                        Previous
                    </button>
                    <button
                        onClick={nextSlide}
                        className='px-3 py-2 rounded-lg absolute top-[45%] right-0 md:right-[5%] font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'
                    >
                        Next
                    </button>
                </div>
                
                {/* Mobile View Navigation */}
                <div className='flex justify-between lg:hidden mt-5'>
                    <button
                        onClick={prevSlide}
                        className='px-3 py-2 rounded-lg  md:left-[2%] font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'
                    >
                        Previous
                    </button>
                    <button
                        onClick={nextSlide}
                        className='px-3 py-2 rounded-lg   md:right-[5%] font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};