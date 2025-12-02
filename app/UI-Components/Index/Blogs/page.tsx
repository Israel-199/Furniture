"use client";

import Image from "next/image";

import BlogData from "@/app/mockData/BlogsData.json";
import Link from "next/link";

export default function Blogs() {
    return (
        <>
            <div className="px-[8%] lg:px-[12%] py-30 pb-20">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="w-full lg:w-1/3 title pt-8">
                        <span className="rounded-full title-span border border-gray-400 py-2 px-7 GolosText uppercase font-bold">
                            Our Latest Blogs
                        </span>
                    </div>
                    <div className="w-full lg:w-2/3">
                        <h1 className="CalSans text-4xl md:text-7xl mb-5 w-full lg:w-[80%]">Take A look At<span className="text-(--prim)"> Our Latest Blog </span>& Articles.</h1>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 mt-20">
                    <div className="w-full lg:w-1/2">
                        {BlogData.slice(0, 1).map((blog, index) => (
                            <div key={index} className="group cursor-pointer">
                                <Link href={`/UI-Components/Blogs/${blog.id}`}>
                                    <div className="blog-image relative rounded-2xl overflow-hidden">
                                        <Image src={blog.image} alt={blog.title} width={500} height={500} className="w-full h-full rounded-2xl group-hover:scale-110 transition-all duration-300" />
                                        <span className="absolute top-5 left-5 bg-(--prim) px-4 py-1 font-semibold rounded-full text-white GolosText">{blog.tag}</span>
                                    </div>
                                    <div className="blog-info mt-3">
                                        <p className="GolosText text-gray-400">by <span className="text-(--prim) font-semibold">{blog.postby}</span></p>
                                        <h2 className="text-4xl md:text-5xl my-5 hover:text-(--prim) CalSans transition-all duration-300">{blog.title}</h2>
                                        <p className="text-gray-500 GolosText">{blog.desc}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="w-full lg:w-1/2">
                        {BlogData.slice(0, 3).map((blog, index) => (
                            <div key={index} className="group cursor-pointer">
                                <Link href={`/UI-Components/Blogs/${blog.id}`}>
                                    <div className="flex flex-col md:flex-row group cursor-pointer mb-5 gap-4">
                                        <div className="w-full lg:w-1/2 blog-image relative rounded-2xl overflow-hidden">
                                            <Image src={blog.image} alt={blog.title} width={200} height={200} className="w-full h-full rounded-2xl group-hover:scale-110 transition-all duration-300" />
                                            <span className="absolute top-3 left-2 bg-(--prim) px-4 py-1 font-semibold rounded-full text-white GolosText">{blog.tag}</span>
                                        </div>
                                        <div className="w-full lg:w-1/2 blog-info mt-3">
                                            <p className="GolosText text-gray-400">by <span className="text-(--prim) font-semibold">{blog.postby}</span></p>
                                            <h2 className="text-3xl md:text-2xl my-3 hover:text-(--prim) CalSans transition-all duration-300">{blog.title}</h2>
                                            <p className="text-gray-500 GolosText">{blog.desc}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

