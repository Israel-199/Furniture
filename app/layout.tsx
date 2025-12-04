import type { Metadata } from "next";
import {Audiowide, Cal_Sans, Golos_Text} from "next/font/google";
import "./globals.css";
import ClientLayout from "./Components/ClientLayout";

const audiowide = Audiowide({
  weight:"400",
  variable: "--font-audiowide",
  subsets:["latin"]
});

const golostext = Golos_Text({
  weight:"400",
  variable: "--font-golostext",
  subsets:["latin"]
});

const calsans = Cal_Sans({
  weight:"400",
  variable: "--font-calsans",
  subsets:["latin"]
});



export const metadata: Metadata = {
title: "Deluxe Furniture - Office, Home & Commercial Furniture in Ethiopia",
description: "Deluxe Furniture, a division of MINAYE PLC, is a leading supplier of office, home, cafeteria, bar, and restaurant furniture in Ethiopia. Explore our showrooms in Addis Ababa and Hawassa, and discover high-quality furniture, design consultation, and exceptional customer service.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${audiowide.variable} ${golostext.variable} ${calsans.variable} antialiased`}
      >
        <ClientLayout>
        {children}
        </ClientLayout>
      </body>
    </html>
  );
}
