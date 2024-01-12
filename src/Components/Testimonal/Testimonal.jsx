import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonial = () => {
  const testimonials = [
    {
      content: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      author: "Leslie Alexander",
      role: "Freelance React Developer",
      avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
    },
    {
      content: "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
      author: "Jacob Jones",
      role: "Digital Marketer",
      avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
    },
    {
      content: "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.",
      author: "Jenny Wilson",
      role: "Graphic Designer",
      avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextTestimonial();
    }, 1000); // Change testimonial every 5 seconds

    return () => clearInterval(intervalId);
  }, [currentTestimonial]);

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-medium text-gray-600 font-pj">2,157 people have said how good Rareblocks</p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Our happy clients say about us</h2>
          </div>

          <div className="mt-8 text-center md:mt-16 md:order-3">
            <a href="#" title="" className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"> Check all 2,157 reviews </a>
          </div>

          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{ background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)' }}></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-1 md:grid-rows-1">
              {testimonials.slice(currentTestimonial, currentTestimonial + 1).map((testimonial, index) => (
                <div key={index} className={`flex flex-col overflow-hidden transition-transform duration-500 ease-in-out transform ${index === currentTestimonial ? 'scale-100 opacity-100' : 'scale-95 opacity-70'}`}>
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, starIndex) => (
                          <FontAwesomeIcon key={starIndex} icon={faStar} className={`w-5 h-5 text-[#FDB241] ${starIndex < 4 ? 'mr-1' : ''}`} />
                        ))}
                      </div>
                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">{testimonial.content}</p>
                      </blockquote>
                    </div>
                    <div className="flex items-center mt-8">
                      <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src={testimonial.avatar} alt="" />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">{testimonial.author}</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Left and Right Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 cursor-pointer text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 bg-white rounded-full p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 cursor-pointer text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 bg-white rounded-full p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
