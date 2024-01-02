import { useState } from "react"

function Testimonials ()  {

    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "M",
            title: "Founder",
            quote:
             "I participated in a Data Science program where live sessions facilitated a profound comprehension of technical subjects. The platform not only offered in-depth technical discussions but also provided opportunities to engage with industry experts, contributing significantly to my intellectual growth.              "
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Angela ",
            title: "Product",
            quote: "I completed the MICA Digital Marketing course with LINKS, and the entire team was incredibly supportive throughout the program. My learning journey was seamless, and I gained valuable insights that significantly contributed to my professional growth. The skills acquired also played a pivotal role in my successful career transition."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Karim ahmed",
            title: " engineer",
            quote: "Links is an excellent starting point. I undertook my AI training there and successfully completed an advanced AI and ML program through Links. "
        },
    ]

    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-indigo-600 font-semibold pb-6">What people are saying</h3>
                    <ul>
                        {
                            testimonials.map((item, idx) => (
                                currentTestimonial == idx ? (
                                    <li key={idx}>
                                        <figure>
                                            <blockquote>
                                                <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                                                    “{item.quote}“
                                                </p>
                                            </blockquote>
                                            <div className="mt-6">
                                                <img src={item.avatar} className="w-16 h-16 mx-auto rounded-full" />
                                                <div className="mt-3">
                                                    <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                    <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ) : ""
                            ))
                        }
                    </ul>
                </div>
                <div className="mt-6">
                    <ul className="flex gap-x-3 justify-center">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx}>
                                    <button className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${currentTestimonial == idx ? "bg-indigo-600" : "bg-gray-300"}`}
                                        onClick={() => setCurrentTestimonial(idx)}
                                    ></button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Testimonials