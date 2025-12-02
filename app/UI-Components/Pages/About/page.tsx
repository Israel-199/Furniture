"use client";
import Link from "next/link";
import About2 from "@/public/About-2.jpg";
import About4 from "@/public/About-4.jpg";
import Image from "next/image";

import {Swiper,SwiperSlide} from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import timeline1 from "@/public/timeline-1.jpg";
import timeline2 from "@/public/timeline-2.jpg";
import timeline3 from "@/public/timeline-3.jpg";
import timeline4 from "@/public/timeline-4.jpg";

import Award1 from "@/public/Award-1.jpg"
import Award2 from "@/public/Award-2.jpg"
import Award3 from "@/public/Award-3.jpg"
import Award4 from "@/public/Award-4.jpg"
import Award5 from "@/public/Award-5.jpg"

import { useState } from "react";
import Expertise from "../../Index/Expertise/page";
import Testimonial from "../../Index/Testimonials/page";

import partner1 from "@/public/partner1.svg"
import partner2 from "@/public/partner2.svg"
import partner3 from "@/public/partner3.svg"
import partner4 from "@/public/partner4.svg"
import partner5 from "@/public/partner5.svg"
import partner6 from "@/public/partner6.svg"
import Newsletter from "../../Index/Newsletter/page";

const Partners = [partner1,partner2,partner3,partner4,partner5,partner6];



