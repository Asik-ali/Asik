import React from "react";
import AboutVision from "../Components/AboutVision/AboutVision";
import ShuffleHero from "../Components/About/About";
import Section from "../Components/Section/Section";
import Lottie from "lottie-react";
import animation from "../assets/Animation - 1704634640169.json";
import img from "../assets/boy.png"
import a1 from "../assets/a1.jpg"
import a2 from "../assets/a2.jpg"
import a3 from "../assets/a3.jpg"
import a4 from "../assets/a4.jpg"
import Newsletter from "../Components/Newsletter/Newsletter";
const About = () => {
  return (
    <div>
      {/* <ShuffleHero/>
      <Section />
        <AboutVision/>
         */}

      <div className="bg-[#FEF6E2] flex-col lg:flex-row justify-center gap-5 lg:gap-0 pt-10 lg:pt-0  overflow-hidden flex items-center lg:justify-around">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="font-Roboto font-bold text-2xl text-center lg:text-5xl lg:text-left    lg:w-[350px]">
              It's Now Easier to Get Quality Education
            </h1>
          </div>
          <p className="text-gray-700 mt-4 px-4 text-center lg:px-0 lg:text-left   lg:w-[350px]">
            Connect in real time with the most effective peer-to-peer texting
            tool for higher education
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <input
              type="Email"
              className="bg-[#EFEFFB] border-none outline-none rounded py-2 px-7"
              placeholder="Type Your Email"
            />
            <div>
              <button className="text-white bg-black px-6 py-2 rounded ">
                Sumbit
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <Lottie
            className="lg:w-[550px] w-[350px]"
            animationData={animation}
          />
        </div>
      </div>

      <div className=' bg-[#EDEDF9] flex flex-col lg:flex-row gap-7 lg:gap-0 pb-10 pt-10 justify-evenly items-center'>
        
        <div className='flex flex-col gap-7 lg:mt-20 lg:ps-0 ps-2 mt-10'>
            <h1 className='lg:text-4xl text-2xl font-semibold  lg:w-[650px]'>LINK’S-Education unfolds, transcending limits in transformative journeys.</h1>
            <p className='text-[#808083] lg:w-[450px]'>At LINK’S, we are driven by a steadfast belief in the profound impact of education. Our commitment is to go beyond the conventional boundaries of classroom learning, offering a transformative educational experience that resonates with the real world. At the core of LINK’S philosophy is the conviction that connecting subject knowledge to real-life experiences is the key to preparing students for success.</p>
            <div >
                <button className='bg-black text-white py-1 px-5 rounded '>See More</button>
            </div>
        </div>
        <div>
            <img className="w-[450px] rounded" src={img} lt="" />
        </div>
    </div> 

    
    <div className=' bg-[#FAFAFC] flex flex-col lg:flex-row gap-7 lg:gap-0 pb-10 pt-10 justify-evenly items-center'>
    <div>
            <img className="w-[500px] rounded" src={a1} lt="" />
        </div>

                <div className='flex flex-col gap-7 lg:mt-0 lg:ps-0 ps-2 mt-10'>
            <h1 className='lg:text-5xl text-2xl font-semibold'>Our Mission</h1>
            <p className='text-[#808083] text-justify lg:w-[450px]'>At LINK’S, our mission is to provide an educational experience that transcends traditional methods. We are dedicated to equipping our students with not just theoretical knowledge but also practical skills and critical thinking abilities. Through hands-on projects, internships, and active community engagement, we aim to bridge the gap between theory and practice. Our goal is to empower students to apply their knowledge meaningfully in diverse scenarios, ensuring they are well-prepared to thrive in the dynamic world around them.</p>
          
        </div>
    </div> 


    <div className=' bg-[#F8F3EF] flex flex-col lg:flex-row gap-7 lg:gap-0 pb-10 pt-10 justify-evenly items-center'>
    

                <div className='flex flex-col gap-7 lg:mt-0 lg:ps-0 ps-2 mt-10'>
            <h1 className='lg:text-5xl text-2xl font-semibold'>Our Vision</h1>
            <p className='text-[#808083] text-justify lg:w-[450px]'>LINK’S envisions a world where every student has access to personalized and effective learning experiences. We aspire to cultivate a lifelong love for learning, fostering an environment where education is a continuous journey of exploration and growth.</p>
          
        </div>
        <div>
            <img className="w-[500px] rounded" src={a2} lt="" />
        </div>
    </div> 

    <div className=' bg-[#FAFAFC] flex flex-col lg:flex-row gap-7 lg:gap-0 pb-10 pt-10 justify-evenly items-center'>
    <div>
            <img className="w-[500px] rounded" src={a3} lt="" />
        </div>

                <div className='flex flex-col gap-7 lg:mt-0 lg:ps-0 ps-2 mt-10'>
            <h1 className='lg:text-5xl text-2xl font-semibold'>Our Team: Qualified Tutors</h1>
            <p className='text-[#808083] text-justify lg:w-[520px]'>The backbone of LINK’S is our team of dedicated tutors, comprised of experienced professionals and subject matter experts who are truly passionate about education. With a wealth of practical knowledge and a commitment to nurturing the potential in every student, our tutors bring a unique blend of expertise and enthusiasm to the learning process.</p>
          
        </div>
    </div> 
    
    <div className=' bg-[#F8F3EF] flex flex-col lg:flex-row gap-7 lg:gap-0 pb-10 pt-10 justify-evenly items-center'>
    

                <div className='flex flex-col gap-7 lg:mt-0 lg:ps-0 ps-2 mt-10'>
            <h1 className='lg:text-5xl text-2xl font-semibold'>Our Approach</h1>
            <p className='text-[#808083] text-justify lg:w-[450px]'>At LINK’S, our approach goes beyond traditional tutoring. We combine academic excellence with a supportive and encouraging environment, fostering confidence and a genuine love for learning. Our students not only gain knowledge but also develop the skills and mindset needed to navigate an ever-evolving world successfully..</p>
          
        </div>
        <div>
            <img className="w-[500px] rounded" src={a4} lt="" />
        </div>
    </div>

    </div>
  );
};

export default About;
// import React from 'react'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About
