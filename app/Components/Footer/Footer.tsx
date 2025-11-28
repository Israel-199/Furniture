import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-20 mb-0 footer relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-15">
          <div className="footer-content">
            <Link href="/" className="text-3xl lg:text-5xl font-bold Audiowide text-white">
              <Image src={"/logo/delux.png"} alt="delux logo" width={140} height={140} />
            </Link>
            <h2 className="text-gray-300 text-lg my-5 GolosText">We transform your vision into beautifully crafted spaces.</h2>
            <p className="text-gray-300 GolosText">5609 E Sprague Ave, Spokane Valley, WA 99212, USA</p>
          </div>
          <div className="footer-content py-3">
            <ul className="footer-links flex flex-col">
              <Link href={"/UI-Components/Pages/About"} className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-(--prim) hover:ml-2">About Us</Link>
              <Link href={"/UI-Components/Pages/Services"} className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-(--prim) hover:ml-2">Services</Link>
              <Link href={"/UI-Components/Pages/Gallery"} className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-(--prim) hover:ml-2">Gallery</Link>
              <Link href={"/UI-Components/Pages/Teams"} className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-(--prim) hover:ml-2">Our Team</Link>
              <Link href={"/UI-Components/Blogs"} className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-(--prim) hover:ml-2">Blog</Link>
              <Link href={"/UI-Components/Pages/Contact"} className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-(--prim) hover:ml-2">Contact Us</Link>
            </ul>
          </div>
          <div className="footer-content py-3">
            <ul className="footer-links flex flex-col">
              <Link href={"/UI-Components/Projects"} className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-(--prim) hover:ml-2">Our Projects</Link>
              <Link href={"/"} className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-(--prim) hover:ml-2">Partners</Link>
              <Link href={"/"} className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-(--prim) hover:ml-2">Partners Program</Link>
              <Link href={"/"} className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-(--prim) hover:ml-2">Affiliate Program</Link>
              <Link href={"/"} className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-(--prim) hover:ml-2">Terms & Conditions</Link>
              <Link href={"/UI-Components/Pages/Contact"} className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-(--prim) hover:ml-2">Support Center</Link>
            </ul>
          </div>
          <div className="footer-content py-3 flex flex-col">
            <h2 className="text-3xl text-(--prim) underline CalSans mb-3">+(251) 946-002-612</h2>
            <h4 className="text-2xl text-gray-300 GolosText">Deluxe@gmail.com</h4>
            <div className="footer-social flex gap-3 py-6 cursor-pointer">
              <p className="text-gray-300 GolosText transition-all duration-300 hover:text-(--prim) font-semibold hover:-translate-y-1">Facebook</p>
              <p className="text-gray-300 GolosText transition-all duration-300 hover:text-(--prim) font-semibold hover:-translate-y-1">Instagram</p>
              <p className="text-gray-300 GolosText transition-all duration-300 hover:text-(--prim) font-semibold hover:-translate-y-1">YouTube</p>
              <p className="text-gray-300 GolosText transition-all duration-300 hover:text-(--prim) font-semibold hover:-translate-y-1">Twitter</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom flex justify-center items-center py-8 border-t border-gray-500">
          <p className="text-gray-300 text-lg">Copyright 2025. All Rights Reserved By <Link href={"/"} className="transition-all duration-300 text-white text-xl hover:text-(--prim) font-semibold"> deluxe</Link></p>
        </div>
      </div>
    </>
  )
}
