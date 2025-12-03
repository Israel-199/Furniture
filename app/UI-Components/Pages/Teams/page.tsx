"use client";
import Link from 'next/link'
import TeamsData from "@/app/mockData/Teams.json";
import Image from 'next/image';
import quote from '@/public/quote.png';
import team1 from '@/public/team-1.jpg';
import team2 from '@/public/team-2.jpg';
import team3 from '@/public/team-3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
    {
        id: 1,
        image: team1,
        name: "John Doe",
        role: "Interior Designer",
        message: "aspirational interior designer with a passion for creating beautiful and functional spaces. With over 10 years of experience in the industry, John has worked on a wide range of projects, from residential homes to commercial spaces. His keen eye for detail and ability to understand his clients' needs have earned him a reputation as one of the top designers in the field."
    },
    {
        id: 2,
        image: team2,
        name: "Jane Smith",
        role: "Project Manager",
        message: "Jane is an experienced project manager who ensures that all interior design projects are completed on time and within budget. She has a strong background in coordinating teams and managing client expectations, making her an invaluable asset to the company."
    },
    {
        id: 3,
        image: team3,
        name: "Michael Johnson",
        role: "Architect",
        message: "Michael is a skilled architect with a deep understanding of structural design and aesthetics. He collaborates closely with the interior design team to ensure that every project is both beautiful and structurally sound."
    }
]

export default function Teams() {
    return (
        <>
            <div className="section-bg text-white flex flex-col">
                <h1 className="text-8xl GolosText mt-15">Our Team</h1>
                <div className="flex items-center text-xl mt-3">
                    <Link href={"/"} className="hover:text-(--prim) transition-all duration-300">Home</Link>
                    <i className="ri-arrow-right-wide-fill mt-1" />
                    <h2 className="GolosText">Team</h2>
                </div>
            </div>

            <div className="px-[8%] lg:px-[12%] py-20 pb-0 about">
                <div className="flex flex-col lg:flex-row gap-10">.
                    <div className="w-full lg:w-1/3 title pt-8">
                        <span className="rounded-full title-span border border-gray-400 px-6 py-2 GolosText uppercase font-bold">Our Best Team</span>
                    </div>
                    <div className="w-full lg:w-2/3">
                        <h1 className="CalSans text-4xl md:text-7xl w-full lg:w-[80%]">Meet The <span className='text-(--prim)'>Experts Our Interior</span>Designers</h1>
                    </div>
                </div>
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 team-wrapper">
                    {TeamsData.map((team, index) => (
                        <div key={index} className="team-card overflow-hidden rounded-2xl cursor-pointer">
                            <Image src={team.image} alt={team.name} width={400} height={400} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                            <div className='team-content text-white'>
                                <h2 className="CalSans text-4xl">{team.name}</h2>
                                <h2 className="GolosText">{team.role}</h2>
                                <div className='flex items-center gap-2 mt-4'>
                                    <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-white hover:text-black hover:border-transparent cursor-pointer transition-all duration-300">
                                        <i className='ri-facebook-fill' />
                                    </div>
                                    <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-white hover:text-black hover:border-transparent cursor-pointer transition-all duration-300">
                                        <i className='ri-twitter-x-fill' />
                                    </div>
                                    <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-white hover:text-black hover:border-transparent cursor-pointer transition-all duration-300">
                                        <i className='ri-instagram-line' />
                                    </div>
                                    <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-white hover:text-black hover:border-transparent cursor-pointer transition-all duration-300">
                                        <i className='ri-linkedin-fill' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-30 px-[8%] lg:px-[12%] teams-bg py-20 flex felx-col justify-center items-center">
                <Image src={quote} alt="quote" width={130} height={130} />
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    modules={[Autoplay]}
                    autoplay={{ delay: 1800 }} className='w-full justify-center items-center lg:w-[70%]'>
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} >
                            <div className="flex flex-col justify-center items-center text-center px-10">
                                <p className="GolosText text-2xl font-semibold text-center">"{testimonial.message}"</p>
                                <div className='flex items-center gap-5 mt-5'>
                                    <Image src={testimonial.image} alt={testimonial.name} width={150} height={100} className="w-20 h-20 object-cover rounded-full border-4 border-(--prim)" />
                                    <div>
                                        <h2 className="GolosText text-2xl font-bold">{testimonial.name}</h2>
                                        <p className='GolosText font-semibold'>{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Image src={quote} alt="quote" width={130} height={130} />
            </div>
        </>
    )
}
