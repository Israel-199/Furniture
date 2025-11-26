import Link from "next/link";


export default function Banner() {
    return (
        <>
            <div className="px-[8%] lg:px-[12%] py-30 banner h-[50vh] md:h-[90vh] flex flex-col items-center justify-center">
                <div className="title flex flex-col items-center justify-center">
                    <span className="rounded-full text-white title-span border border-gray-400 py-2 px-6 mt-4 GolosText uppercase font-bold">
                        Your Best Choice
                    </span>
                    <h1 className="CalSans text-5xl md:text-8xl w-full lg:w-[70%] my-5 text-white">Let's Start<span className="text-(--prim)"> Your New Dream</span> Project</h1>
                    <Link href={"/UI-Components/Pages/Contact"}>
                        <button className="rounded-full px-10 py-4 GolosText text-white bg-[#5b6063] transition-all duration-300 hover:bg-(--prim) cursor-pointer">
                            Get A Quote
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

