"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const ParalexData = [
    {
        id:1,
        tag:"Residentail",
        number:"01",
        title:(
            <>
            Industrial <br/> elegnce condo
            </>
        ),
        location:"Berlin,Germany",
        year:"2025",
        bg:"/Paralex1.jpg"
    },
    {
        id:2,
        tag:"Residentail",
        number:"02",
        title:(
            <>
            Serens <br/> Space Studio
            </>
        ),
        location:"Berlin,Germany",
        year:"2025",
        bg:"/Paralex2.jpg"
    },
    {
        id:3,
        tag:"Residentail",
        number:"03",
        title:(
            <>
            Urban Zen <br/> Apartment
            </>
        ),
        location:"Berlin,Germany",
        year:"2025",
        bg:"/Paralex3.jpg"
    },
]

export default function Paralex() {
  return (
    <div className="mt-20 pb-30">
        {ParalexData.map((item)=>(
            <ParalexSection key={item.id} item={item}/>
        ))}
    </div>
  )
}

function ParalexSection({item}:{item:any}){
const ref = useRef(null);

const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start","end start"],
});

const scale = useTransform(scrollYProgress,[0,1],[1,0.7]);
const translateY = useTransform(scrollYProgress,[0,1],[0,200]);

return (
    <motion.div ref={ref} className="Paralex-wrap sticky top-0 left-0 h-full" style={{
        backgroundImage:`url(${item.bg})`,
        scale,
        y:translateY,
        zIndex:item.id*1,
    }}>

    <div className="Paralex-content flex flex-col justify-between px-[8%] py-20">
        <div className="flex justify-between items-center gap-5">
            <span className="text-white GolosText border border-gray-300 px-4 p-2 rounded-full uppercase">
                {item.tag}
            </span>
            <h1 className="GolosText text-6xl font-bold text-(--prim)">
                {item.number}
            </h1>
        </div>
        <div className="text-gray-300">
            <h1 className="CalSans text-6xl md:text-8xl">{item.title}</h1>
            <p className="mt-3 text-2xl">{item.location}<br/>{item.year}</p>
        </div>
    </div>
    </motion.div>
)
}