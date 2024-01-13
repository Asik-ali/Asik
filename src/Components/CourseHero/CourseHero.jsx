import React from 'react'

const CourseHero = () => {
  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
    <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
      <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
        <span className="block">
        Empower Your Future with Knowledge
        </span>
      </h2>
      <p className="text-md mt-4 text-gray-400">
      Dive into our curated courses designed to enhance your skills, expand your horizons, and propel you towards success.
      </p>
      <div className="lg:mt-0 lg:flex-shrink-0">
        <div className="mt-12 inline-flex rounded-md shadow">
          <button type="button" className="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
          Explore Courses
          </button>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-8 p-8 lg:p-24">
      <img src="https://images.pexels.com/photos/4063590/pexels-photo-4063590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-1/2 rounded-lg" alt="Tree"/>
      <div>
        <img src="https://images.pexels.com/photos/5303549/pexels-photo-5303549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="mb-8 rounded-lg" alt="Tree"/>
        <img src="https://images.pexels.com/photos/7014766/pexels-photo-7014766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-lg" alt="Tree"/>
      </div>
    </div>
  </div>
  )
}

export default CourseHero