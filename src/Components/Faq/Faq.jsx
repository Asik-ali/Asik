function Faq ()  {

    const faqsList = [
        {
            q: "How does online tutoring work?",
            a: "Online tutoring typically involves one-on-one, or group sessions conducted over the internet. Tutors and students communicate through video conferencing, chat, and shared resources."
        },
        {
            q: "What subjects and grade levels do you offer tutoring for?",
            a: "We offer tutoring services across a wide range of subjects for Secondary level (Grade 9 and 10) and Senior Secondary level (Grade 11 and 12) , including math, science, languages and more. Our tutors are qualified to assist students from Secondary to college levels."
        },
        {
            q: "How are tutors selected and what are their qualifications?",
            a: "Our tutors undergo a rigorous selection process. They are experienced professionals or subject matter experts with relevant academic backgrounds. We ensure that they have the necessary qualifications and expertise to provide effective tutoring."
        },
        {
            q: "What technology do I need for online tutoring?",
            a: "You will need a stable internet connection, a computer or tablet, and a webcam. We use user-friendly platforms for virtual sessions."
        },
        {
            q: "How do I schedule tutoring sessions?",
            a: "You can schedule tutoring sessions through our online platform. We provide a scheduling system that allows you to choose available time slots that suit your schedule."
        },
        {
            q: "Is there a trial session available?",
            a: "Yes, we offer trial sessions for new students. This allows you to experience our tutoring services firsthand and decide if it&#39;s the right fit for you before committing to a package."
        }
        ,{
            q: "How do you ensure the safety and security of online sessions?",
            a: "We prioritize the safety and security of our users. Our platform uses encryption to protectcommunication, and tutors undergo background checks. Additionally, some sessions are recorded for quality assurance and monitoring purposes."
        },
        {
            q: "What if I need to reschedule or cancel a session?",
            a: "You can reschedule or cancel a session within a specified timeframe through our platform.We understand that unforeseen circumstances may arise and we aim to be flexible while maintaining a fair policy."
        },
        {
            q: "How do you track student progress?",
            a: "We track student progress through regular assessments, feedback from tutors, and, if applicable, collaboration with classroom teachers. Our goal is to tailor tutoring sessions to meet the individual learning needs of each student."
        },
        {
            q: "What is the pricing structure for tutoring services?",
            a: "Our pricing structure varies based on the course, subject, level, and package selected. We offer different plans to accommodate various needs and budgets. You can find detailed pricing information by contacting our support team."
        }
    ]

    return (
        <div className="leading-relaxed mt-12 mx-4 md:mx-8">
            <div className="text-center space-y-3">
                <h1 className="block text-gray-800 text-3xl font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-500 max-w-lg mx-auto">
                    Answered all frequently asked questions. Can’t find the answer you’re looking for? feel free to contact us.
                </p>
            </div>
            <div className="relative bg-white rounded-md mt-10 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl sm:mx-auto" style={{boxShadow: '0px 7px 20px 7px #F1F1F1'}}>
                <div className="grid gap-4 py-8 md:grid-cols-2">
                    {
                        faqsList.map((item, idx) => (
                            <div className="space-y-3 mt-6 px-8" key={idx}>
                                <h4 className="text-gray-800 text-xl font-semibold ">
                                    {item.q}
                                </h4>
                                <p className="text-gray-500">
                                    {item.a}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <span className="w-0.5 h-full bg-gray-200 m-auto absolute top-0 left-0 right-0 hidden md:block"></span>
            </div>
        </div>
    )
}
export default Faq