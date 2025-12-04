"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/Footer";

export default function ClientLayout({
    children,
}:{
    children:React.ReactNode;
}) {

    const pathname = usePathname();

    const hideLayout = pathname === "/app/UI-Components/Pages/Page404";
  return (
    <>
    {!hideLayout && <Navbar/>}
    {children}
    {!hideLayout && <Footer/>}
    </>
  )
}
