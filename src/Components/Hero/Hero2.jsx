import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const posts = [
  {
    title: "Revolutionizing Learning: Virtual Reality Takes Classrooms by Storm",
    desc:
      "Educational institutions worldwide are embracing virtual reality to enhance student engagement and provide immersive learning experiences. From history lessons to scientific explorations, VR is reshaping the future of education.",
    img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D",
    date: "Jan 4 2023",
    href: "javascript:void(0)"
  },
  {
    title: "Global Initiative for Digital Literacy Launched",
    desc: 
    "In a collaborative effort, leading tech companies and educational organizations join forces to launch a global initiative aimed at promoting digital literacy among students. The program focuses on equipping learners with essential digital skills for the 21st century.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D",
    date: "Jan 4 2023",
    href: "javascript:void(0)"
  },
  {
    title: "Breaking Barriers: Inclusive Education Practices Recognized",
    desc:
    "In a move towards more inclusive education, schools worldwide are adopting innovative practices to cater to diverse learning needs. From accessible resources to personalized learning plans, the education sector is making strides in ensuring education for all.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D",
    date: "Jan 4 2023",
    href: "javascript:void(0)"
  },
  {
    title: "AI-Powered Tutoring Systems: Transforming How Students Learn",
    desc: 
    "Artificial Intelligence is revolutionizing the tutoring landscape, providing personalized and adaptive learning experiences for students. As AI-powered systems become more prevalent, educators explore new possibilities in individualized learning paths.",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D",
    date: "Hidden Date 1",
    href: "javascript:void(0)"
  },
  {
    title: "E-Learning Trends 2023: What's Next for Online Education",
    desc:  "As the landscape of education continues to evolve, e-learning takes center stage. From interactive content delivery to gamified learning modules, explore the upcoming trends shaping the future of online education.",
    img: "https://images.unsplash.com/photo-1554752191-343d87d6c28f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D",
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
    autoplaySpeed: 500, // Adjusted autoplay speed for better responsiveness
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
    <section className="  bg-[#DCF2F1] pt-10 py-10 overflow-x-hidden">
      <div className="mx-auto px-4 md:px-8">
        <h1 className='text-xl md:text-4xl text-center lg:mb-12 md:mb-12 mb-4 font-semibold '>
          Latest News And Updates
        </h1>
        <Slider {...settings}>
          {posts.map((item, key) => (
            <div key={key} className="mx-2 pe-5">
              <a href={item.href}>
                <img src={item.img} loading="lazy" alt={item.title} className="w-full rounded-lg" />
                <div className="mt-3 space-y-2">
                  <span className="block text-gray-600 text-sm">{item.date}</span>
                  <h3 className="text-lg text-black duration-150 group-hover:text-indigo-600 font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-[#808083] text-sm duration-150 group-hover:text-gray-800">{item.desc}</p>
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
