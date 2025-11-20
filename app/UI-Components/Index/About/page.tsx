"use client";
import AboutImg1 from "@/public/About-1.jpg"
import AboutImg2 from "@/public/About-2.jpg"
import AboutImg3 from "@/public/About-3.jpg"
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-20 about">
         <div className="flex flex-col lg:flex-row gap-20">
            <div className="w-full lg:w-1/3 title pt-8">
               <span className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-bold">
                About Deluxe
               </span>
            </div>
            <div className="w-full lg:w-2/3">
               <h1 className="CalSans text-4xl md:text-7xl">We Shape<span className="text-(--prim)"> Interior Design, Crafting</span>Timeless and Inspiring Spaces</h1>
            </div>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">
            <div className="about-image">
                <Image src={AboutImg1} alt="about-image" className="rounded-3xl transition-all duration-300 hover:-translate-y-1.5"/>
            </div>
            <div className="about-image lg:pt-10">
                <Image src={AboutImg2} alt="about-image" className="rounded-3xl transition-all duration-300 hover:-translate-y-1.5"/>
            </div>
            <div className="about-image lg:pt-20">
                <Image src={AboutImg3} alt="about-image" className="rounded-3xl transition-all duration-300 hover:-translate-y-1.5"/>
            </div>
         </div>
      </div>
    </>
  )
}

