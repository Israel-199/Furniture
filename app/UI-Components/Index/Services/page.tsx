import service1 from "@/public/service-1.jpg"
import service2 from "@/public/service-2.jpg"
import service3 from "@/public/service-3.jpg"
import service4 from "@/public/service-4.jpg"
import service5 from "@/public/service-5.jpg"
import Image from "next/image"


export default function Services() {
    return (
        <>
            <div className="px-[8%] lg:px-[12%] py-20 pt-20 pb-60 service relative">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="w-full lg:w-1/3 title pt-8">
                        <span className="rounded-full title-span border border-gray-400 py-4 px-8 GolosText uppercase font-bold">
                            Our Services
                        </span>
                    </div>
                    <div className="w-full lg:w-2/3">
                        <h1 className="CalSans text-4xl md:text-6xl mb-5">
                            Explore our <span className="text-(--prim)">premium furniture collections</span> and services
                        </h1>

                        <div className="text-gray-400 GoloText">
                            We craft high-quality furniture designed to elevate your lifestyle. Browse our range of modern, elegant, and durable pieces created with precision and craftsmanship.
                        </div>

                    </div>
                </div>
                <div className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mt-4">
                    <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 md:gap-8">
                        <h4 className="text-4xl CalSans font-bold">01</h4>
                        <div className="service-content">
                            <h2 className="mb-3 text-4xl CalSans">Living Room Furniture</h2>
                            <p className="GolosText text-gray-400">
                                Stylish and durable living room pieces, including sofas, coffee tables, TV stands, and complete setup solutions tailored for modern homes.
                            </p>
                        </div>

                    </div>
                    <div className="overflow-hidden h-full md:h-[210%] w-full md:w-[300px]">
                        <Image src={service1} alt="service-image" className="w-full service-img object-cover rounded-2xl border-2 border-black" />
                    </div>
                    <i className="bi bi-arrow-up-right transition-all duration-300"></i>
                </div>
                <div className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
                    <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 md:gap-8">
                        <h4 className="text-4xl CalSans font-bold">02</h4>
                        <div className="service-content">
                            <h2 className="mb-3 text-4xl CalSans">Bedroom Furniture Collections</h2>
                            <p className="GolosText text-gray-400">
                                Premium bedroom sets designed for comfort and elegance — beds, wardrobes, bedside tables, and storage solutions crafted with precision.
                            </p>
                        </div>

                    </div>
                    <div className="overflow-hidden h-full md:h-[210%] w-full md:w-[300px]">
                        <Image src={service2} alt="service-image" className="w-full service-img object-cover rounded-2xl border-2 border-black" />
                    </div>
                    <i className="bi bi-arrow-up-right transition-all duration-300"></i>
                </div>
                <div className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mt-4">
                    <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 md:gap-8">
                        <h4 className="text-4xl CalSans font-bold">03</h4>
                        <div className="service-content">
                            <h2 className="mb-3 text-4xl CalSans">Custom Furniture Design</h2>
                            <p className="GolosText text-gray-400">
                                Personalized furniture crafted to match your taste — from concept selection to material choice, finishes, sizing, and functional detailing.
                            </p>
                        </div>

                    </div>
                    <div className="overflow-hidden h-full md:h-[210%] w-full md:w-[300px]">
                        <Image src={service3} alt="service-image" className="w-full service-img object-cover rounded-2xl border-2 border-black" />
                    </div>
                    <i className="bi bi-arrow-up-right transition-all duration-300"></i>
                </div>
                <div className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mt-4">
                    <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 md:gap-8">
                        <h4 className="text-4xl CalSans font-bold">04</h4>
                        <div className="service-content">
                            <h2 className="mb-3 text-4xl CalSans">Outdoor & Patio Furniture</h2>
                            <p className="GolosText text-gray-400">
                                High-quality outdoor furniture including patio chairs, tables, loungers, and durable weather-resistant sets designed for stylish outdoor living.
                            </p>
                        </div>

                    </div>
                    <div className="overflow-hidden h-full md:h-[210%] w-full md:w-[300px]">
                        <Image src={service4} alt="service-image" className="w-full service-img object-cover rounded-2xl border-2 border-black" />
                    </div>
                    <i className="bi bi-arrow-up-right transition-all duration-300"></i>
                </div>
                <div className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mt-4">
                    <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 md:gap-8">
                        <h4 className="text-4xl CalSans font-bold">05</h4>
                        <div className="service-content">
                            <h2 className="mb-3 text-4xl CalSans">Renovation and Remodeling</h2>
                            <p className="GolosText text-gray-400">Overhaulting existing space .....</p>
                        </div>
                    </div>
                    <div className="overflow-hidden h-full md:h-[210%] w-full md:w-[300px]">
                        <Image src={service5} alt="service-image" className="w-full service-img object-cover rounded-2xl border-2 border-black" />
                    </div>
                    <i className="bi bi-arrow-up-right transition-all duration-300"></i>
                </div>
            </div>
        </>
    )
}

