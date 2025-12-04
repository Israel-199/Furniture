"use client";
import Image from "next/image";
import faqBanner from "@/public/faq-banner.jpg";
import { useState } from "react";

const faqData = [
{
id: "01",
question: "What types of furniture do you provide?",
answer: "We offer a wide range of furniture including living room, bedroom, office, and custom pieces tailored to your style."
},
{
id: "02",
question: "Do you offer custom furniture designs?",
answer: "Yes! Our team can design and craft custom furniture to perfectly match your space and preferences."
},
{
id: "03",
question: "What materials do you use in your furniture?",
answer: "We use high-quality materials such as solid wood, metal, and premium upholstery to ensure durability and style."
},
{
id: "04",
question: "Do you provide delivery and installation?",
answer: "Absolutely! We offer delivery and professional installation services for all our furniture products."
},
{
id: "05",
question: "Can I get advice on furniture arrangement and interior design?",
answer: "Yes, our experts provide guidance on furniture layout and design to help you create a functional and beautiful space."
}
];


export default function Faqs() {

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="px-[8%] lg:px-[12%] py-30">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="w-full lg:w-1/3 title pt-8">
                        <span className="rounded-full title-span border border-gray-400 py-4 px-8 GolosText uppercase font-bold">
                            Popular Queries
                        </span>
                    </div>
                    <div className="w-full lg:w-2/3">
                        <h1 className="CalSans text-4xl md:text-7xl mb-5">Quick and clear<span className="text-(--prim)"> Answer To Your Key</span> services</h1>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 py-10">
                    <div className="w-full lg:w-1/1">
                        <div className="span-y-4 w-full">
                            {faqData.map((item, index) => (
                                <div key={index} className={`overflow-hidden py-2 transition-all duration-300 border-b border-gray-300 ${openIndex === index ? "" : ""}`}>
                                    <button className="w-full flex justify-between items-center py-4 text-left focus:outline-none cursor-pointer" onClick={() => toggle(index)}>
                                        <div className="faq-heading flex items-center gap-5">
                                            <h3 className="text-3xl font-semibold text-(--prim)">{item.id}</h3>
                                            <span className="text-2xl md:text-3xl GolosText font-semibold text-gray-800">
                                                {item.question}
                                            </span>
                                        </div>
                                        {openIndex === index ? (
                                            <i className="bi bi-dash text-(--prim) text-3xl transition-all duration-300"></i>
                                        ) : (
                                            <i className="bi bi-plus text-(--prim) text-3xl transition-all duration-300"></i>
                                        )}
                                    </button>
                                    <div className={`transition-all duration-500 easy-in-out overflow-hidden ${openIndex === index ? "max-h-[300px] opacity-100 py-3" : "max-h-0 opacity-0 py-0"}`}>
                                        <p className="GolosText px-7">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 pt-5">
                        <div className="faq-card flex flex-col md:flex-row lg:flex-col md:items-center items-start gap-6">
                            <Image src={faqBanner} alt="faqbanner" className="rounded-2xl mb-5" />
                            <div className="flex flex-col">
                                <h2 className="capitalize text-3xl CalSans mb-5">
                                    Still Looking For Answers Or Need A Fun Chat
                                </h2>
                                <p className="text-gray-400 text-lg GolosText">Our team will giud you through our design process, project specifications and cost estimate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
