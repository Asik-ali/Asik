import { useRef, useState } from "react";

const FaqsCard = (props) => {
    const answerElRef = useRef();
    const [state, setState] = useState(false);
    const [answerH, setAnswerH] = useState('0px');

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight;
        setState(!state);
        setAnswerH(`${answerElH + 20}px`);
    };

    return (
        <div
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={props.idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {props.faqsList.q}
                {state ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                )}
            </h4>
            <div
                ref={answerElRef}
                className="duration-300"
                style={state ? { height: answerH } : { height: '0px' }}
            >
                <div>
                    <p className="text-gray-500">{props.faqsList.a}</p>
                </div>
            </div>
        </div>
    );
};

const FAQSection = () => {
    const faqsList = [
        {
            q: "How does online tutoring work?",
            a: "Online tutoring typically involves one-on-one, or group sessions conducted over the internet. Tutors and students communicate through video conferencing, chat, and shared resources."
        },
        {
            q: "What subjects and grade levels do you offer tutoring for?",
            a: "We offer tutoring services across a wide range of subjects for Secondary level (Grade 9 and 10) and Senior Secondary level (Grade 11 and 12), including math, science, languages and more. Our tutors are qualified to assist students from Secondary to college levels."
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
        }
    ];

    const faqsLists = [
        {
            q: "Is there a trial session available?",
            a: "Yes, we offer trial sessions for new students. This allows you to experience our tutoring services firsthand and decide if it's the right fit for you before committing to a package."
        },
        {
            q: "How do you ensure the safety and security of online sessions?",
            a: "We prioritize the safety and security of our users. Our platform uses encryption to protect communication, and tutors undergo background checks. Additionally, some sessions are recorded for quality assurance and monitoring purposes."
        },
        {
            q: "What if I need to reschedule or cancel a session?",
            a: "You can reschedule or cancel a session within a specified timeframe through our platform. We understand that unforeseen circumstances may arise, and we aim to be flexible while maintaining a fair policy."
        },
        {
            q: "How do you track student progress?",
            a: "We track student progress through regular assessments, feedback from tutors, and, if applicable, collaboration with classroom teachers. Our goal is to tailor tutoring sessions to meet the individual learning needs of each student."
        },
        {
            q: "What is the pricing structure for tutoring services?",
            a: "Our pricing structure varies based on the course, subject, level, and package selected. We offer different plans to accommodate various needs and budgets. You can find detailed pricing information by contacting our support team."
        }

    ];

    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 lg:mb-12">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="flex flex-col gap-8 md:flex-row">
                <div className="max-w-2xl mx-auto md:w-1/2">
                    {faqsList.map((item, idx) => (
                        <FaqsCard key={idx} idx={idx} faqsList={item} />
                    ))}
                </div>
                <div className="max-w-2xl mx-auto md:w-1/2">
                    {faqsLists.map((item, idx) => (
                        <FaqsCard key={idx} idx={idx} faqsList={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};


export default FAQSection;
