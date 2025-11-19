"use client"
import Image from "next/image";
import HeroImg2 from "@/public/hero-img2.jpg"
import HeroImg from "@/public/Hero-img.jpg"
import Link from "next/link"

export default function Hero() {
  return (
    <>
    <div className="hero">
        <div className="hero-bg-elm"></div>
        <div className="hero-bg-elm2"></div>
        <div className="w-full px-[8%] lg:px-[12%] py-10">
            <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
                <div className="w-full lg:w-1/2 relative">
                  <div className="">
                    <span className="hero-span border border-gray-400 GolosText font-bold px-5 py-2 rounded-full">
                        Discover Your Inspired
                    </span>
                    <h1 className="text-6xl lg:text-8xl CalSans my-5"> Find Your Inspired <span className="text-(--prim)">Home Interior</span></h1>
                    <p className="text-gray-700 w-full md:w-[60%]">Whether you're furnishing your home, office, or any commercial space, we’re committed to creating stylish, comfortable, and durable pieces that bring your vision to life.</p>
                      <button className="mt-9 border border-gray-500/50 px-5 py-3 rounded-full GolosText fonts-semibold hover:bg-(--prim) hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer group">
                        <Link href={"/UI-Components/Pages/Services"}>
                         Get Our Service <i className="bi bi-arrow-right ps-1"></i>
                        </Link>
                        </button>
                        <div className="hero-content-img absolute top-10 right-10 cursor-pointer hidden md:block">
                          <Image src={HeroImg2} alt="heroimage" className="rounded-full"/>
                          <i className="bi bi-play-fill"></i>
                        </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 z-10">
              <div className="hero-image">
                <Image src={HeroImg} alt="heroimage" className="w-full h-150 rounded-2xl"/>
              </div>
            </div>
            </div>
        </div>
    </div>
    <div className="px-[8%] lg:px-[12%] pb-10">

    </div>
    </>
  )
}

