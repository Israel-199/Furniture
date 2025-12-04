"use client";
import expertise1 from "@/public/expertise1.jpg"
import expertise2 from "@/public/expertise2.jpg"
import expertise3 from "@/public/expertise3.jpg"
import expertise4 from "@/public/expertise4.jpg"
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import expertiseSlide1 from "@/public/banner-slide-1.jpg"
import expertiseSlide2 from "@/public/banner-slide-2.jpg"

const expertiseData = [
    {
        id: "1",
        title: "Custom Furniture Design",
        desc: "We craft personalized, high-quality furniture pieces tailored to your style and space.",
        image: expertise1,
    },
    {
        id: "2",
        title: "Interior Styling & Furnishing",
        desc: "Complete furnishing solutions that bring harmony, comfort, and modern elegance to your rooms.",
        image: expertise2,
    },
    {
        id: "3",
        title: "Furniture Repair & Restoration",
        desc: "Professional restoration services to revive old or damaged furniture with expert craftsmanship.",
        image: expertise3,
    },
    {
        id: "4",
        title: "Space Planning & Layout",
        desc: "Smart layout planning to maximize functionality and enhance the flow of your living or work spaces.",
        image: expertise4,
    },
];

export default function Expertise() {
    return (
        <>
            <div className="expertise bg-[#241c18]">
                <div className="px-[8%] lg:px-[12%] md:py-50 pt-10 pb-10 md:pb-[25%] relative">
                    <div className="flex flex-col gap-10">
                        <div className="w-full pt-8">
                            <span className="rounded-full text-white title-span border border-gray-400 py-4 px-8 GolosText uppercase font-bold">
                                Our expertise
                            </span>
                        </div>
                        <div className="w-full lg:w-2/3">
                            <h1 className="CalSans text-4xl text-white md:text-7xl">
                                Curating the perfect
                                <span className="text-(--prim)"> furniture pieces to enhance</span>
                                your space
                            </h1>

                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                        {
                            expertiseData.map((item, index) => (
                                <div key={index} className="expertise-card" style={{ marginTop: `${index * 40}px` }}>
                                    <div className="expertise-image">
                                        <Image src={item.image} alt={item.title} className="w-full h-full rounded-2xl" />
                                    </div>
                                    <div className="expertise-info my-5">
                                        <h1 className="text-3xl CalSans text-white border-b border-gray-500/50 pb-5 w-full lg:w-[80%]">{item.title}</h1>
                                        <p className="text-gray-400 mt-3">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="expertise-slide">
                        <Swiper slidesPerView={1} spaceBetween={0} loop={true} autoplay={{ delay: 1500 }} modules={[Autoplay]} speed={2000}>
                            <SwiperSlide><Image src={expertiseSlide1} alt="expertiseSlide" className="w-full h-full object-cover" /></SwiperSlide>
                            <SwiperSlide><Image src={expertiseSlide2} alt="expertiseSlide" className="w-full h-full object-cover" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}
