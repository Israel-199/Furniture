

import Image from "next/image";
import Link from "next/link";

import contactImg from '@/public/contact-image.jpg';

export default function Contact() {
  return (
    <>
    <div className="section-bg text-white flex flex-col">
                <h1 className="text-8xl GolosText mt-15">Contact Us</h1>
                <div className="flex items-center text-xl mt-3">
                    <Link href={"/"} className="hover:text-(--prim) transition-all duration-300">Home</Link>
                    <i className="ri-arrow-right-wide-fill mt-1" />
                    <h2 className="GolosText">Contact Us</h2>
                </div>
            </div>

      <div className='px-[8%] lg:px-[12%] py-20'>
        <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-1/3 title pt-8">
              <span className="rounded-full title-span border border-gray-400 px-6 py-2 GolosText uppercase font-bold">Get in touch!</span>           
            </div>
            <div className="w-full lg:w-2/3">
               <h1 className="CalSans text-4xl md:text-7xl">Have a Project In <span className="text-(--prim)">Mind Let's Make</span> It Happen</h1>
            </div>
        </div>
        <div className="w-full lg:w-1/2 mt-20">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-5"> 
  <div>
    <h2 className="text-gray-400 CalSans tracking-wider">Address:</h2>
    <p className="GolosText text-xl mt-5">
      Behind Mega Building, Meskel Flower Road, next to Mulushewa Butchery, Addis Ababa, Ethiopia
    </p>
  </div>
  <div>
    <h2 className="text-gray-400 CalSans mb-5 tracking-wider">Support</h2>
    <span className="text-(--prim) font-bold">+251-115-580406 / 08 / 12</span>
    <p className="GolosText text-2xl font-bold">info@deluxefurniture.et</p>
  </div>
</div>

        </div>
        <div className="mt-10">
           <div className="flex justify-between items-center flex-col lg:flex-row gap-15">
               <div className="w-full lg:w-1/2">
                  <Image
                  src={contactImg}
                  alt="contactImg"
                  className="w-full h-full rounded-2xl object-cover"
                  />
               </div>
               <div className="w-full lg:w-1/2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col GolosText">
                       <label className="font-semibold mb-2">Full Name*</label>
                       <input type="text" placeholder="Full Name*" className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300">
                    </input>
                    </div>
                     <div className="flex flex-col GolosText">
                       <label className="font-semibold mb-2">Phone*</label>
                       <input type="text" placeholder="Phone*" className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300">
                    </input>
                    </div>
                     <div className="flex flex-col GolosText">
                       <label className="font-semibold mb-2">Email Address*</label>
                       <input type="text" placeholder="Email Address*" className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300">
                    </input>
                    </div>
                     <div className="flex flex-col GolosText">
                       <label className="font-semibold mb-2">Subject*</label>
                       <input type="text" placeholder="I want to*" className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300">
                    </input>
                    </div>
                  </div>
                  <div className="flex flex-col GolosText mt-5">
                       <label className="font-semibold mb-2">Your Message*</label>
                       <textarea placeholder="Your Message"  rows={5} className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300">
                    </textarea>
                    </div>
                    <div className="mt-5">
                      <button className="px-5 py-3 bg-white border border-gray-300 rounded-lg GolosText font-semibold hover:bg-(--prim) hover:text-white cursor-pointer">
                        Send Message
                      </button>
                    </div>
               </div>
           </div>
        </div>
      </div>
      <div className="contact-map h-[600px]">
    <iframe
  loading="lazy"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.116250208976!2d38.71253091433608!3d8.961434692512084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b81bcd0811669%3A0xf7129967b9ed8b79!2sAll%20Mart%20Jemo%20Branch!5e0!3m2!1sen!2set!4v1599234300426!5m2!1sen!2set"
  width="100%"
  height="595"
  style={{ border: 0 }}
  
  referrerPolicy="no-referrer-when-downgrade"
  className="w-full rounded-2xl"
/>




      </div>
    </>
  )
}

