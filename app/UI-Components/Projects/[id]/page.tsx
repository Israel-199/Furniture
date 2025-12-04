"use client";
import Link from 'next/link'

import ProjectsData from "@/app/mockData/Projects.json"
import { useParams } from 'next/navigation';
import { projectGetSourceForAsset } from 'next/dist/build/swc/generated-native';
import Image from 'next/image';
import { title } from 'process';
import CountUp from 'react-countup';

const Gallerys = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6]

const DetailsInfo = [
{
id: 1,
title: "Open Living Spaces:",
pere: "Creating open-plan living areas that feel spacious, airy, and inviting."
},
{
id: 2,
title: "Functional Layouts:",
pere: "Designing furniture arrangements that maximize usability and comfort."
},
{
id: 3,
title: "Natural Lighting:",
pere: "Incorporating windows and light sources to enhance ambiance and mood."
},
{
id: 4,
title: "Elegant Materials:",
pere: "Using high-quality materials to combine durability with stylish aesthetics."
},
{
id: 5,
title: "Custom Decor:",
pere: "Adding personalized touches that reflect your style and personality."
}
];


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Gallery1 from "@/public/gallery-1.jpg";
import Gallery2 from "@/public/gallery-2.jpg";
import Gallery3 from "@/public/gallery-3.jpg";
import Gallery4 from "@/public/gallery-4.jpg";
import Gallery5 from "@/public/gallery-5.jpg";
import Gallery6 from "@/public/gallery-6.jpg";


