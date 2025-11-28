import React from 'react'

export default function Newsletter() {
  return (
    <>
    <div className="px-[8%] lg:px-[12%] py-30 newsletter relative">
        <div className='flex flex-col items-center justify-center'>
           <span className="rounded-full title-span border border-gray-400 py-2 px-7 ps-10 GolosText uppercase font-bold">
                            Subscribe to the newsletter
                        </span>
                        <h1 className="CalSans text-center text-4xl md:text-7xl my-5 w-full lg:w-[60%]">Join<span className="text-(--prim)"> Our Newsletter Stay </span>Up To Date</h1>
                        <p className="text-center GolosText w-full text-lg lg:w-[60%] mb-5">Join our newsletter. Learn something new, gain access to exclusive content, and stay informed with the latest updates in the industry.</p>

                        <div className="email-details border-b border-gray-300 w-[450px] flex items-center transition-all duration-300 hover:border-(--prim) cursor-pointer">
                          <input type="email" placeholder='Email address..' className='focus:outline-none w-full py-3'/>
                          <i className="text-white bi bi-arrow-up-right px-2 py-1 bg-(--prim) rounded-full transition-all duration-300 hover:rotate-45/>
                          "></i>
                        </div>
        </div>
    </div>
    </>
  )
}