const awardsData = [
    {
        years:"2025",
        title:"Best Residential Design",
        category: "Architecture",
        image: Award1
    },
      {
        years:"2024",
        title:"Top Commercial Design",
        category: "Architecture",
        image: Award2
    },
      {
        years:"2023",
        title:"Sustainable Design Award",
        category: "Community Center",
        image: Award3
    },
     {
        years:"2022",
        title:"Sustainable Design Award",
        category: "Community Center",
        image: Award4
    },
     {
        years:"2021",
        title:"Sustainable Design Award",
        category: "Community Center",
        image: Award5
    },
]
const historyData = [
    {
        image : timeline1,
        year : "2025",
        text: "Celebrates 15 years with a retrospective showcase",
    },
    {
        image : timeline2,
        year : "2025",
        text: "Celebrates 15 years with a retrospective showcase",
    },
    {
        image : timeline3,
        year : "2025",
        text: "Celebrates 15 years with a retrospective showcase",
    },
    {
        image : timeline4,
        year : "2025",
        text: "Celebrates 15 years with a retrospective showcase",
    },
    {
        image : About2,
        year : "2025",
        text: "Celebrates 15 years with a retrospective showcase",
    }
]
export default function About() {

    const [hoveredIndex, sethoveredIndex] = useState(0);

    return (
        <>
            <div className="section-bg text-white flex flex-col">
                <h1 className="text-8xl GolosText mt-15">About Us</h1>
                <div className="flex items-center text-xl mt-3">
                    <Link href={"/"} className="hover:text-(--prim) transition-all duration-300">Home</Link>
                    <i className="ri-arrow-right-wide-fill mt-1" />
                    <h2 className="GolosText">About Us</h2>
                </div>
            </div>
            <div className="px-[8%] lg:px-[12%] py-20">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="w-full lg:w-2/3 pt-8">
                        <span className="rounded-full title-span border border-gray-400 py-4 px-8 GolosText uppercase font-bold">
                            Started In 1989
                        </span>
                        <h1 className="CalSans pt-8 text-4xl md:text-5xl w-full lg:w-[80%]v mb-5">We Shape<span className="text-(--prim)"> Interior Design, Crafting</span>Timeless and Inspiring Spaces</h1>
                        <div className="about-content md:pt-15">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                                <div className="about-text">
                                <h2 className="text-[10rem] leading-40 GolosText font-bold text-(--prim)">26</h2>
                                <p className="text-2xl lg:px-15 CalSans">Years of experience</p>
                                </div>
                             <div className="about-img">
                                <Image src={About4} alt="About-image" className="object-cover rounded-2xl h-full w-full"/>
                            </div>
                           </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                       <div className="about-image md:h-[600px]">
                                <Image src={About2} alt="About-image" className="object-cover rounded-2xl h-full w-full"/>
                            </div>
                            <div className="about-pere pt-10">
                                <p className="GolosText text-sm text-gray-500">we believe that every space has the power to inspire, and that great design brings that inspiration to life. Our mission is to craft environments that stir creativity.</p>
                             <button className="mt-9 border border-gray-500/50 px-5 py-3 rounded-full GolosText font-semibold hover:bg-(--prim) cursor-pointer hover:text-white">
                                <Link href={"/"}>
                                   Learn More <i className="bi bi-arrow-right ps-1"/>
                                </Link>
                             </button>
                            </div>
                    </div>
                </div>
            </div>

            <div className="video w-full pb-10">
                <video src="/Video-bg.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover"/>
            </div>

             <div className="px-[8%] lg:px-[12%] py-20 pb-0">
                 <div className="flex flex-col lg:flex-row gap-20">
            <div className="w-full lg:w-1/3 title pt-8">
               <span className="rounded-full title-span border border-gray-400 py-4 px-8 GolosText uppercase font-bold">
                Our History
               </span>
            </div>
            <div className="w-full lg:w-2/3">
               <h1 className="CalSans text-4xl md:text-6xl mb-5">Our History<span className="text-(--prim)"> Is Full Of Interesting</span> Stage and Events</h1>
            </div>
         </div>
         <div className="history-swiper py-15 pb-0">
            <Swiper slidesPerView={4} spaceBetween={30} loop={true} autoplay={{
                delay:1500,
                disableOnInteraction:false
            }}
            speed={200} modules={[Autoplay]} breakpoints={{
                1199:{slidesPerView:4},
                991:{slidesPerView:2},
                575:{slidesPerView:1},
                0:{slidesPerView:1}
            }}>\
            {
                historyData.map((history,idx)=>(
                   <SwiperSlide key={idx}>
                        <div className="history-card">
                            <Image
                            src={history.image}
                            alt={`history-${history.year}`}
                            className="rounded-2xl w-40 h-40 object-cover"
                            />
                            <div className="history-content py-15">
                                <h2 className="text-3xl CalSans font-bold mb-5">{history.year}</h2>
                                <p className="GolsText text-sm text-gray-500">{history.text}</p>
                            </div>
                        </div>
                </SwiperSlide>
                ))
            }
               
            </Swiper>
         </div>
             </div>

             <div className="px-[8%] lg:px-[12%] py-20 pb-0">
                 <div className="flex flex-col lg:flex-row gap-20">
            <div className="w-full lg:w-1/3 title pt-8">
               <span className="rounded-full title-span border border-gray-400 py-4 px-8 GolosText uppercase font-bold">
                Award & achievement
               </span>
            </div>
            <div className="w-full lg:w-2/3">
               <h1 className="CalSans text-4xl md:text-6xl mb-5">Design That<span className="text-(--prim)"> Speaks Our Industry</span> Awards</h1>
            </div>
         </div>
         <div className="flex flex-col lg:flex-row gap-10 py-15 realtive" onMouseMove={(e)=>{
            if(hoveredIndex === null) sethoveredIndex(0);
         }}
         onMouseLeave={()=>sethoveredIndex(0)}
         >
           <div className="w-full lg:w-1/3 realtive overflow-hidden rounded-2xl">
              <div className="relative h-[420] w-full">
                {awardsData.map((award,idx)=>(
                    <Image key={idx} src={award.image} alt={award.title} width={500} height={500} className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-700 ease-in-out ${hoveredIndex === idx ? "opacity-100":"opacity-0"}`}/>
                ))}
              </div>
           </div>
           <div className="w-full lg:w-2/3">
             {awardsData.map((item,idx)=>(
                <div key={idx } onMouseMove={()=>sethoveredIndex(idx)}
                className="border-b border-gray-300 py-6 flex justify-between items-center cursor-pointer">
                    <div className="flex items-center gap-5">
                    <span className="GolosText text-gray-500 text-2xl">{item.years}</span>
                    <h2 className="text-3xl Calsans transition-all duration-300 hover:text-(--prim)">{item.title}</h2>
                    </div>
                    <p className="GolosText text-gray-500 hidden md:block">{item.category}</p>
                </div>
             ))}
           </div>
         </div>
           </div>
           <div className="bg-[#EEE]">
            <Expertise/>
           </div>
           <div className="pt-0 md:pt-[18%] bg-[#EEE]">
            <Testimonial/>
           </div>
           <div className="px-[8%] lg:px-[12%] pb-0 py-30">
                 <Swiper slidesPerView={5} spaceBetween={30} loop={true} autoplay={{delay:1500}} modules={[Autoplay]} breakpoints={{
                   1200:{slidesPerView:5},
                   991:{slidesPerView:4},
                   575:{slidesPerView:2},
                   0:{slidesPerView:2}
                 }}
                 className="partner-swiper"
                 >
                 {Partners.map((img,index)=>(
                   <SwiperSlide key={index}>
                     <Image src={img} alt="Partnersimage" className="partner-img"/>
                   </SwiperSlide>
                 ))}
                 </Swiper>
               </div>

               <Newsletter/>
        </>
    )
}

