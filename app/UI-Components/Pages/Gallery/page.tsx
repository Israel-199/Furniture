"use client";
import Link from 'next/link'
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import gallery1 from '@/public/gallery-img1.jpg';
import gallery2 from '@/public/gallery-img2.jpg';
import gallery3 from '@/public/gallery-img3.jpg';
import gallery4 from '@/public/gallery-img4.jpg';
import gallery5 from '@/public/gallery-img5.jpg';
import gallery6 from '@/public/gallery-img6.jpg';
import gallery7 from '@/public/gallery-img7.jpg';
import gallery8 from '@/public/gallery-img8.jpg';
import gallery9 from '@/public/gallery-img9.jpg';
import gallery10 from '@/public/gallery-img10.jpg';
import gallery11 from '@/public/gallery-img11.jpg';
import gallery12 from '@/public/gallery-img12.jpg';
import { useState } from 'react';
import Newsletter from '../../Index/Newsletter/page';

export default function Gallery() {

    const [index, setIndex] = useState(-1);

    const images = [
        { src: gallery1.src },
        { src: gallery2.src },
        { src: gallery3.src },
        { src: gallery4.src },
        { src: gallery5.src },
        { src: gallery6.src },
        { src: gallery7.src },
        { src: gallery8.src },
        { src: gallery9.src },
        { src: gallery10.src },
        { src: gallery11.src },
        { src: gallery12.src },
    ];

    return (
        <>
            <div className="section-bg text-white flex flex-col">
                <h1 className="text-8xl GolosText mt-15">Gallery</h1>
                <div className="flex items-center text-xl mt-3">
                    <Link href={"/"} className="hover:text-(--prim) transition-all duration-300">Home</Link>
                    <i className="ri-arrow-right-wide-fill mt-1" />
                    <h2 className="GolosText">Gallery</h2>
                </div>
            </div>

            <div className='px-[8%] lg:px-[12%] py-20'>
                <div className='flex flex-col lg:flex-row gap-5 mt-10'>
                    <div className='w-full lg:w-1/2'>
                        <div className="gallery-image" onClick={() => setIndex(0)}>
                            <Image src={gallery1} alt="gallery1" className='rounded-2xl w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-300' />
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 '>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                            <div className="gallery-image" onClick={() => setIndex(0)}>
                                <Image src={gallery2} alt="gallery2" className='rounded-2xl w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-300' />
                            </div>
                            <div className="gallery-image" onClick={() => setIndex(0)}>
                                <Image src={gallery3} alt="gallery3" className='rounded-2xl w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-300' />
                            </div>
                        </div>
                        <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                            <div className="gallery-image" onClick={() => setIndex(0)}>
                                <Image src={gallery4} alt="gallery4" className='rounded-2xl w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-300' />
                            </div>
                            <div className="gallery-image" onClick={() => setIndex(0)}>
                                <Image src={gallery5} alt="gallery5" className='rounded-2xl w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-300' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col-reverse lg:flex-row gap-5'>
                    <div className='w-full lg:w-1/2 '>
                        <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                            <div className="gallery-image" onClick={() => setIndex(5)}>
                                <Image src={gallery6} alt="gallery2" className='rounded-2xl w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-300' />
                            </div>
                            <div className="gallery-image" onClick={() => setIndex(6)}>
                                <Image src={gallery7} alt="gallery3" className='rounded-2xl w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-300' />
                            </div>
                        </div>
                        <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                            <div className="gallery-image" onClick={() => setIndex(7)}>
                                <Image src={gallery8} alt="gallery4" className='rounded-2xl w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-300' />
                            </div>
                            <div className="gallery-image" onClick={() => setIndex(4)}>
                                <Image src={gallery9} alt="gallery5" className='rounded-2xl w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-300' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 ml-2 w-full lg:w-1/2'>
                        <div className="gallery-image" onClick={() => setIndex(9)}>
                            <Image src={gallery10} alt="gallery1" className='rounded-2xl w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-300' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-5 mt-10'>
                    <div className='w-full lg:w-1/2 '>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                            <div className="gallery-image" onClick={() => setIndex(10)}>
                                <Image src={gallery11} alt="gallery2" className='rounded-2xl w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-300' />
                            </div>
                            <div className="gallery-image" onClick={() => setIndex(11)}>
                                <Image src={gallery12} alt="gallery3" className='rounded-2xl w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-300' />
                            </div>
                        </div>
                        <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                            <div className="gallery-image" onClick={() => setIndex(3)}>
                                <Image src={gallery4} alt="gallery4" className='rounded-2xl w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-300' />
                            </div>
                            <div className="gallery-image" onClick={() => setIndex(6)}>
                                <Image src={gallery7} alt="gallery5" className='rounded-2xl w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-300' />
                            </div>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2 ml-2'>
                        <div className="gallery-image" onClick={() => setIndex(0)}>
                            <Image src={gallery1} alt="gallery1" className='rounded-2xl w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-300' />
                        </div>
                    </div>
                </div>
            </div>

            <Newsletter />

            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={images}
                index={index}
            />
        </>
    )
}

