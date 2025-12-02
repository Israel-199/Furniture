"use client";
import Image from "next/image";

import BlogData from "@/app/mockData/BlogsData.json";
import Link from "next/link";
import { useState } from "react";

export default function Blog() {

    const [showAll, setShowAll] = useState(false);

    const visibleBlogs = showAll ? BlogData : BlogData.slice(0, 3);
    return (
        <>
            <div className="section-bg text-white flex flex-col">
                <h1 className="text-8xl GolosText mt-15"><p>Our Blog</p></h1>
                <div className="flex items-center text-xl mt-3">
                    <Link href={"/"} className="hover:text-(--prim) transition-all duration-300">Home</Link>
                    <i className="ri-arrow-right-wide-fill mt-1" />
                    <h2 className="GolosText">Blog</h2>
                </div>
            </div>
            <div className="px-[8%] lg:px-[12%] py-30">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {visibleBlogs.map((blog, index) => (
                        <div key={index} className="group cursor-pointer">
                            <Link href={`/UI-Components/Blogs/${blog.id}`}>
                                <div className="blog-image relative rounded-2xl overflow-hidden">
                                    <Image src={blog.image} alt={blog.title} width={500} height={500} className="w-full h-full rounded-2xl group-hover:scale-110 transition-all duration-300" />
                                    <span className="absolute top-5 left-5 bg-(--prim) hover:bg-(--text) px-4 py-1 font-semibold rounded-full text-white GolosText">{blog.tag}</span>
                                </div>
                                <div className="blog-info mt-3">
                                    <p className="GolosText text-gray-400">by <span className="text-(--prim) font-semibold">{blog.postby}</span> - <span>{blog.date}</span></p>
                                    <h2 className="text-4xl md:text-3xl my-5 hover:text-(--prim) CalSans transition-all duration-300">{blog.title}</h2>
                                    <p className="text-gray-500 GolosText">{blog.desc}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <button onClick={() => setShowAll(!showAll)} className="px-8 py-3 bg-(--prim) cursor-pointer text-white rounded GolosText text-xl font-semibold hover:bg-black transition-all duration-300">
                        {showAll ? "View Less" : "View More"}
                    </button>
                </div>
            </div>
        </>
    )
}

