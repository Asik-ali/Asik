export default () => {

    const posts = [
        {
            title: "Our Vision",
            desc: "LINK’S envisions a world where every student has access to personalized and effective learning experiences, fostering a lifelong love for learning.",
            date: "Thursday, December 9th 2021",
            href: "javascript:void(0)"
        },
        {
            title: "Qualified Tutors",
            desc: " Our team of dedicated tutors consists of experienced professionals and subject matter experts who are passionate about education.            ",
            date: "Thursday, December 9th 2021",
            href: "javascript:void(0)"
        },
        {
            title: "Personalized Learning",
            desc: " We understand that every student is unique. Our tutors tailor their approach to meet individual learning styles and needs.            ",
            date: "Thursday, December 9th 2021",
            href: "javascript:void(0)"
        },
        {
            title: "Cutting-Edge Technology",
            desc: " Utilizing state-of-the-art online learning platforms, we create engaging and interactive sessions that enhance the learning experience.            ",
            date: "Thursday, December 9th 2021",
            href: "javascript:void(0)"
        },
        {
            title: "Our Approach",
            desc: " At LINKS, we go beyond traditional tutoring. Our approach combines academic excellence with a supportive and encouraging environment, fostering confidence and a love for learning.         ",
            date: "Thursday, December 9th 2021",
            href: "javascript:void(0)"
        },
        {
            title: "Innovative Environment",
            desc: " Join a team that values creativity and embraces technology to enhance the learning experience. We are at the forefront of online education, constantly exploring new ways to deliver quality tutoring services.        ",
            date: "Thursday, December 9th 2021",
            href: "javascript:void(0)"
        },


    ]

    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
            {/* <div className="max-w-lg">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Blog
                </h1>
                <p className="mt-3 text-gray-500">
                    Blogs that are loved by the community. Updated every hour.
                    The powerful gravity waves resulting from the impact of the planets, were finally resolved in 2015
                </p>
            </div> */}
            <div className="mt-12 flex flex-wrap gap-4 justify-between">
                {posts.map((item, idx) => (
                    <article className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 mt-5 pt-8 md:pt-0" key={idx}>
                        <a href={item.href} className="block w-full">
                            {/* <span className="block text-gray-400 text-sm">{item.date}</span> */}
                            <div className="mt-2">
                                <h3 className="text-xl text-gray-900 font-semibold hover:underline">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                            </div>
                           
                        </a>
                    </article>
                ))}
            </div>
        </section>
    )
}
