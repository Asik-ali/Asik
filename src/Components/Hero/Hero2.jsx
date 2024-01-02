// import React from 'react';
// import img from '../../assets/3.jpg';

// function Hero2() {
//   return (
//     <>
//       <div className='bg-[#1b2945] lg:pt-10 pb-10 grid grid-cols-1 md:grid-cols-2 place-items-center relative'>
//         {/* <div className='w-full lg:w-[800px] relative'>
//           <div className="absolute top-0 w-72 h-72 bg-[#4F6F52] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//           <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//           <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//         </div> */}
//         <div className='hidden lg:flex'>
//           <img src={img} alt="" className='object-cover lg:rounded-l-[50px] pt-4' />
//         </div>
//         <div className='flex flex-col gap-4 pl-3 md:pt-0'>

//           <h1 className='text-white text-xl  font-recursive lg:ps-3 lg:pe-3'>
//             Start your journey with Link’s Institute by exploring our diverse
//             range of tutoring programs.           <span className='text-[#FBCB1D] lg:pe-3'> Browse through subjects, grade levels and available tutors to find
//               the perfect fit for your academic needs.✨  </span>
//           </h1>
//           <div className='flex flex-col md:flex-row px-4 pb-4 gap-5 md:ms-4 mt-4'>
//             <button
//               className="flex items-center justify-center gap-x-2 py-2 px-4 bg-[#6062DC] text-white font-medium duration-150 rounded-lg md:inline-flex 
// hover:shadow-2xl hover:transform hover:scale-105 transition-transform"             >
//               Book a Lesson
//             </button>
//             <button
//               className="flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium border-2 border-[#6062DC] duration-150 rounded-lg md:inline-flex 
// hover:shadow-2xl hover:transform hover:scale-105 transition-transform"            >
//               Pick a Package
//             </button>
//           </div>
//         </div>

//       </div>

//     </>
//   );
// }

// export default Hero2;


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const posts = [
  {
    title: "Explore Our Programs",
    desc: "Start your journey with Link’s Institute by exploring our diverse range of tutoring programs. Browse through subjects, grade levels and available tutors to find the perfect fit for your academic needs.",
    img: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Jan 4 2023",
    href: "javascript:void(0)"
  },
  {
    title: "Contact Us for Information:",
    desc: "Have questions or need more information? Feel free to reach out to our dedicated support team. You can contact us via phone calls, WhatsApp, Telegram, email or by filling out the online enquiry form on our website.",
    img: "https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Jan 4 2023",
    href: "javascript:void(0)"
  },
  {
    title: "Professional Growth",
    desc: "At Links Institute, we invest in the development of our team members. From ongoing training opportunities to mentorship programs, we are committed to fostering a culture of continuous learning and professional growth.",
    img: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Jan 4 2023",
    href: "javascript:void(0)"
  },
  // Add the fourth and fifth slides with the same image as the first one
  {
    title: "Hidden Slide 1",
    desc: "This is a hidden slide.",
    img: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Hidden Date 1",
    href: "javascript:void(0)"
  },
  {
    title: "Hidden Slide 2",
    desc: "This is another hidden slide.",
    img: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Hidden Date 2",
    href: "javascript:void(0)"
  },
];

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjusted autoplay speed for better responsiveness
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="lg:mt-24 mt-6">
      <div className="mx-auto px-4 md:px-8">
        <h1 className='text-2xl md:text-5xl text-center lg:mb-12 md:mb-12 mb-4'>
          Latest News <span className='text-[#6062DC]'>And Updates</span>
        </h1>
        <Slider {...settings}>
          {posts.map((item, key) => (
            <div key={key} className="mx-2 pe-5">
              <a href={item.href}>
                <img src={item.img} loading="lazy" alt={item.title} className="w-full rounded-lg" />
                <div className="mt-3 space-y-2">
                  <span className="block text-indigo-600 text-sm">{item.date}</span>
                  <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{item.desc}</p>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SliderComponent;
