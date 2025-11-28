import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
    <div className="px-[8%] lg:px-[12%] py-20 mb-0 footer relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-15">
            <div className="footer-content">
                  <Link href="/" className="text-3xl lg:text-5xl font-bold Audiowide text-white">
                      <Image src={"/logo/delux.png"} alt="delux logo" width={140} height={140}/>
                 </Link>
            <h2 className="text-gray-300 text-lg my-5 GolosText">We transform your vision into beautifully crafted spaces.</h2>
            <p className="text-gray-300 GolosText">5609 E Sprague Ave, Spokane Valley, WA 99212, USA</p>
        </div>
        <div className="footer-content py-3">
            <ul className="footer-links flex flex-col">
                <Link href={""}>

                </Link>
            </ul>
        </div>
     </div>
     </div>
    </>
  )
}