export default function ProjectDetails() {

    const { id } = useParams();

    const project = ProjectsData.find((p) => p.id === Number(id));

    if (!project) {
        return (
            <div className='section-bg text-white flex flex-col'>
                <h1 className='text-5xl md:text-6xl GolosText mt-15'>Projects Not Found!</h1>
                <div className='flex items-center gap-5 mt-3'>
                    <Link href={"/UI-Components/Projects"} className='hover:text-(--prim) text-xl transition-all duration-300 mt-5 border border-gray-300 px-4 py-2 rounded hover:bg-white'>
                        Back To Projects
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="section-bg text-white flex flex-col">
                <h1 className="text-6xl md:text-8xl GolosText mt-15">Projects</h1>
                <div className="flex items-center text-xl mt-3">
                    <Link href={"/"} className="hover:text-(--prim) transition-all duration-300">Home</Link>
                    <i className="ri-arrow-right-wide-fill mt-1" />
                    <Link href={"/UI-Components/Projects"} className="hover:text-(--prim) transition-all duration-300">Projects</Link>
                    <h2 className="GolosText"></h2>
                    <i className="ri-arrow-right-wide-fill mt-1" />
                    <h2 className="GolosText text-white">{project.title}</h2>
                </div>
            </div>

            <div className="px-[8%] lg:px-[12%] py-20">
                <h2 className='CalSans text-5xl md:text-7xl'>{project.title}</h2>
                <div className='mt-10 border-b border-gray-300 pb-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5'>
                    <div className="flex flex-col items-start">
                        <h2 className='CalSans text-gray-400 tracking-wider'>Architect:</h2>
                        <h3 className='GolosText text-xl'>Themelexus</h3>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className='CalSans text-gray-400 tracking-wider'>Project Type:</h2>
                        <h3 className='GolosText text-xl flex flex-wrap'>
                            {project.tags.map((tag, idx) => (
                                <div key={idx} className='flex'>
                                    {tag}
                                </div>
                            ))}
                        </h3>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className='CalSans text-gray-400 tracking-wider'>Client:</h2>
                        <h3 className='GolosText text-xl'>David Oswald</h3>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className='CalSans text-gray-400 tracking-wider'>Terms:</h2>
                        <h3 className='GolosText text-xl'>6 Month</h3>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className='CalSans text-gray-400 tracking-wider'>Strategy:</h2>
                        <h3 className='GolosText text-xl'>Minimalistic</h3>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className='CalSans text-gray-400 tracking-wider'>Date:</h2>
                        <h3 className='GolosText text-xl'>{project.date}</h3>
                    </div>
                </div>
                <div className='project-det-img mt-10 w-full h-[500px] md:h-[700px] rounded-2xl overflow-hidden'>
                    <Image src={project.image} alt={project.title} width={800} height={400} className="w-full h-full object-cover" />
                </div>
                <div className='mt-10'>
                    <h2 className='CalSans text-5xl md:text-7xl'>Design in Details</h2>
                    <p className='text-gray-500 GolosText mt-5'>consider the physical,mental,and emaotional needs of the people, interior designers use human-centered approchesto address how we live today.</p>
                    <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-5'>
                        {DetailsInfo.map((info, index) => (
                            <div key={index} className='flex gap-2'>
                                <i className="bi bi-check-circle-fill text-(--prim)"></i>
                                <p className='GolosText text-gray-500'><span className='font-bold text-black'> {info.title}</span>{info.pere}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 border border-gray-200 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="pt-10 border border-gray-200 flex flex-col justify-center items-center">
                        <h2 className="text-5xl tracking-wider GolosText font-bold">
                            (
                            <CountUp
                                start={0}
                                end={30}
                                duration={8}
                                enableScrollSpy
                            />
                            M2)
                        </h2>
                        <h2 className='GolosText text-xl mt-2'>BedRoom</h2>
                    </div>
                    <div className="pt-10 border border-gray-200 flex flex-col justify-center items-center">
                        <h2 className="text-5xl tracking-wider GolosText font-bold">
                            (
                            <CountUp
                                start={0}
                                end={22}
                                duration={8}
                                enableScrollSpy
                            />
                            M2)
                        </h2>
                        <h2 className='GolosText text-xl mt-2'>BathRoom</h2>
                    </div>
                    <div className="pt-10 border border-gray-200 flex flex-col justify-center items-center">
                        <h2 className="text-5xl tracking-wider GolosText font-bold">
                            (
                            <CountUp
                                start={0}
                                end={29}
                                duration={8}
                                enableScrollSpy
                            />
                            M2)
                        </h2>
                        <h2 className='GolosText text-xl mt-2'>Strategy</h2>
                    </div>
                    <div className="pt-10 border border-gray-200 flex flex-col justify-center items-center">
                        <h2 className="text-5xl tracking-wider GolosText font-bold">
                            (
                            <CountUp
                                start={0}
                                end={12}
                                duration={8}
                                enableScrollSpy
                            />
                            M2)
                        </h2>
                        <h2 className='GolosText text-xl mt-2'>Kitchen Area</h2>
                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="CalSans text-5xl md:text-7xl">Incredible Result</h2>
                    <p className='text-gray-500 GolosText mt-5'>establishing multi-sensor experience, we can design that resonate acros age and demographics.</p>
                </div>
            </div>
            <div className="project-gallery">
                <Swiper slidesPerView={2} spaceBetween={0} loop={true} autoplay={{ delay: 1500, }} modules={[Autoplay]} speed={1800} breakpoints={{ 1200: { slidesPerView: 2 }, 575: { slidesPerView: 1 }, 0: { slidesPerView: 1 } }}>
                    {Gallerys.map((gallery, index) => (
                        <SwiperSlide key={index}>
                            <Image src={gallery} alt={`Galleryss-Img-${index}`} className='w-full h-[600px] object-cover' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='px-[8%] lg:px-[12%] py-20 about'>
                <div className='flex flex-col lg:flex-row gap-10'>
                    <div className='w-full lg:w-1/3 title pt-8'>
                        <span className='rounded-full title-span border border-gray-400 px-6 py-2 GolosText uppercase font-bold'>Related Projects</span>
                    </div>
                    <div className='w-full lg:w-2/3'>
                        <h1 className='CalSans text-4xl md:text-7xl w-full lg:w-[60%]'>Explore <span className='text-(--prim)'>Our Project</span> Showcase</h1>
                    </div>
                </div>
                <Swiper slidesPerView={3} spaceBetween={30} loop={true} autoplay={{
                    delay: 1500,
                }}
                    modules={[Autoplay]}
                    speed={1800}
                    breakpoints={{
                        1200: { slidesPerView: 3 },
                        991: { slidesPerView: 2 },
                        575: { slidesPerView: 1 },
                        0: { slidesPerView: 1 },
                    }}
                    className='mt-30'
                >
                    {
                        ProjectsData.map((project, idx) => (
                            <SwiperSlide key={idx}>
                                <div className='project-card group'>
                                    <Link href={`/UI-Components/Projects/${project.id}`}>
                                        <div className='project-image relative w-full h-[500px] overflow-hidden rounded-2xl cursor-pointer'>
                                            <div className="project-img w-full h-full bg-cover group-hover:scale-110 transition-all duration-500 bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
                                            <div className="absolute top-5 left-5 flex gap-2 z-50">
                                                {project.tags.map((tag, index) => (
                                                    <div key={index} className="bg-white/20 backdrop-blur-sm text-white border border-gray-300 px-4 py-1 rounded-full hover:bg-(--prim) hover:border-transparent transition-all duration-300">
                                                        {tag}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="project-info my-5">
                                        <Link href={`/UI-Components/Projects/${project.id}`}>
                                            <h2 className="GolosText font-semibold text-4xl hover:text-(--prim) transition-all duration-300">{project.title}</h2>
                                        </Link>
                                        <h5 className="GolosText text-2xl mt-2">{project.location}</h5>
                                        <p className="GolosText text-md text-gray-700">{project.date}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }      </Swiper>
            </div>
        </>
    )
}

