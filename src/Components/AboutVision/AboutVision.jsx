import React from "react";

const posts = [
  {
    title: "Our Vision",
    desc: "LINK’S envisions a world where every student has access to personalized and effective learning experiences, fostering a lifelong love for learning.",
    date: "Thursday, December 9th 2021",
    href: "javascript:void(0)",
  },
  {
    title: "Qualified Tutors",
    desc: " Our team of dedicated tutors consists of experienced professionals and subject matter experts who are passionate about education.",
    date: "Thursday, December 9th 2021",
    href: "javascript:void(0)",
  },
  {
    title: "Personalized Learning",
    desc: " We understand that every student is unique. Our tutors tailor their approach to meet individual learning styles and needs.",
    date: "Thursday, December 9th 2021",
    href: "javascript:void(0)",
  },
  {
    title: "Cutting-Edge Technology",
    desc: " Utilizing state-of-the-art online learning platforms, we create engaging and interactive sessions that enhance the learning experience.",
    date: "Thursday, December 9th 2021",
    href: "javascript:void(0)",
  },
  {
    title: "Our Approach",
    desc: " At LINKS, we go beyond traditional tutoring. Our approach combines academic excellence with a supportive and encouraging environment, fostering confidence and a love for learning.",
    date: "Thursday, December 9th 2021",
    href: "javascript:void(0)",
  },
  {
    title: "Innovative Environment",
    desc: " Join a team that values creativity and embraces technology to enhance the learning experience. We are at the forefront of online education, constantly exploring new ways to deliver quality tutoring services.",
    date: "Thursday, December 9th 2021",
    href: "javascript:void(0)",
  },
];

const ResponsiveComponent = () => {
  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
      <div className="mt-12 flex flex-wrap gap-4 justify-center md:justify-between">
        {posts.map((item, idx) => (
          <article
            className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 mt-5 md:pt-0 border-2 p-6 md:p-16 text-center m-6 bg-[#1b2945]"
            key={idx}
          >
            <a href={item.href} className="block w-full pt-9">
              <div>
                <h3 className="text-xl md:text-2xl text-[#FBCB1D] font-semibold hover:underline">
                  {item.title}
                </h3>
                <p className="text-white mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ResponsiveComponent;
