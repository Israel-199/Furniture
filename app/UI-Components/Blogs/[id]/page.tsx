"use client";
import Link from 'next/link'
import BlogData from "@/app/mockData/BlogsData.json";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import blogDet1 from "@/public/Blog-detail-1.jpg";
import blogDet2 from "@/public/Blog-detail-2.jpg";
import quote from "@/public/quote.png";

export default function BlogDetails() {

    const { id } = useParams();

    const [blog, setBlog] = useState<any>(null);

    useEffect(() => {
        const foundBlog = BlogData.find((item) => item.id === id);
        setBlog(foundBlog)
    }, [id]);

    if (!blog) {
        return (
            <div className='section-bg text-white flex flex-col'>
                <h1 className='text-5xl md:text-6xl GolosText mt-15'>Blog Not Found!</h1>
                <div className='flex items-center gap-5 mt-3'>
                    <Link href={"/UI-Components/Blogs"} className='hover:text-(--prim) text-xl transition-all duration-300 mt-5 border border-gray-300 px-4 py-2 rounded hover:bg-white'>Back To Blogs</Link>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="section-bg text-white flex flex-col">
                <h1 className="text-6xl md:text-8xl GolosText mt-15">Blog Details</h1>
                <div className="flex items-center text-xl mt-3">
                    <Link href={"/"} className="hover:text-(--prim) transition-all duration-300">Home</Link>
                    <i className="ri-arrow-right-wide-fill mt-1" />
                    <Link href={"/UI-Components/Blogs"} className="hover:text-(--prim) transition-all duration-300">Blog</Link>
                    <h2 className="GolosText"></h2>
                    <i className="ri-arrow-right-wide-fill mt-1" />
                    <h2 className="GolosText text-white">{blog.title}</h2>
                </div>
            </div>

            <div className="Px-[8%] lg:px-[12%] py-20">
                <div className='w-full flex flex-col lg:flex-row justify-between gap-8'>
                    <div className="w-full lg:w-1/1">
                        <div>
                            <p className='text-gray-400 GoloText mb-4'><span className="bg-(--prim) px-4 py-1 rounded-full text-white mr-3">{blog.tag}</span> by <span className='text-(--prim) font-semibold'>{blog.postby}</span> -{" "}<span>{blog.date}</span></p>
                            <h2 className="text-4xl md:text-6xl Calsans mb-3">{blog.title}</h2>
                            <p className='text-gray-500 GolosText leading-relaxed'>{blog.desc}</p>
                        </div>
                        <div className="rounded-2xl overflow-hidden mt-10">
                            <Image
                                src={blog.imageDet}
                                alt={blog.title}
                                width={1000}
                                height={600}
                                className='w-full h-auto rounded-2xl'
                            />
                        </div>
                        <p className='text-gray-500 GolosText mt-5 leading-relaxed'>
                            modern design is all about creating a sleek, functional, and pleasing space that reflects contemporary living.
                        </p>
                        <h2 className="text-4xl md:text-4xl CalSans my-5">Understanding the Fundamentals</h2>
                        <p className='text-gray-500 GolosText mt-5 leading-relaxed'>
                            starting by eliminating unnecessary items and embracing a "less is more" approach.
                        </p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
                            <Image
                                src={blogDet1}
                                alt='blogDet1'
                                className='w-full h-full rounded-2xl'
                            />
                            <Image
                                src={blogDet2}
                                alt='blogDet2'
                                className='w-full h-full rounded-2xl'
                            />
                        </div>
                        <h2 className="text-4xl md:text-4xl CalSans my-6">Exploring Design Styles</h2>
                        <p className='text-gray-500 GolosText mt-5 leading-relaxed'>Modern interior design prioritizes furniture that is both aesthetically pleasing and highly functional.</p>
                        <div className='my-5'>
                            <div className='bg-[#efebe8] rounded-2xl flex flex-col justify-center items-center text-center px-10 py-8'>
                                <Image
                                    src={quote}
                                    alt='quote'
                                    className='rounded-2xl'
                                />
                                <p className='GolosText text-2xl mb-3'>"Modern design transforms ordinary space extraordinary environments.</p>
                                <h4 className="GolosText font-bold">Aallyah Brown</h4>
                            </div>
                        </div>
                        <h2 className='text-4xl md:text-4xl CalSans my-5'>Bringing Modern Design</h2>
                        <p className="text-gray-500 GolosText mt-5 leading-relaxed">In corporating these modern design tips, you can transform your home into a stylish, functional, and comfortable haven.</p>
                    </div>
                    <div className="w-full lg:w-1/2 sticky top-22 left-0 h-full">
                        <div>
                            <h2 className='text-4xl md:text-4xl CalSans my-5'>Categories</h2>
                            <div className="flex flex-col gap-2">
                                <h2 className="GolosText text-lg hover:text-(--prim) cursor-pointer transition-all duration-300 font-semibold border-b border-gray-300 pb-1">Accessories</h2>
                                <h2 className="GolosText text-lg hover:text-(--prim) cursor-pointer transition-all duration-300 font-semibold border-b border-gray-300 pb-1">Electrical & Lighting</h2>
                                <h2 className="GolosText text-lg hover:text-(--prim) cursor-pointer transition-all duration-300 font-semibold border-b border-gray-300 pb-1">Home Appliance</h2>
                                <h2 className="GolosText text-lg hover:text-(--prim) cursor-pointer transition-all duration-300 font-semibold border-b border-gray-300 pb-1">Power Tools</h2>
                                <h2 className="GolosText text-lg hover:text-(--prim) cursor-pointer transition-all duration-300 font-semibold border-b border-gray-300 pb-1">Uncategorized</h2>
                                <h2 className="GolosText text-lg hover:text-(--prim) cursor-pointer transition-all duration-300 font-semibold border-b border-gray-300 pb-1">Ware Accessories</h2>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-4xl CalSans mt-10 mb-5">Recent Posts</h2>
                            <div className="flex flex-col gap-2">
                                {BlogData.slice(0, 4).map((blog, idx) => (
                                    <Link href={`/UI-Components/Blogs/${blog.id}`}>
                                        <div className='flex flex-row gap-3' key={idx}>
                                            <Image
                                                src={blog.image}
                                                alt={blog.title}
                                                width={150}
                                                height={150}
                                                className='rounded-2xl'
                                            />
                                            <div className='flex flex-col'>
                                                <p className='GolosText'>{blog.date}</p>
                                                <h2 className="GolosText text-cl md:text-3xl lg:text-xl hover:text-(--prim) cursor-pointer font-semibold transition-all duration-300">{blog.title}</h2>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
