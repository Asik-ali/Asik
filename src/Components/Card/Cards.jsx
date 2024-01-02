const posts = [
    {
        title: "Explore Our Programs",
        desc: 
        "Start your journey with Link’s Institute by exploring our diverse range of tutoring programs. Browse through subjects, grade levels and available tutors to find the perfect fit for your academic needs."
        ,
        img: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600",
        date: "Jan 4 2023",
        href: "javascript:void(0)"
    },
    {
        title: "Contact Us for Information:",
        desc: 
        "Have questions or need more information? Feel free to reach out to our dedicated support team. You can contact us via phone calls, WhatsApp, Telegram, email or by filling out the online enquiry form on our website.",
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
    }
]

export default () => {
    return (
        <section className="py-10">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
               
                <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        posts.map((items, key) => (
                            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                                <a href={items.href}>
                                    <img src={items.img} loading="lazy" alt={items.title} className="w-full rounded-lg" />
                                    <div className="mt-3 space-y-2">
                                        <span className="block text-indigo-600 text-sm">{items.date}</span>
                                        <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                            {items.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{items.desc}</p>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}