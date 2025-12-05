import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-20 pb-0 footer relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-15">
          <div className="footer-content">
            <Link href="/" className="text-3xl lg:text-5xl font-bold Audiowide text-white">
              <Image src={"/logo/delux.png"} alt="delux logo" width={140} height={140} />
            </Link>
            <h2 className="text-gray-300 text-lg my-5 GolosText">We transform your vision into beautifully crafted spaces.</h2>
            <p className="text-gray-300 GolosText">Behind Mega Building, Meskel Flower Road, next to Mulushewa Butchery, Addis Ababa, Ethiopia</p>
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
            <h2 className="text-3xl text-(--prim) underline CalSans mb-3">+251-115-580406/08/12</h2>
            <h4 className="text-2xl text-gray-300 GolosText">info@deluxefurniture.et</h4>
            <div className="footer-social flex gap-3 py-6 cursor-pointer">
              <Link
                href="https://web.facebook.com/deluxefurnitureethiopia#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 GolosText transition-all duration-300 hover:text-(--prim) font-semibold hover:-translate-y-1"
              >
                Facebook
              </Link>

              <Link
                href="https://www.instagram.com/deluxefurniture_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 GolosText transition-all duration-300 hover:text-(--prim) font-semibold hover:-translate-y-1"
              >
                Instagram
              </Link>

              <Link
                href="https://www.youtube.com/@deluxefurniture"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 GolosText transition-all duration-300 hover:text-(--prim) font-semibold hover:-translate-y-1"
              >
                YouTube
              </Link>

              <Link
                href="https://twitter.com/deluxefurniture"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 GolosText transition-all duration-300 hover:text-(--prim) font-semibold hover:-translate-y-1"
              >
                Twitter
              </Link>
            </div>

          </div>
        </div>
        <div className="footer-bottom flex justify-center items-center py-8 border-t border-gray-500">
          <p className="text-gray-300 text-lg">
            © 2025. All Rights Reserved By{" "}
            <Link
              href={"/"}
              className="transition-all duration-300 text-white text-xl hover:text-(--prim) font-semibold"
            >
              Deluxe Furniture
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
