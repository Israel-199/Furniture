"use client";

import { desc } from "framer-motion/client";

const PricingPlanData = [
    {
        id: "1",
        plan: "Basic Plan",
        desc: "Perfect for individuals looking for essential furniture design guidance at a budget-friendly rate.",
        price: "3,500 ETB",
        planInfo: [
            "Suitable for single-room projects",
            "Access to basic design features",
            "Limited catalog of furniture items",
            "Email support",
            "Monthly updates"
        ]
    },
    {
        id: "2",
        plan: "Premium Plan",
        desc: "A complete design and furnishing solution for clients seeking high-quality, detailed service.",
        price: "7,500 ETB",
        planInfo: [
            "Best for full home or multi-room projects",
            "Access to all design features",
            "Full furniture & decor library",
            "Priority email & phone support",
            "Weekly updates"
        ]
    },
];


export default function PricingPlan() {
  return (
    <>
    <div className='px-[8%] lg:px-[12%] py-20 mt-0 md:mt-[17%]'>  
         <div className="flex flex-col lg:flex-row gap-20">
            <div className="w-full lg:w-1/3 title pt-8">
               <span className="rounded-full title-span border border-gray-400 py-4 px-8 GolosText uppercase font-bold">
                 our pricing plans
               </span>
            </div>
            <div className="w-full lg:w-2/3">
               <h1 className="CalSans text-5xl md:text-6xl mb-5 w-full lg:w-[60%]">Design your<span className="text-(--prim)"> space, know </span>services</h1>
            </div>
         </div>
         <div className="flex flex-col lg:flex-row gap-5 h-full mt-10">
            <div className="w-full lg:w-1/2">
              <div className='pricing-wrap h-full rounded-2xl p-5 pt-20'>
                 <h1 className="CalSans text-4xl md:text-5xl text-white mb-5 w-full">Your dreams,<span className="text-(--prim)"> our mission, let's</span> make it happen.</h1>
              </div>
            </div>
              <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {PricingPlanData.map((plan,index)=>(
                   <div key={index} className="pricing-card bg-white shadow p-5 rounded-2xl">
                      <h2 className="GolosText font-semibold text-3xl mb-5">{plan.plan}</h2>
                      <p className="text-gray-500 text-[15px] lg:text-[20px]">{plan.desc}</p>
                      <h1 className="text-5xl lg:text-6xl mt-5 text-(--prim) CalSans flex border-b border-gray-300 pb-3">{plan.price}<span className="text-xl text-gray-600">/ Per Month</span></h1>
                      <div className="flex flex-col gap-2 my-5">
                        {plan.planInfo.map((info)=>(
                            <p className="text-gray-800 font-semibold text-[15px] GolosText">
                                <i className="bi bi-check-circle-fill text-(--prim)"></i> {info}
                            </p>
                        ))}
                      </div>
                       <button className="border border-gray-300 GolosText rounded-full px-4 py-2 hover:bg-(--prim) hover:text-white cursor-pointer hover:border-transparent transition-all duration-300">
                Get Started Now
              </button>
                    </div>
                ))}
              </div>
              </div>
         </div>
    </div>
     </>
  )
}

